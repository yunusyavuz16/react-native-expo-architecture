import * as SecureStore from "expo-secure-store";

const key = "secureAndroidIOSKey";

async function storeSecureStorage(value: any) {
  try {
    const data = JSON.stringify(value);
    await SecureStore.setItemAsync(key, data);
  } catch (error) {
    console.log("storeSecureStorage error", error);
  }
}

async function getValue() {
  try {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return JSON.parse(result);
    }
  } catch (error) {
    console.log("getValueFor error", error);
    return null;
  }
}

export { storeSecureStorage, getValue };
