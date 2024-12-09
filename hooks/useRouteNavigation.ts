import { delay } from "@/utils/delay";
import { getValue } from "@/utils/storeSecureStorage";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export const useRouteNavigation = () => {
  const router = useRouter();

  const fetchData = async () => {
    const token = await getValue();
    await delay(1000);
    if (token) {
      goHome();
    } else {
      goLogin();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goLogin = () => {
    router.push("/login");
  };

  const goHome = () => {
    router.push("/(tabs)");
  };

  return { goLogin, goHome };
};
