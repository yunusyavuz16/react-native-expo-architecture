import { delay } from "@/utils/delay";
import { getValue } from "@/utils/storeSecureStorage";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export const useRouteNavigation = () => {
  const router = useRouter();

  const fetchData = async () => {

    const userData = await getValue();
    // you can fetch your data from your api using your refresh token here
    await delay(1000);
    if (userData && userData.accessToken) {
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
