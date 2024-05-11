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
        GetFilteredVolunteers: builder.query({
            query: () =>({
                url: "/api/v1/filter-volunteers",
                method: "GET",
            }),
            providesTags: ['volunteer'],
        }),
        GetAllVolunteers: builder.query({
            query: () =>({
                url: "/api/v1/volunteers",
                method: "GET",
            }),
            providesTags: ['volunteer'],
        }),
    })
})

export const {useAddVolunteerMutation, useGetFilteredVolunteersQuery, useGetAllVolunteersQuery } = volunteerApi;
