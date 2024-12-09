import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouteNavigation } from "@/hooks/useRouteNavigation";
import React from "react";
import { styles } from "./index.styles";

const index = () => {
  useRouteNavigation();
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.textButton}>
        React Native Expo Architecture
      </ThemedText>
    </ThemedView>
  );
};

export default index;

