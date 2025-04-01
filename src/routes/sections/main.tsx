import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

// Error
const Page500 = lazy(() => import("../../pages/confirm/confirm"));
const Page403 = lazy(() => import("../../pages/confirm/confirm"));
const Page404 = lazy(() => import("../../pages/confirm/confirm"));

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { path: "500", element: <Page500 /> },
      { path: "404", element: <Page404 /> },
      { path: "403", element: <Page403 /> },
    ],
  },
];
