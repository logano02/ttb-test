import { traceCoApi } from '../../baseUrl';

import type { TStatusesResponse } from '../cow/types.cow';
import type {
  TCowDeadBody,
  TCowStatusBody,
  TAddVehicleBody,
  TEditVehicleBody,
  TChangeStatusBody,
  TStatusBarResponse,
  TGetTraceabilityBody,
  TEditTraceabilityBody,
  TCreateTraceabilityBody,
  TListTraceabilityResponse,
  TTracabilityDetailResponse,
  TExportExcelTraceabilityBody,
} from './types';

// ----------------------------------------------------------------------

export const tracabilityApi = traceCoApi
  .enhanceEndpoints({ addTagTypes: ['trace'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCowStatusesTrace: builder.query<TStatusesResponse, TCowStatusBody>({
        query: (body) => ({
          url: `/bff-count-cattle-statuses/v1`,
          method: 'POST',
          body,
        }),
        providesTags: ['trace'],
      }),

      // get status
      getStatusBar: builder.query<TStatusBarResponse, string>({
        query: (params) => ({
          url: `/bff-count-traceability-statuses/v1${params}`,
          method: 'GET',
        }),
        providesTags: ['trace'],
      }),

      // get list
      getTraceabilityList: builder.query<TListTraceabilityResponse, TGetTraceabilityBody>({
        query: (body) => ({
          url: `/bff-traceability-inquiry/v1`,
          method: 'POST',
          body,
        }),
        providesTags: ['trace'],
      }),

      exportExcelTrace: builder.mutation<Blob, TExportExcelTraceabilityBody>({
        query: (body) => ({
          url: `/bff-traceability-export-excel/v1`,
          method: 'POST',
          body,
          responseHandler: (response) => response.blob(),
        }),
      }),

      // ! =================================================================================

      // get tracability detail
      getTraceabilityDetail: builder.query<TTracabilityDetailResponse, string>({
        query: (id) => ({
          url: `/bff-traceability-inquiry-detail/v1/${id}`,
          method: 'GET',
        }),
        providesTags: ['trace'],
        transformResponse: (response: TTracabilityDetailResponse) => ({
          ...response,
          cattleIds: response?.cattleIds ?? [],
        }),
      }),

      getTraceabilityDetailMu: builder.mutation<TTracabilityDetailResponse, string>({
        query: (id) => ({
          url: `/bff-traceability-inquiry-detail/v1/${id}`,
          method: 'GET',
        }),
        invalidatesTags: ['trace'],
      }),

      // create
      createTracability: builder.mutation<{ id: string }, TCreateTraceabilityBody>({
        query: (body) => ({
          url: `/bff-create-traceability/v1`,
          method: 'POST',
          body,
        }),
      }),

      // update
      updateTracability: builder.mutation<null, TEditTraceabilityBody>({
        query: (body) => ({
          url: `/bff-update-traceability/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['trace'],
      }),

      // change status tracability
      changeStatusTraceability: builder.mutation<null, TChangeStatusBody>({
        query: (body) => ({
          url: `/bff-update-traceability-status/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['trace'],
      }),

      // change status cow to dead
      changeStatusCowToDead: builder.mutation<null, TCowDeadBody>({
        query: (body) => ({
          url: `/bff-traceability-update-cattles-death/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['trace'],
      }),

      // add vehicle
      addVehicle: builder.mutation<null, TAddVehicleBody>({
        query: (body) => ({
          url: `/bff-traceability-add-vehicle/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['trace'],
      }),

      // update vehicle
      updateVehicle: builder.mutation<null, TEditVehicleBody>({
        query: (body) => ({
          url: `/bff-traceability-update-vehicle/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['trace'],
      }),

      // del vehicle
      delVehicle: builder.mutation<null, string>({
        query: (id) => ({
          url: `/bff-traceability-delete-vehicle/v1/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['trace'],
      }),

      // del tracability
      delTracabilityByid: builder.mutation<null, string>({
        query: (id) => ({
          url: `/bff-delete-traceability/v1/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['trace'],
      }),
    }),

    overrideExisting: true,
  });

export const {
  // Get
  useGetCowStatusesTraceQuery,
  useGetTraceabilityListQuery,
  useGetStatusBarQuery,
  useGetTraceabilityDetailQuery,
  useGetTraceabilityDetailMuMutation,

  // Post
  useCreateTracabilityMutation,
  useUpdateTracabilityMutation,
  useChangeStatusTraceabilityMutation,
  useAddVehicleMutation,
  useUpdateVehicleMutation,
  useChangeStatusCowToDeadMutation,
  useExportExcelTraceMutation,

  // delete
  useDelVehicleMutation,
  useDelTracabilityByidMutation,
} = tracabilityApi;
