import { ttbApi } from '../../baseUrl';

import type {
  TCowDetail,
  TGetCowBody,
  TCertificate,
  TGetCowResponse,
  TDeleteCowParams,
  TStatusesResponse,
  TCowStatusCowBody,
  TCreateEditCowBody,
  TCreateCowResponse,
  TExportExcelCowBody,
  TGetTraceHistoryBody,
  TBulkCreateCowResponse,
  TGetTraceHistoryResponse,
} from './types.cow';

// ----------------------------------------------------------------------

export const cowApi = ttbApi.enhanceEndpoints({ addTagTypes: ['cow'] }).injectEndpoints({
  endpoints: (builder) => ({
    // Cow
    getCow: builder.query<TGetCowResponse, TGetCowBody>({
      query: (body) => ({
        url: `/bff-cattle-inquiry/v1`,
        method: 'POST',
        body,
      }),
      providesTags: ['cow'],
    }),

    getCowDetail: builder.query<TCowDetail, string>({
      query: (id) => ({
        url: `/bff-cattle-inquiry-detail/v1/${id}`,
        method: 'GET',
      }),
      providesTags: ['cow'],
    }),

    getCertificate: builder.query<TCertificate, string>({
      query: (id) => ({
        url: `/bff-cattle-certificate-inquiry-detail/v1/${id}`,
        method: 'GET',
      }),
      providesTags: ['cow'],
    }),

    createCow: builder.mutation<TCreateCowResponse, TCreateEditCowBody>({
      query: (body) => ({
        url: `/bff-create-cattle/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cow'],
    }),

    getCowStatuses: builder.query<TStatusesResponse, TCowStatusCowBody>({
      query: (body) => ({
        url: `/bff-count-cattle-statuses/v1`,
        method: 'POST',
        body,
      }),
      providesTags: ['cow'],
    }),

    uploadImageCow: builder.mutation<void, FormData>({
      query: (body) => ({
        url: `/bff-upload-attachments-cattle/v1`,
        method: 'POST',
        body,
      }),
    }),

    deleteImageCow: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bff-delete-attachments-cattle/v1/${id}`,
        method: 'DELETE',
      }),
    }),

    updateCow: builder.mutation<void, TCreateEditCowBody>({
      query: (body) => ({
        url: `/bff-update-cattle/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cow'],
    }),

    deleteCow: builder.mutation<void, TDeleteCowParams>({
      query: ({ farmId, penId, cattleId }) => ({
        url: `/bff-delete-cattle/v1/${farmId}/${penId}/${cattleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cow'],
    }),

    // bulk upload
    createBulkUploadCow: builder.mutation<TBulkCreateCowResponse, FormData>({
      query: (body) => ({
        url: `/bff-create-create-staged-cattle/v1`,
        method: 'POST',
        body,
      }),
    }),

    confirmBulkUploadCow: builder.mutation<null, { id: string }>({
      query: (body) => ({
        url: `/bff-confirm-create-staged-cattle/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cow'],
    }),

    getTraceHistoryMu: builder.mutation<TGetTraceHistoryResponse, TGetTraceHistoryBody>({
      query: (body) => ({
        url: `/bff-cattle-movement-inquiry/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cow'],
    }),

    getTraceHistory: builder.query<TGetTraceHistoryResponse, TGetTraceHistoryBody>({
      query: (body) => ({
        url: `/bff-cattle-movement-inquiry/v1`,
        method: 'POST',
        body,
      }),
      providesTags: ['cow'],
    }),

    exportExcel: builder.mutation<Blob, TExportExcelCowBody>({
      query: (body) => ({
        url: `/bff-cattle-export-excel/v1`,
        method: 'POST',
        body,
        responseHandler: (response) => response.blob(),
      }),
    }),

    getMovingStatuses: builder.query<TStatusesResponse, { cattleId: string }>({
      query: (body) => ({
        url: `/bff-count-cattle-movement-status/v1`,
        method: 'POST',
        body,
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetCowQuery,
  useGetCowStatusesQuery,
  useGetCertificateQuery,
  useCreateCowMutation,
  useUploadImageCowMutation,
  useGetCowDetailQuery,
  useDeleteImageCowMutation,
  useUpdateCowMutation,
  useDeleteCowMutation,
  useGetTraceHistoryMuMutation,
  useGetTraceHistoryQuery,
  useGetMovingStatusesQuery,

  // bulk upload
  useCreateBulkUploadCowMutation,
  useConfirmBulkUploadCowMutation,

  // export excel
  useExportExcelMutation,
} = cowApi;
