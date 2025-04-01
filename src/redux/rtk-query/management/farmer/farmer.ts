import { traceCoApi } from '../../baseUrl';

import type {
  TFarmerBody,
  TFarmerResponse,
  TDeleteFarmerParams,
  TCreateEditFarmerBody,
  TCreateFarmerResponse,
  TFarmerDetailResponse,
  TBulkUploadFileResponse,
} from './types';

// ----------------------------------------------------------------------

export const farmerApi = traceCoApi.enhanceEndpoints({ addTagTypes: ['farmer'] }).injectEndpoints({
  endpoints: (builder) => ({
    createFarmer: builder.mutation<TCreateFarmerResponse, TCreateEditFarmerBody>({
      query: (body) => ({
        url: `/bff-create-farmers/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['farmer'],
    }),

    getFarmer: builder.query<TFarmerResponse, TFarmerBody>({
      query: (body) => ({
        url: `/bff-farmers-inquiry/v2`,
        method: 'POST',
        body,
      }),
      providesTags: ['farmer'],
    }),

    getFarmerDetail: builder.query<TFarmerDetailResponse, string>({
      query: (params) => ({
        url: `/bff-farmers-inquiry-detail/v1/${params}`,
        method: 'GET',
      }),
      providesTags: ['farmer'],
    }),

    downloadExcelFarmer: builder.mutation<Blob, any>({
      query: (body) => ({
        url: `/bff-farmers-export-excel/v1`,
        method: 'POST',
        body,
        responseHandler: (response) => response.blob(),
      }),
    }),

    deleteFarmer: builder.mutation<void, TDeleteFarmerParams>({
      query: ({ id }) => ({
        url: `/bff-delete-farmers/v1/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['farmer'],
    }),

    updateFarmer: builder.mutation<void, TCreateEditFarmerBody>({
      query: (body) => ({
        url: `/bff-update-farmers/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['farmer'],
    }),

    uploadAttachments: builder.mutation<void, FormData>({
      query: (body) => ({
        url: `/bff-upload-attachments-farmers/v1`,
        method: 'POST',
        body,
      }),
      // invalidatesTags: ['farmer'],
    }),
    // upload files
    createBulkUploadFarmer: builder.mutation<TBulkUploadFileResponse, FormData>({
      query: (body) => ({
        url: `/bff-create-create-staged-farmers/v1`,
        method: 'POST',
        body,
      }),
    }),

    confirmBulkUpload: builder.mutation<null, { id: string }>({
      query: (body) => ({
        url: `/bff-confirm-create-staged-farmers/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['farmer'],
    }),

    deleteImgFarmer: builder.mutation<null, string>({
      query: (id) => ({
        url: `/bff-delete-attachments-farmers/v1/${id}`,
        method: 'DELETE',
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useCreateFarmerMutation,
  useGetFarmerQuery,
  useDeleteFarmerMutation,
  useGetFarmerDetailQuery,
  useUpdateFarmerMutation,
  useUploadAttachmentsMutation,
  useDownloadExcelFarmerMutation,
  // upload files
  useCreateBulkUploadFarmerMutation,
  useConfirmBulkUploadMutation,

  // delete files
  useDeleteImgFarmerMutation,
} = farmerApi;
