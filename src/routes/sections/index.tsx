import { Navigate, useRoutes } from "react-router-dom";

import { paths } from "../paths";
import { authRoutes } from "./auth";
import { mainRoutes } from "./main";
import { dashboardRoutes } from "./dashboard";

// ----------------------------------------------------------------------

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to={paths.auth.signIn} replace />,
    },

    // Auth
    ...authRoutes,
    // ...authDemoRoutes,

    // Dashboard
    ...dashboardRoutes,

    // Main
    ...mainRoutes,

    // No match
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
