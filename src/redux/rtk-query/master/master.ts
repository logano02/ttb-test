import { traceCoApi } from '../baseUrl';

import type { TResponseGetCattleBreed } from './types';

// ----------------------------------------------------------------------

export const MasterApi = traceCoApi.enhanceEndpoints({ addTagTypes: [] }).injectEndpoints({
  endpoints: (builder) => ({
    getCattleBreed: builder.query<TResponseGetCattleBreed, void>({
      query: () => ({
        url: `/bff-cattle-master-data-inquiry/v1`,
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: true,
});

export const { useGetCattleBreedQuery } = MasterApi;
