// lets make jwt get api template with try catch block and try count

import { JwtGetApiResult } from "@/types";

const ApiGet = async <T>(
  url: string,
  token: string,
  tryCount: number = 3
): Promise<JwtGetApiResult<T>> => {
  let result: JwtGetApiResult<T> | null = null;
  let count = 0;

  while (count < tryCount) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      result = await response.json();

      break;
    } catch (error) {
      count++;
      console.log("JWTGet error", error);
    }
  }
  if (!result) {
    result = {
      isSuccessful: false,
      response: null,
      error: "JWTGet error",
    };
  }
  return result;
};

const ApiPost = async <T>(
  url: string,
  token: string,
  body: any,
  tryCount: number = 3
): Promise<JwtGetApiResult<T>> => {
  let result: JwtGetApiResult<T> | null = null;
  let count = 0;

  while (count < tryCount) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      result = await response.json();

      break;
    } catch (error) {
      count++;
      console.log("JWTPost error", error);
    }
  }
  if (!result) {
    result = {
      isSuccessful: false,
      response: null,
      error: "JWTPost error",
    };
  }
  return result;
};

export { ApiGet, ApiPost };
