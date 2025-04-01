import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

// import { AuthSplitLayout } from 'src/layouts/auth-split';
// import { AuthCenteredLayout } from 'src/layouts/auth-centered';

// import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

/** **************************************
 * Split layout
 *************************************** */
const SplitLayout = {
  SignInPage: lazy(() => import("src/pages/auth/sign-in")),
};

const authSplit = {
  path: "split",
  children: [
    {
      path: "sign-in",
      element: (
        // <AuthSplitLayout section={{ title: 'Hi, Welcome back' }}>
        <SplitLayout.SignInPage />
        // </AuthSplitLayout>
      ),
    },
  ],
};

/** **************************************
 * Centered layout
 *************************************** */
const CenteredLayout = {
  SignInPage: lazy(() => import("src/pages/auth/sign-in")),
};

const authCentered = {
  path: "centered",
  element: (
    // <AuthCenteredLayout>
    <Outlet />
    // </AuthCenteredLayout>
  ),
  children: [{ path: "sign-in", element: <CenteredLayout.SignInPage /> }],
};

// ----------------------------------------------------------------------

export const authDemoRoutes = [
  {
    path: "auth-demo",
    element: (
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    ),
    children: [authSplit, authCentered],
  },
];
