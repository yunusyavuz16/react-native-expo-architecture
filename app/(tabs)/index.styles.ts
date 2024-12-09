import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

const indexStyles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.small,
  },
  stepContainer: {
    gap: Spacing.small,
    marginBottom: Spacing.small,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

export default indexStyles;
