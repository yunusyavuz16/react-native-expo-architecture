import { SECURE_STORE_KEYS } from "@/constants/Keys";
import { switchLanguage } from "@/store/slices/languageSlice";
import * as SecureStorage from "expo-secure-store";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";

export const useLocalization = () => {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    SecureStorage.getItemAsync(SECURE_STORE_KEYS.LOCALIZATION).then(
      (localization) => {
        if (localization) {
          switchLanguage(localization, true)(dispatch);
        }
      }
    );
    // get localization from store
  }, []);
};
