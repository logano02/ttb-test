import { useMemo, useEffect, useCallback } from "react";

import { useSetState } from "../../../hooks/use-set-state";

import { setSession } from "./utils";
import { AuthContext } from "../auth-context";
import { STORAGE_KEY } from "./constant";

import type { AuthState } from "../../types";

import { jwtDecode, JwtPayload } from "jwt-decode";

export type TLoginResponse =
  | {
      given_name: string;
      email: string;
      email_verified: boolean;
    } & JwtPayload;

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const { state, setState } = useSetState<AuthState>({
    user: null,
    loading: true,
  });

  // --------------------------------------------------------------------

  const checkUserSession = useCallback(async () => {
    try {
      const token = localStorage.getItem(STORAGE_KEY);
      if (token) {
        setSession(token);
        const resDecode: TLoginResponse = jwtDecode(token);
        setState({ user: { ...resDecode }, loading: false });
      } else {
        setState({ user: null, loading: false });
      }
    } catch (error) {
      console.error(error);
      setState({ user: null, loading: false });
    }
  }, [setState]);

  // --------------------------------------------------------------------

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

  const status = state.loading ? "loading" : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user
        ? {
            ...state.user,
            role: "admin",
          }
        : null,
      checkUserSession,
      loading: status === "loading",
      authenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",
    }),
    [checkUserSession, state.user, status]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
