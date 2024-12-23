import ErrorBoundary from "@/components/ErrorBoundary";
import { store } from "@/store";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { indexStyles } from "./index.styles";
import LoadingProvider from "./loading";
import { ThemeProvider } from "./theme/ThemeContext";

const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <SafeAreaView style={indexStyles.container}>
        <ThemeProvider>
          <ErrorBoundary>
            <LoadingProvider>{children}</LoadingProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </SafeAreaView>
    </Provider>
  );
};

export default AppProviders;
