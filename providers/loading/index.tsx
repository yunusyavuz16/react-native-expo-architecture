import { View, Text, ActivityIndicator } from "react-native";
import React, { PropsWithChildren } from "react";
import loaadingProviderStyles from "./loading.styles";
import { useAppSelector } from "@/hooks/useAppSelector";

const LoadingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { loadingActivityIndicator } = useAppSelector((state) => state.loading);
  return (
    <>
      {children}
      {loadingActivityIndicator && (
        <View
          style={loaadingProviderStyles.absoluteLoadingContainerWithScreenSizes}
        >
          <ActivityIndicator color={"white"} />
        </View>
      )}
    </>
  );
};

export default LoadingProvider;
