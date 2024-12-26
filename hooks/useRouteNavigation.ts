import { delay } from "@/utils/delay";
import { getValue } from "@/utils/storeSecureStorage";
import { useRouter } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { useLocalization } from "./useLocalization";

export const useRouteNavigation = () => {
  useLocalization();
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
    router.push("/(drawer)/(social)");
  };

  return { goLogin, goHome };
};
