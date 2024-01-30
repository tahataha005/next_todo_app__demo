import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: AuthReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
