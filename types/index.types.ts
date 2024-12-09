interface JwtGetApiResultError {
  response: null;
  error: string;
  isSuccessful: boolean;
}

interface JwtGetApiResultSuccess<T> {
  response: T;
  error: null;
  isSuccessful: boolean;
}

type JwtGetApiResult<T> = JwtGetApiResultError | JwtGetApiResultSuccess<T>;

export type { JwtGetApiResult };
