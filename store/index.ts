import authReducer from "@/store/slices/authSlice";
import loadingReducer from "@/store/slices/loadingSlice";
import { configureStore } from "@reduxjs/toolkit";
import storeMiddleware from "./middleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(storeMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
