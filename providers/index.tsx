import ErrorBoundary from "@/components/ErrorBoundary";
import { store } from "@/store";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import LoadingProvider from "./loading";
import { indexStyles } from "./index.styles";

const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <SafeAreaView style={indexStyles.container}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <ErrorBoundary>
            <LoadingProvider>
              <SafeAreaProvider>{children}</SafeAreaProvider>
            </LoadingProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default AppProviders;
