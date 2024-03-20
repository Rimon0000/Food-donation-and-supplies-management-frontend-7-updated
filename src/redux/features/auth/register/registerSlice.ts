import { RootState } from "../../../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
  }

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const {user} = action.payload
            state.user = user
        }
    }

})

export const { setUser} = registerSlice.actions

export default registerSlice.reducer


// Other code such as selectors can use the imported `RootState` type
export const useCurrentUser = (state: RootState) => state.register.user;