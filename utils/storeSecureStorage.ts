import { SECURE_STORE_KEYS } from "@/constants/Keys";
import { AuthState } from "@/types/auth.types";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const key = Platform.select({
  android: SECURE_STORE_KEYS.ANDROID_AUTH,
  ios: SECURE_STORE_KEYS.IOS_AUTH,
  default: SECURE_STORE_KEYS.DEFAULT_AUTH,
});

async function storeSecureStorage(value: AuthState) {
  try {
    const data = JSON.stringify(value);
    await SecureStore.setItemAsync(key, data);
  } catch (error) {
    console.log("storeSecureStorage error", error);
  }
}

async function getValue(): Promise<AuthState | null> {
  try {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return JSON.parse(result);
    }
  } catch (error) {
    console.log("getValueFor error", error);
    return null;
  }
  return null;
}

export { storeSecureStorage, getValue };
