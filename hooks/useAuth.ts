import { loginApi } from "@/api/login";
import { login, logout } from "@/store/slices/authSlice";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";

const useAuth = (username: string) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    const { accessToken, refreshToken } = await loginApi(username);
    dispatch(login({ user: username, refreshToken, accessToken }));
    router.push("/(drawer)/(social)");
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return { handleLogin, handleLogout };
};

export default useAuth;
