import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CONFIG } from '../../config-global';

// ----------------------------------------------------------------------

const STORAGE_KEY = 'accessToken';
const UID = 'uid';
const accessToken = localStorage.getItem(STORAGE_KEY);
const uid = localStorage.getItem(UID);

// ----------------------------------------------------------------------

export const traceCoApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: CONFIG.site.hostApi,

    prepareHeaders: (headers: Headers, { getState }: { getState: any }) => {
      const token = getState().auth.token || accessToken;

      if (token && uid) {
        headers.set('authorization', `Bearer ${token}`);
        headers.set('X-USER-ID', uid);
      }

      return headers;
    },
  }),

  endpoints: () => ({}),
});
