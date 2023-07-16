// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DefectType } from './catalogue.types'
import { envs, getEnv } from '../../environments/environments'

// Define a service using a base URL and expected endpoints
export const catalogueApi = createApi({
  reducerPath: 'catalogueApi',
  baseQuery: fetchBaseQuery({ baseUrl: getEnv(envs.API_URL) }),
  endpoints: (builder) => ({
    getAllDefects: builder.query<DefectType, string>({
      query: () => `defect`,
    }),
    getAllDefectsByProduct: builder.query<DefectType, string>({
      query: (product) => `defect/${product}`,
    }),
    getDefectByName: builder.query<DefectType, string>({
      query: (name) => `defect/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDefectByNameQuery } = catalogueApi