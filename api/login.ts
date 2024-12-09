import { ApiPost } from ".";


const exampleRefreshToken = "exampleRefreshToken";
const exampleAccessToken = "exampleAccessToken";

const loginApi = async (userName: string) => {
  // Example usage of ApiPost
  // const data = await ApiPost("login", { userName });
  // But we will use a mock data for now
    const data = {
        accessToken: exampleAccessToken,
        refreshToken: exampleRefreshToken,
    };
  return data;
};


export { loginApi };
