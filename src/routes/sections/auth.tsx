import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

// import { AuthSplitLayout } from "src/layouts/auth-split";

// import { SplashScreen } from "src/components/loading-screen";

import { GuestGuard } from "../../auth/guard";

// ----------------------------------------------------------------------

/** **************************************
 * Auth
 *************************************** */

const Auth = {
  SignInPage: lazy(() => import("../../pages/auth/sign-in")),
};

const auth = {
  path: "sign-in",
  element: (
    <GuestGuard>
      {/* <AuthSplitLayout> */}
      <Auth.SignInPage />
      {/* </AuthSplitLayout> */}
    </GuestGuard>
  ),
};

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: "auth",
    element: (
      <Suspense fallback={<> </>}>
        <Outlet />
      </Suspense>
    ),
    children: [auth],
  },
];
