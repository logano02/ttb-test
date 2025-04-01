import { traceCoApi } from '../../baseUrl';

import type {
  TGetBuyerParams,
  TCreateBuyerBody,
  TUpdateBuyerBody,
  TGetBuyerResponse,
  TDeleteBuyerParams,
  TGetBuyerByIdParams,
  TDownloadExcelBuyer,
  TCreateBuyerResponse,
  TDeleteBuyerResponse,
  TGetBuyerByIdResponse,
  TUploadAttachmentsBuyerBody,
  TUploadAttachmentsBuyerResponse,
} from './types';

// ----------------------------------------------------------------------

export const buyerApi = traceCoApi.enhanceEndpoints({ addTagTypes: ['buyer'] }).injectEndpoints({
  endpoints: (builder) => ({
    createBuyer: builder.mutation<TCreateBuyerResponse, TCreateBuyerBody>({
      query: (body) => ({
        url: `/bff-register-buyers/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['buyer'],
    }),
    getBuyer: builder.query<TGetBuyerResponse, TGetBuyerParams>({
      query: (params) => ({
        url: `/bff-buyers-inquiry/v1`,
        method: 'GET',
        params,
      }),
      providesTags: ['buyer'],
    }),
    getBuyerById: builder.query<TGetBuyerByIdResponse, TGetBuyerByIdParams>({
      query: ({ id }) => ({
        url: `/bff-buyers-inquiry-detail/v1/${id}`,
        method: 'GET',
      }),
      providesTags: ['buyer'],
    }),
    deleteBuyer: builder.mutation<TDeleteBuyerResponse, TDeleteBuyerParams>({
      query: ({ id }) => ({
        url: `/bff-delete-buyers/v1/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['buyer'],
    }),
    updateBuyer: builder.mutation<void, TUpdateBuyerBody>({
      query: (body) => ({
        url: `/bff-update-buyers/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['buyer'],
    }),
    uploadAttachmentsBuyers: builder.mutation<
      TUploadAttachmentsBuyerResponse,
      TUploadAttachmentsBuyerBody
    >({
      query: (body) => ({
        url: `/bff-upload-attachments-buyers/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['buyer'],
    }),

    downloadExcelBuyer: builder.mutation<Blob, TDownloadExcelBuyer>({
      query: (body) => ({
        url: `/bff-buyers-export-excel/v1`,
        method: 'POST',
        body,
        responseHandler: (response) => response.blob(),
      }),
    }),

    deleteAttachmentsBuyers: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bff-delete-attachments-buyers/v1/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['buyer'],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetBuyerQuery,
  useGetBuyerByIdQuery,
  useDeleteBuyerMutation,
  useCreateBuyerMutation,
  useUpdateBuyerMutation,
  useUploadAttachmentsBuyersMutation,
  useDeleteAttachmentsBuyersMutation,
  useDownloadExcelBuyerMutation,
} = buyerApi;
