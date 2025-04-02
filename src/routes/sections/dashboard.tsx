import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { CONFIG } from "../../config-global";

import { AuthGuard } from "../../auth/guard";

// ----------------------------------------------------------------------

const ConfirmView = lazy(() => import("../../pages/confirm/confirm"));

// ----------------------------------------------------------------------

const layoutContent = (
  <Suspense fallback={<> </>}>
    <Outlet />
  </Suspense>
);

export const dashboardRoutes = [
  {
    path: "confirm",
    element: CONFIG.auth.skip ? (
      <>{layoutContent}</>
    ) : (
      <AuthGuard>{layoutContent}</AuthGuard>
    ),
    children: [{ element: <ConfirmView />, index: true }],
  },
];
