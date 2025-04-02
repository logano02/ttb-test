import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GuestGuard } from "../../auth/guard";

const Auth = {
  SignInPage: lazy(() => import("../../pages/auth/sign-in")),
};

const auth = {
  path: "sign-in",
  element: (
    <GuestGuard>
      <Auth.SignInPage />
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
