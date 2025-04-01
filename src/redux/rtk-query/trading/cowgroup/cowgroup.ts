import { traceCoApi } from '../../baseUrl';

import type {
  TCowGroupSourcing,
  TStatusesCowgroup,
  TCowGroupListBody,
  TCreateCowGroupBody,
  TCowGroupListResponse,
  TBodyDataSourcingCowGroup,
} from './types';

// ----------------------------------------------------------------------

export const CowGroupApi = traceCoApi
  .enhanceEndpoints({ addTagTypes: ['cowgroup'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCowGroupList: builder.query<TCowGroupListResponse, TCowGroupListBody>({
        query: (body) => ({
          url: `/bff-cattle-sourcing/v1`,
          method: 'POST',
          body,
        }),
        providesTags: ['cowgroup'],
      }),

      getStatusesCowGroup: builder.query<TStatusesCowgroup, { farmSourcingId: string }>({
        query: (params) => ({
          url: `/bff-count-cattle-sourcing-status/v1/${params.farmSourcingId}`,
          method: 'GET',
        }),
        providesTags: ['cowgroup'],
      }),

      getCowSourcing: builder.query<TCowGroupSourcing, TBodyDataSourcingCowGroup>({
        query: (body) => ({
          url: `/bff-cattle-sourcing-inquiry/v1`,
          method: 'POST',
          body,
        }),
      }),

      createCowGroupFromSelect: builder.mutation<unknown, TCreateCowGroupBody>({
        query: (body) => ({
          url: `/bff-create-cattle-sourcing/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['cowgroup'],
      }),

      updateCowGroupFromSelect: builder.mutation<unknown, TCreateCowGroupBody>({
        query: (body) => ({
          url: `/bff-update-cattle-sourcing/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['cowgroup'],
      }),

      changeStatusFarmSourcing: builder.mutation<unknown, { id: string; status: string }>({
        query: (body) => ({
          url: `/bff-update-farm-sourcing-status/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['cowgroup'],
      }),

      // todo - auto : fix typs
      createBulkUploadCowGroup: builder.mutation<unknown, unknown>({
        query: (body) => ({
          url: `/bff-create-create-staged-order-cattle/v1`,
          method: 'POST',
          body,
        }),
      }),

      confirmBulkUploadCowGroup: builder.mutation<unknown, { id: string }>({
        query: (body) => ({
          url: `/bff-confirm-create-staged-order-cattle/v1`,
          method: 'POST',
          body,
        }),
      }),

      deleteFarmSourcing: builder.mutation<unknown, { orderRequestId: string; id: string }>({
        query: (params) => ({
          url: `/bff-delete-farm-sourcing/v1/${params.orderRequestId}/${params.id}`,
          method: 'DELETE',
        }),
      }),
    }),

    overrideExisting: true,
  });

export const {
  // GET
  useGetStatusesCowGroupQuery,

  // POST
  useGetCowGroupListQuery,
  useCreateCowGroupFromSelectMutation,
  useGetCowSourcingQuery,
  useChangeStatusFarmSourcingMutation,
  useUpdateCowGroupFromSelectMutation,

  // Bulk upload
  useCreateBulkUploadCowGroupMutation,
  useConfirmBulkUploadCowGroupMutation,

  // DELETE
  useDeleteFarmSourcingMutation,
} = CowGroupApi;
