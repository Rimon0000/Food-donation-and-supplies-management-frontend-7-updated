import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TTestimonial {
    id: string;
    image: string;
    name: string;
    message: string;
    location: number;
}

interface TInitialState {
    testimonials: TTestimonial[];
}

const initialState: TInitialState = {
    testimonials: []
};

const testimonialSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {
        updateTestimonial: (state, action: PayloadAction<TTestimonial>) => {
            state.testimonials = state.testimonials.map(testimonial =>
                testimonial.id === action.payload.id ? action.payload : testimonial
            );
        },
        removeTestimonial: (state, action: PayloadAction<string>) => {
            state.testimonials = state.testimonials.filter(testimonial => testimonial.id !== action.payload)
        },
    }
});

export const { updateTestimonial, removeTestimonial } = testimonialSlice.actions;
export default testimonialSlice.reducer;
