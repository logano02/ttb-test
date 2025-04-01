import { traceCoApi } from '../../baseUrl';

import type {
  TFarmBody,
  TFarmResponse,
  TCreateFarmBody,
  TUpdateFarmBody,
  TStatusesParams,
  TStatusesResponse,
  TDeleteFarmParams,
  TCreateFarmResponse,
  TFarmDetailResponse,
  TBulkCreateFarmResponse,
} from './types.farm';

// ----------------------------------------------------------------------

export const farmApi = traceCoApi.enhanceEndpoints({ addTagTypes: ['farm'] }).injectEndpoints({
  endpoints: (builder) => ({
    getFarm: builder.query<TFarmResponse, TFarmBody>({
      query: (body) => ({
        url: `/bff-farms-inquiry/v2`,
        method: 'POST',
        body,
      }),
      providesTags: ['farm'],
    }),
    getFarmMu: builder.mutation<TFarmResponse, TFarmBody>({
      query: (params) => ({
        url: `/bff-farms-inquiry/v1`,
        method: 'GET',
        params,
      }),
      invalidatesTags: ['farm'],
    }),

    getFarmDetail: builder.query<TFarmDetailResponse, string>({
      query: (id) => ({
        url: `/bff-farms-inquiry-detail/v1/${id}`,
        method: 'GET',
      }),
      providesTags: ['farm'],
    }),

    createFarm: builder.mutation<TCreateFarmResponse, TCreateFarmBody>({
      query: (body) => ({
        url: `/bff-create-farms/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['farm'],
    }),
    getFarmStatuses: builder.query<TStatusesResponse, TStatusesParams>({
      query: (params) => ({
        url: `/bff-count-farms-statuses/v1`,
        method: 'GET',
        params,
      }),
      providesTags: ['farm'],
    }),
    deleteFarm: builder.mutation<void, TDeleteFarmParams>({
      query: ({ id }) => ({
        url: `/bff-delete-farms/v1/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['farm'],
    }),
    uploadImageFarm: builder.mutation<void, FormData>({
      query: (body) => ({
        url: `/bff-upload-attachments-farms/v1`,
        method: 'POST',
        body,
      }),
    }),
    deleteImageFarm: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bff-delete-attachments-farm/v1/${id}`,
        method: 'DELETE',
      }),
    }),
    updateFarm: builder.mutation<void, TUpdateFarmBody>({
      query: (body) => ({
        url: `/bff-update-farms/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['farm'],
    }),

    // bulk upload
    createBulkUploadFarm: builder.mutation<TBulkCreateFarmResponse, FormData>({
      query: (body) => ({
        url: `/bff-create-create-staged-farms/v1`,
        method: 'POST',
        body,
      }),
    }),

    downloadExcelFarmer: builder.mutation<Blob, any>({
      query: (body) => ({
        url: `/bff-farms-export-excel/v1`,
        method: 'POST',
        body,
        responseHandler: (response) => response.blob(),
      }),
    }),

    confirmBulkUploadFarm: builder.mutation<null, { id: string }>({
      query: (body) => ({
        url: `/bff-confirm-create-staged-farms/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['farm'],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetFarmQuery,
  useGetFarmMuMutation,
  useCreateFarmMutation,
  useGetFarmStatusesQuery,
  useGetFarmDetailQuery,
  useDeleteFarmMutation,
  useUploadImageFarmMutation,
  useDeleteImageFarmMutation,
  useUpdateFarmMutation,

  // excel
  useDownloadExcelFarmerMutation,

  // bulk upload
  useCreateBulkUploadFarmMutation,
  useConfirmBulkUploadFarmMutation,
} = farmApi;
