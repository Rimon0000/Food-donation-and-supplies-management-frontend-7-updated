import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TDonation = {
    email: string;
    category: string;
    quantity: number;
}

type TInitialState = {
    donations: TDonation[]
}

const initialState: TInitialState = {
    donations : []
}

const donationSlice = createSlice({
    name: 'donation',
    initialState,
    reducers: {
        addDonation: (state, action: PayloadAction<TDonation>) => {
            state.donations.push(action.payload);
          },
        },

})

export const {addDonation} = donationSlice.actions;
export default donationSlice.reducer;