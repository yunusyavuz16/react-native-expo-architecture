import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouteNavigation } from "@/hooks/useRouteNavigation";
import React from "react";
import { StyleSheet } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(85,124,230)",

    justifyContent: "center",
    padding: 20,
  },
  textButton: {
    textAlign: "center",
    color: "white",
  },
});
