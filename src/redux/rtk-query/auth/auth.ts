import { traceCoApi } from '../baseUrl';

import type { ILoginBody, ILoginResponse, IGetAdminByIdResponse } from './types';

// ----------------------------------------------------------------------

export const authApi = traceCoApi.enhanceEndpoints({ addTagTypes: [] }).injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, ILoginBody>({
      query: (body) => ({
        url: `/bff-login-admins/v1`,
        method: 'POST',
        body,
      }),
    }),
    getAdminById: builder.query<IGetAdminByIdResponse, void>({
      query: () => ({
        url: `/bff-admins-profile/v1`,
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: true,
});

export const { useLoginMutation, useLazyGetAdminByIdQuery } = authApi;
