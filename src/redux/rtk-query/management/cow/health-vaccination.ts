import { ttbApi } from '../../baseUrl';

import type {
  TGetHealthBody,
  TGetHealthResponse,
  TGetVaccinationBody,
  TGetVaccinationResponse,
  TDeleteHealthVaccinationParams,
  TCreateEditHealthVaccinationBody,
} from './types.health-vaccination';

// ----------------------------------------------------------------------

export const healthVaccinationApi = ttbApi
  .enhanceEndpoints({
    addTagTypes: ['health', 'vaccination'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      createHealthVaccination: builder.mutation<void, TCreateEditHealthVaccinationBody>({
        query: (body) => ({
          url: `/bff-create-cattle-health-vaccination/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['health', 'vaccination'],
      }),
      deleteHealthVaccination: builder.mutation<void, TDeleteHealthVaccinationParams>({
        query: ({ type, cattleId, id }) => ({
          url: `/bff-delete-cattle-health-vaccination/v1/${type}/${cattleId}/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['health', 'vaccination'],
      }),
      updateHealthVaccination: builder.mutation<void, TCreateEditHealthVaccinationBody>({
        query: (body) => ({
          url: `/bff-update-cattle-health-vaccination/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['health', 'vaccination'],
      }),

      // health
      getHealth: builder.query<TGetHealthResponse, TGetHealthBody>({
        query: (body) => ({
          url: `/bff-cattle-health-inquiry/v1`,
          method: 'POST',
          body,
        }),
        providesTags: ['health'],
      }),
      getHealthMu: builder.mutation<TGetHealthResponse, TGetHealthBody>({
        query: (body) => ({
          url: `/bff-cattle-health-inquiry/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['health', 'vaccination'],
      }),
      getVaccinationMu: builder.mutation<TGetVaccinationResponse, TGetVaccinationBody>({
        query: (body) => ({
          url: `/bff-cattle-vaccination-inquiry/v1`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['health', 'vaccination'],
      }),

      // vaccination
      getVaccination: builder.query<TGetVaccinationResponse, TGetVaccinationBody>({
        query: (body) => ({
          url: `/bff-cattle-vaccination-inquiry/v1`,
          method: 'POST',
          body,
        }),
        providesTags: ['vaccination'],
      }),
    }),

    overrideExisting: true,
  });

export const {
  useGetHealthQuery,
  useGetHealthMuMutation,
  useGetVaccinationQuery,
  useGetVaccinationMuMutation,
  useCreateHealthVaccinationMutation,
  useUpdateHealthVaccinationMutation,
  useDeleteHealthVaccinationMutation,
} = healthVaccinationApi;
