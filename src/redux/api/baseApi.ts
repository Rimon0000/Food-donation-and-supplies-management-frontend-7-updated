import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery(
    { baseUrl: 'https://l2-b2-frontend-path-assignment-7-server-kappa.vercel.app',
    // credentials: "include",
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ['donation', "supply", 'comment', 'testimonial', 'volunteer'],
    endpoints: () => ({}),
  })