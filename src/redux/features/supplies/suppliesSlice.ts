import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TSupply {
    id: string;
    name: string;
    category: string;
    quantity: number;
}

interface TInitialState {
    supplies: TSupply[];
    searchText: string;     // Added for search functionality
    filter: string;         // Added for filter functionality
} 

const initialState: TInitialState = {
    supplies: [],
    searchText: '',  // Added for search functionality
    filter: '',      // Added for filter functionality
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
         // Set search text for filtering supplies by name
         setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        },
        // Set filter for category-based filtering
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        // Reset both search text and filter
        resetFilterAndSearch: (state) => {
            state.searchText = '';
            state.filter = '';
        },
    }
});

export const { addSupply, updateSupply, removeSupply, setSearchText, setFilter, resetFilterAndSearch} = supplySlice.actions;
export default supplySlice.reducer;


  // Get state from Redux store
export  const selectSearchText = (state: RootState) => state.supply.searchText;
export  const selectFilter = (state: RootState) => state.supply.filter;