import { paramCase } from "../../src/utils/change-case";

// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: "/auth",
  AUTH_DEMO: "/auth-demo",
  DASHBOARD: "/confirm",
  PUBLIC: "/public",
};

// ----------------------------------------------------------------------

export const paths = {
  post: {
    root: `/post`,
    details: (title: string) => `/post/${paramCase(title)}`,
  },
  // AUTH
  auth: {
    // TODO: use this one !
    signIn: `${ROOTS.AUTH}/sign-in`,
  },
  // Error paths
  error: {
    page403: "/403",
    page404: "/404",
    page500: "/500",
  },

  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    product: {
      root: `${ROOTS.DASHBOARD}/product`,
      new: `${ROOTS.DASHBOARD}/product/new`,
      details: (id: string) => `${ROOTS.DASHBOARD}/product/${id}`,
      edit: (id: string) => `${ROOTS.DASHBOARD}/product/${id}/edit`,
    },
  },
};
