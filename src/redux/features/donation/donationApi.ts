import { baseApi } from "@/redux/api/baseApi";

const donationApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addDonation: builder.mutation({
            query: (donationInfo) =>({
                url: "/api/v1/add-donation",
                method: "POST",
                body: donationInfo
            }),
            invalidatesTags: ['donation'],
        }),
        GetDonationByEmail: builder.query({
            query: (email) =>({
                url: `/api/v1/donation/${email}`,
                method: "GET",
            }),
            providesTags: ['donation'],
        }),
        GetAllDonations: builder.query({
            query: (donationsData) =>({
                url: "/api/v1/donations",
                method: "GET",
                body: donationsData

            }),
            providesTags: ['donation'],
        }),
        GetAllDonationsAmount: builder.query({
            query: (donationsData) =>({
                url: "api/v1/donation-amount",
                method: "GET",
                body: donationsData

            }),
            providesTags: ['donation'],
        }),
    })
})

export const {useAddDonationMutation , useGetDonationByEmailQuery, useGetAllDonationsQuery, useGetAllDonationsAmountQuery } = donationApi;
