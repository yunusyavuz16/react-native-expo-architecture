import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: Spacing.large,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: Spacing.medium,
    marginBottom: Spacing.small,
    borderRadius: 5,
  },
});
