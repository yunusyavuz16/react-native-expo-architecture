import ErrorBoundary from "@/components/ErrorBoundary";
import { store } from "@/store";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { indexStyles } from "./index.styles";
import LoadingProvider from "./loading";

const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();
  const Scheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <Provider store={store}>
      <SafeAreaView style={indexStyles.container}>
        <ThemeProvider value={Scheme}>
          <ErrorBoundary>
            <LoadingProvider>{children}</LoadingProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default AppProviders;
