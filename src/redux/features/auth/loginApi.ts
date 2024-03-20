import { baseApi } from "@/redux/api/baseApi";

const loginApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        login: builder.mutation({
            query: (userInfo) =>({
                url: "/api/v1/login",
                method: "POST",
                body: userInfo
            })
        })
    })
})

export const {useLoginMutation} = loginApi