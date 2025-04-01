import { traceCoApi } from '../../baseUrl';

import type {
  TDetailFarmSourcing,
  TFarmSourcingResponse,
  TBodyCreateFarmSourcing,
  TBodyUpdateFarmSourcing,
} from './types';

// ----------------------------------------------------------------------

export const FarmSourcingApi = traceCoApi
  .enhanceEndpoints({ addTagTypes: ['sourcing'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getFarmSourcingById: builder.query<TFarmSourcingResponse, string>({
        query: (orderRequestId) => ({
          url: `/bff-farm-sourcing/v1/${orderRequestId}`,
          method: 'GET',
        }),
        // providesTags: ['sourcing'],
      }),

      getFarmSourcingDetail: builder.mutation<TDetailFarmSourcing, { orderRequestId: string }>({
        query: (body) => ({
          url: `/bff-farm-sourcing-inquiry/v1`,
          method: 'POST',
          body,
        }),
      }),

      createFarmSourcing: builder.mutation<void, TBodyCreateFarmSourcing>({
        query: (body) => ({
          url: `/bff-create-farm-sourcing/v1`,
          method: 'POST',
          body,
        }),
        // invalidatesTags: ['sourcing'],
      }),

      updateFarmSourcing: builder.mutation<void, TBodyUpdateFarmSourcing>({
        query: (body) => ({
          url: `/bff-update-farm-sourcing/v1`,
          method: 'POST',
          body,
        }),
        // invalidatesTags: ['sourcing'],
      }),
    }),

    overrideExisting: true,
  });

export const {
  // Get
  useGetFarmSourcingByIdQuery,

  // Post
  useGetFarmSourcingDetailMutation,
  useCreateFarmSourcingMutation,
  useUpdateFarmSourcingMutation,
} = FarmSourcingApi;
