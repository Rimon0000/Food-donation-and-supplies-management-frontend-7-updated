import { baseApi } from "@/redux/api/baseApi"

const suppliesApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getSupplies: builder.query({
            query: (suppliesInfo) =>({
                url: "/api/v1/filter-supplies",
                method: "GET",
                body: suppliesInfo
            }),
            providesTags: ['supply'],
        }),

        getAllSupplies: builder.query({
            query: (suppliesInfo) =>({
                url: "/api/v1/supplies",
                method: "GET",
                body: suppliesInfo
            }),
            providesTags: ['supply'],
        }),

        GetSingleSupply: builder.query({
            query: (supplyId) =>({
                url: `/api/v1/supply/${supplyId}`,
                method: "GET",
            }),
            providesTags: ['supply'],
        }),

        updateSupply: builder.mutation({
            query: (options) =>({
                url: `/api/v1/supply/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['supply'],
        }),
    })
})

export const {useGetSuppliesQuery, useGetAllSuppliesQuery, useGetSingleSupplyQuery, useUpdateSupplyMutation } = suppliesApi;