import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import { CONFIG } from "../../config-global";
// import { DashboardLayout } from "src/layouts/dashboard";

// import { LoadingScreen } from "src/components/loading-screen";

import { AuthGuard } from "../../auth/guard";

// ----------------------------------------------------------------------

const ConfirmView = lazy(() => import("../../pages/confirm/confirm"));

// const ManagementFarmerEditPage = lazy(
//   () => import('src/pages/dashboard/management/farmer/management-edit-farmer')
// );

// ----------------------------------------------------------------------

const layoutContent = (
  // <DashboardLayout>
  <Suspense fallback={<> </>}>
    <Outlet />
  </Suspense>
  // </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: "confirm",
    element: CONFIG.auth.skip ? (
      <>{layoutContent}</>
    ) : (
      <AuthGuard>{layoutContent}</AuthGuard>
    ),
    children: [
      { element: <ConfirmView />, index: true },

      // --------------------------------------------------------------------
      // ** Use this one **

      // {
      //   path: "management",
      //   children: [
      //     { element: <ManagementFarmerPage />, index: true },
      //     {
      //       path: "farmer",
      //       children: [
      //         { element: <ManagementFarmerPage />, index: true },
      //         { path: "create", element: <ManagementFarmerCreatePage /> },
      //         { path: ":id", element: <ManagementFarmerDetailPage /> },
      //         { path: ":id/edit", element: <ManagementFarmerEditPage /> },
      //       ],
      //     },
      //     {
      //       path: "farm",
      //       children: [
      //         { element: <ManagementFarmPage />, index: true },
      //         { path: "create", element: <ManagementFarmCreatePage /> },
      //         { path: ":id", element: <ManagementFarmDetail /> },
      //         { path: ":id/edit", element: <ManagementFarmEditPage /> },
      //         {
      //           path: ":farmId/cowpen/:penId",
      //           element: <ManagementFarmCowPen />,
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
];
