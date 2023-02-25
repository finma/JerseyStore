import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_HEADER_RAJAONGKIR, API_URL_RAJAONGKIR} from '../../utils';

export const RajaongkirSlice = createApi({
  reducerPath: 'rajaongkir',
  baseQuery: fetchBaseQuery({baseUrl: API_URL_RAJAONGKIR}),
  endpoints: builder => ({
    getProvinces: builder.query({
      query: () => ({
        url: '/province',
        method: 'GET',
        headers: API_HEADER_RAJAONGKIR,
      }),
    }),
    getCities: builder.query({
      query: (provinceId: any) => ({
        url: `/city?province=${provinceId}`,
        method: 'GET',
        headers: API_HEADER_RAJAONGKIR,
      }),
    }),
  }),
});

export const {useGetProvincesQuery, useGetCitiesQuery} = RajaongkirSlice;
