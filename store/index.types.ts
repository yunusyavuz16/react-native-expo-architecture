import { AuthActions } from "./slices/authSlice";

export type AppAction =
  | ReturnType<AuthActions[keyof  AuthActions]>;

