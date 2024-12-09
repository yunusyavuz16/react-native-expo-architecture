import { ConstantColors } from "@/constants/Colors";
import { Spacing } from "@/constants/Spacing";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ConstantColors.primary,

    justifyContent: "center",
    padding: Spacing.large,
  },
  textButton: {
    textAlign: "center",
    color: ConstantColors.white,
  },
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

export default styles;
