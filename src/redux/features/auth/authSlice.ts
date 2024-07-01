import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for user and token
export type TUser = {
  email: string;
  password: string;
}

export type TUserToken = {
  email: string;
  iat: number;
  exp: number;
}

// Define the initial state type
interface AuthState {
  user: TUser | null;
  token: TUserToken | null;
}

// Define the initial state
const initialState: AuthState = {
  user: null,
  token: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; token: UserToken }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    }
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
export const useCurrentUser = (state: RootState): User | null => state.auth.user;
export const useCurrentUserToken = (state: RootState): UserToken | null => state.auth.token;
