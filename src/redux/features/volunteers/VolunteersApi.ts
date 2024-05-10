import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addVolunteer: builder.mutation({
            query: (volunteerInfo) =>({
                url: "/api/v1/create-volunteer",
                method: "POST",
                body: volunteerInfo
            }),
            invalidatesTags: ['volunteer'],
        }),
    })
})

export const {useAddVolunteerMutation } = volunteerApi;
