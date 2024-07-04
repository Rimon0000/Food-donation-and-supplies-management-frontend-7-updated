import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addTestimonial: builder.mutation({
            query: (testimonialInfo) =>({
                url: "/api/v1/create-testimonial",
                method: "POST",
                body: testimonialInfo
            }),
            invalidatesTags: ['testimonial'],
        }),
        GetAllTestimonial: builder.query({
            query: () =>({
                url: "/api/v1/testimonials",
                method: "GET",
            }),
            providesTags: ['testimonial'],
        }),
    })
})

export const {useAddTestimonialMutation, useGetAllTestimonialQuery } = testimonialApi;
