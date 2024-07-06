import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        GetAllUsers: builder.query({
            query: () =>({
                url: "/api/v1/users",
                method: "GET",
            }),
            providesTags: ['user'],
        }),
        GetSingleUsers: builder.query({
            query: (id) =>({
                url: `/api/v1/user/${id}`,
                method: "GET",
            }),
            providesTags: ['user'],
        }),
        makeAdmin: builder.mutation({
            query: (options) =>({
                url: `/users/admin/${options?._id}`,
                method: "PATCH",
                body: options.data,
            }),
            invalidatesTags: ['user'],
        }),
        updateUser: builder.mutation({
            query: (options) =>({
                url: `/api/v1/user/${options?.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['user'],
        }),
    })
})

export const {useGetAllUsersQuery, useGetSingleUsersQuery, useMakeAdminMutation, useUpdateUserMutation } = volunteerApi;
