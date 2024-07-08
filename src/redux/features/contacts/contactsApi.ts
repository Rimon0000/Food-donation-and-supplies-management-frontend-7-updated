import { baseApi } from "@/redux/api/baseApi";

const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addContact: builder.mutation({
            query: (contactInfo) =>({
                url: "/api/v1/create-contact",
                method: "POST",
                body: contactInfo
            }),
            invalidatesTags: ['contact'],
        }),

    })
})

export const { useAddContactMutation } = contactApi;
