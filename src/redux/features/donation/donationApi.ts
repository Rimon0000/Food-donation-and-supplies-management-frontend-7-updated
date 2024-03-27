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
    })
})

export const {useAddDonationMutation  } = donationApi;
