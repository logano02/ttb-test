import { useState, useEffect } from "react";

import { paths } from "../../routes/paths";
import { useRouter } from "../../routes/hooks";

// import { SplashScreen } from 'src/components/loading-screen';

import { useAuthContext } from "../hooks";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: Props) {
  const router = useRouter();

  const { authenticated, loading } = useAuthContext();

  const [isChecking, setIsChecking] = useState<boolean>(true);

  const checkPermissions = async (): Promise<void> => {
    if (loading) {
      return;
    }

    if (!authenticated) {
      router.replace(paths.auth.signIn);
      return;
    }

    setIsChecking(false);
  };

  useEffect(() => {
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, loading]);

  if (isChecking) {
    return <></>;
  }

  return <>{children}</>;
}
