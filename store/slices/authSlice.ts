import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  user: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        user: string;
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export type AuthActions = typeof authSlice.actions;
export default authSlice.reducer;
