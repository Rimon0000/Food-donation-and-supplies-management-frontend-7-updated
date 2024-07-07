import { baseApi } from "@/redux/api/baseApi";


const commentsApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addComment: builder.mutation({
            query: (commentInfo) =>({
                url: "/api/v1/create-comment",
                method: "POST",
                body: commentInfo
            }),
            invalidatesTags: ['comment'],
        }),
        GetAllComments: builder.query({
            query: () =>({
                url: "/api/v1/comments",
                method: "GET",
            }),
            providesTags: ['comment'],
        }),
        GetTotalCommentsByAUser: builder.query({
            query: (email) =>({
                url: `/api/v1/comments/${email}`,
                method: "GET",
            }),
            providesTags: ['comment'],
        }),
        GetCommentsByEmail: builder.query({
            query: (email) =>({
                url: `/api/v1/comment/${email}`,
                method: "GET",
            }),
            providesTags: ['comment'],
        }),
    })
})

export const {useAddCommentMutation, useGetAllCommentsQuery, useGetTotalCommentsByAUserQuery, useGetCommentsByEmailQuery } = commentsApi;
