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
});

export default styles;
