interface AuthState {
    isLoggedIn: boolean;
    user: string | null;
    accessToken: string | null;
    refreshToken: string | null;
  }

  export type { AuthState };