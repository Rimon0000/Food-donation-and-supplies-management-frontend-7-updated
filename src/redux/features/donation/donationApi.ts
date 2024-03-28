import { baseApi } from "@/redux/api/baseApi";

const donationApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addDonation: builder.mutation({
            query: (donationInfo) =>({
                url: "/api/v1/add-donation",
                method: "POST",
                body: donationInfo
            })
        }),
        GetDonationByEmail: builder.query({
            query: (email) =>({
                url: `/api/v1/donation/${email}`,
                method: "GET",
            })
        }),
    })
})

export const {useAddDonationMutation , useGetDonationByEmailQuery } = donationApi;
