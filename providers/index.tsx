import ErrorBoundary from "@/components/ErrorBoundary";
import { store } from "@/store";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { indexStyles } from "./index.styles";
import LoadingProvider from "./loading";
import { ThemeProvider } from "./theme/ThemeContext";
import { ThemedView } from "@/components/ThemedView";

const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemedView style={indexStyles.container}>
          <SafeAreaView style={indexStyles.container}>
            <ErrorBoundary>
              <LoadingProvider>{children}</LoadingProvider>
            </ErrorBoundary>
          </SafeAreaView>
        </ThemedView>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
