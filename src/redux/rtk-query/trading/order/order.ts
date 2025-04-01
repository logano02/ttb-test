import type { TCreateEditOrderDetail } from 'src/types/dashboard/order/create-order.type';

import { traceCoApi } from '../../baseUrl';

import type {
  TOrderBody,
  TStatusBarParams,
  TStatusBarResponse,
  TOrderDataResponse,
  TDownloadExcelOrder,
  TOrderDetailResponse,
  TEditOrderDetailBody,
} from './types';

// ----------------------------------------------------------------------

export const OrderApi = traceCoApi.enhanceEndpoints({ addTagTypes: ['order'] }).injectEndpoints({
  endpoints: (builder) => ({
    getOrder: builder.query<TOrderDataResponse, TOrderBody>({
      query: (body) => ({
        url: `/bff-orders-inquiry/v2`,
        method: 'POST',
        body,
      }),
      providesTags: ['order'],
    }),

    getOrderMu: builder.mutation<TOrderDataResponse, TOrderBody>({
      query: (params) => ({
        url: `/bff-orders-inquiry/v1`,
        method: 'GET',
        params,
      }),
      invalidatesTags: ['order'],
    }),

    getOrderDetail: builder.query<TOrderDetailResponse, string>({
      query: (id) => ({
        url: `/bff-orders-inquiry-detail/v1/${id}`,
        method: 'GET',
      }),
      providesTags: ['order'],
    }),

    getOrderStatusBar: builder.query<TStatusBarResponse, TStatusBarParams>({
      query: (params) => ({
        url: `/bff-statuses-count-orders/v1`,
        method: 'GET',
        params,
      }),
      providesTags: ['order'],
    }),

    createOrder: builder.mutation<{ id: string }, TCreateEditOrderDetail>({
      query: (body) => ({
        url: `/bff-create-orders/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['order'],
    }),

    updateOrder: builder.mutation<null, TEditOrderDetailBody>({
      query: (body) => ({
        url: `/bff-update-orders/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['order'],
    }),

    uploadImage: builder.mutation<null, FormData>({
      query: (body) => ({
        url: `/bff-upload-attachments-orders/v1`,
        method: 'POST',
        body,
      }),
    }),

    downloadExcelOrder: builder.mutation<Blob, TDownloadExcelOrder>({
      query: (body) => ({
        url: `/bff-orders-export-excel/v1`,
        method: 'POST',
        body,
        responseHandler: (response) => response.blob(),
      }),
    }),

    delOrder: builder.mutation<{}, string>({
      query: (id) => ({
        url: `/bff-delete-orders/v1/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['order'],
    }),

    delOrderImgById: builder.mutation<{}, string>({
      query: (id) => ({
        url: `/bff-delete-attachments-orders/v1/${id}`,
        method: 'DELETE',
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  // GET
  useGetOrderQuery,
  useGetOrderMuMutation,
  useGetOrderDetailQuery,
  useGetOrderStatusBarQuery,

  // POST
  useCreateOrderMutation,
  useUploadImageMutation,
  useUpdateOrderMutation,
  useDownloadExcelOrderMutation,

  // DELETE
  useDelOrderMutation,
  useDelOrderImgByIdMutation,
} = OrderApi;
