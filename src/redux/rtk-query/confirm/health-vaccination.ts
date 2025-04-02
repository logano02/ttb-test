import { ttbApi } from "../baseUrl";

import type {
  TGetConfirmResponse,
  TCreateConfirmBody,
} from "./types.health-vaccination";

// ----------------------------------------------------------------------

export const confirmApi = ttbApi
  .enhanceEndpoints({
    addTagTypes: ["confirm"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      createConfirm: builder.mutation<void, TCreateConfirmBody>({
        query: (body) => ({
          url: `/create-ttb-confirm/v1`,
          method: "POST",
          body,
        }),
        invalidatesTags: ["confirm"],
      }),

      getConfirmDetail: builder.query<TGetConfirmResponse, string>({
        query: (id) => ({
          url: `/bff-farms-inquiry-detail/v1/${id}`,
          method: "GET",
        }),
        providesTags: ["confirm"],
      }),
    }),

    overrideExisting: true,
  });

export const { useGetConfirmDetailQuery, useCreateConfirmMutation } =
  confirmApi;
