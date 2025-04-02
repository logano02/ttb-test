/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { CONFIG } from "../../config-global";

// ----------------------------------------------------------------------

const STORAGE_KEY = "accessToken";
const accessToken = localStorage.getItem(STORAGE_KEY);

// ----------------------------------------------------------------------

export const ttbApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.site.hostApi,

    prepareHeaders: (headers: Headers, { getState }: { getState: any }) => {
      const token = getState().auth.token || accessToken;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
