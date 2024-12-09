//app/(tabs)/index.tsx

import { StyleSheet, Text } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import PostContainer from "@/components/post/PostContainer";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.flexContainer}>
      <PostContainer />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
