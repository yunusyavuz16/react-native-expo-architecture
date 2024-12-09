import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

const notFoundStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.medium,
  },
  link: {
    marginTop: Spacing.medium,
    paddingVertical: Spacing.medium,
  },
});

export default notFoundStyles;
