import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TSupply {
    id: string;
    name: string;
    category: string;
    quantity: number;
}

interface TInitialState {
    supplies: TSupply[];
}

const initialState: TInitialState = {
    supplies: []
};

const supplySlice = createSlice({
    name: 'supplies',
    initialState,
    reducers: {
        addSupply: (state, action: PayloadAction<TSupply>) => {
            state.supplies.push(action.payload);
        },
        updateSupply: (state, action: PayloadAction<TSupply>) => {
            state.supplies = state.supplies.map(supply =>
                supply.id === action.payload.id ? action.payload : supply
            );
        },
        removeSupply: (state, action: PayloadAction<string>) => {
            state.supplies = state.supplies.filter(supply => supply.id !== action.payload)
        },
    }
});

export const { addSupply, updateSupply, removeSupply } = supplySlice.actions;
export default supplySlice.reducer;
