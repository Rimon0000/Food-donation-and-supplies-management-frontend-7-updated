import { baseApi } from "@/redux/api/baseApi"

const suppliesApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        getSupplies: builder.query({
            query: (suppliesInfo) =>({
                url: "/api/v1/filter-supplies",
                method: "GET",
                body: suppliesInfo
            })
        }),
        getAllSupplies: builder.query({
            query: (suppliesInfo) =>({
                url: "/api/v1/supplies",
                method: "GET",
                body: suppliesInfo
            })
        })
    })
})

export const {useGetSuppliesQuery, useGetAllSuppliesQuery} = suppliesApi;