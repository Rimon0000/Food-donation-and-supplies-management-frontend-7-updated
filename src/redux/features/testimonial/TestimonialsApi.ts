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
        updateTestimonial: builder.mutation({
            query: (options) =>({
                url: `/api/v1/testimonial/${options.id}`,
                method: "PUT",
                body: options.data,
            }),
            invalidatesTags: ['testimonial'],
        }),

        deleteTestimonial: builder.mutation({
            query: (id) =>({
                url: `/api/v1/testimonial/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['testimonial'],
        }),
    })
})

export const {useAddTestimonialMutation, useGetAllTestimonialQuery, useUpdateTestimonialMutation, useDeleteTestimonialMutation } = testimonialApi;
