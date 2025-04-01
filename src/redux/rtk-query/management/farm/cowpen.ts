import { traceCoApi } from '../../baseUrl';

import type {
  TParamsCowPen,
  TCowPenResponse,
  TCreateCowPenBody,
  TUpdateCowPenBody,
  TCowpenDetailResponse,
} from './types.cowpen';

// ----------------------------------------------------------------------

export const CowPenApi = traceCoApi.enhanceEndpoints({ addTagTypes: ['cowpen'] }).injectEndpoints({
  endpoints: (builder) => ({
    getCowPenList: builder.query<TCowPenResponse, TParamsCowPen>({
      query: (body) => ({
        url: `/bff-pens-inquiry/v1`,
        method: 'POST',
        body,
      }),
      providesTags: ['cowpen'],
    }),
    getCowPenListMu: builder.mutation<TCowPenResponse, TParamsCowPen>({
      query: (body) => ({
        url: `/bff-pens-inquiry/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cowpen'],
    }),

    getCowPenDetail: builder.query<TCowpenDetailResponse, string>({
      query: (params) => ({
        url: `/bff-pens-inquiry-detail/v1/${params}`,
        method: 'GET',
      }),
      providesTags: ['cowpen'],
    }),

    createCowPen: builder.mutation<{ id: string }, TCreateCowPenBody>({
      query: (body) => ({
        url: `/bff-create-pens/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cowpen'],
    }),

    updateCowPen: builder.mutation<{ id: string }, TUpdateCowPenBody>({
      query: (body) => ({
        url: `/bff-update-pens/v1`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['cowpen'],
    }),

    uploadImgCowPen: builder.mutation<null, FormData>({
      query: (body) => ({
        url: `/bff-upload-attachments-pens/v1`,
        method: 'POST',
        body,
      }),
      // invalidatesTags: ['cowpen'],
    }),

    delCowpen: builder.mutation<null, string>({
      query: (params) => ({
        url: `/bff-delete-pens/v1/${params}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cowpen'],
    }),

    delImgCowPen: builder.mutation<null, string>({
      query: (id) => ({
        url: `/bff-delete-attachments-pens/v1/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: ['cowpen'],
    }),
  }),
  overrideExisting: true,
});

export const {
  // GET
  useGetCowPenListQuery,
  useGetCowPenListMuMutation,
  useGetCowPenDetailQuery,

  // POST
  useCreateCowPenMutation,
  useUploadImgCowPenMutation,

  useUpdateCowPenMutation,

  // DELETE
  useDelCowpenMutation,
  useDelImgCowPenMutation,
} = CowPenApi;
