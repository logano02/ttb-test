import { useMemo, useEffect, useCallback } from 'react';

import { useSetState } from '../../../hooks/use-set-state';

import { useLazyGetAdminByIdQuery } from '../../../redux/rtk-query/auth/auth';

import { setSession } from './utils';
import { AuthContext } from '../auth-context';
import { UID, STORAGE_KEY } from './constant';

import type { AuthState } from '../../types';

// ----------------------------------------------------------------------

/**
 * NOTE:
 * We only build demo at basic level.
 * Customer will need to do some extra handling yourself if you want to extend the logic and other features...
 */

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const { state, setState } = useSetState<AuthState>({
    user: null,
    loading: true,
  });

  // --------------------------------------------------------------------
  // api

  const [getAdminById] = useLazyGetAdminByIdQuery();

  // --------------------------------------------------------------------

  const checkUserSession = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem(STORAGE_KEY);
      const userId = localStorage.getItem(UID);

      if (accessToken) {
        setSession(accessToken, userId);

        const response = await getAdminById().unwrap();

        setState({ user: { ...response, accessToken }, loading: false });
      } else {
        setState({ user: null, loading: false });
      }
    } catch (error) {
      console.error(error);
      setState({ user: null, loading: false });
    }
  }, [setState, getAdminById]);

  // --------------------------------------------------------------------

  useEffect(() => {
    checkUserSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user
        ? {
            ...state.user,
            role: state.user?.role ?? 'admin',
          }
        : null,
      checkUserSession,
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
    }),
    [checkUserSession, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
