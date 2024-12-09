import { store } from "@/store";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import LoadingProvider from "./loading";
import { SafeAreaProvider } from "react-native-safe-area-context";

const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <LoadingProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </LoadingProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
