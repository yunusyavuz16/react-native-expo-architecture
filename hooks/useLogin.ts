import { loginApi } from "@/api/login";
import { login } from "@/store/slices/authSlice";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";

const useLogin = (username: string) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    const { accessToken, refreshToken } = await loginApi(username);
    dispatch(login({ user: username, refreshToken, accessToken }));
    router.push("/(tabs)");
  };

  return { handleLogin };
};

export default useLogin;
