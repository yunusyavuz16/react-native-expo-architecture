interface JwtGetApiResult <T> {
    response: T | null;
    error: string | null;
    isSuccessful: boolean;
}

export type { JwtGetApiResult };