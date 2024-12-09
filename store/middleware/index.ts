// middleware for redux store

import { Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { login, logout } from "../slices/authSlice";
import { RootState } from "..";
import { AppAction } from "../index.types";
import { storeSecureStorage } from "@/utils/storeSecureStorage";

// auth login middleware
const storeMiddleware: any =
  (store: MiddlewareAPI<Dispatch<AppAction>, RootState>) =>
  (next: Dispatch<AppAction>) =>
  (action: AppAction) => {
    const nextAction = next(action).type;

    if (nextAction === logout.type) {
      const data = { ...store.getState().auth };
      data.isLoggedIn = false;
      data.user = null;
      data.refreshToken = null;
      storeSecureStorage(data);
    } else if (nextAction === login.type) {
      const data = { ...store.getState().auth };
      data.isLoggedIn = true;
      data.user = action.payload?.user ?? "";
      data.refreshToken = action.payload?.refreshToken ?? "";
      storeSecureStorage(data);
    }

    const returnValue = next(action);
    return returnValue;
  };

export default storeMiddleware;
