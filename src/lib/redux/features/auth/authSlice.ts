import { User } from "@/core/types/User";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

type AuthState = {
  user: User | null;
  token: string | null;
  error: string | null;
  loading: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, token } = action.payload;

      return {
        error: null,
        loading: false,
        token,
        user,
      };
    },
    loginFailed: (state, action) => {
      const {
        response: { data },
      } = action.payload;

      return {
        error: data.message,
        loading: false,
        token: null,
        user: null,
      };
    },
  },
});

export const { loginSuccess, loginFailed } = authSlice.actions;

export const selectAuthSlice = (global: RootState) => global.auth;

export default authSlice.reducer;
