import { Spacing } from "@/constants/Spacing";
import { Typography } from "@/constants/Typography";
import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: Spacing.large,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  title: {
    fontSize: Typography.fontSizeLarge,
    fontWeight: "bold",
    color: "#333",
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: Spacing.large,
  },
});

export default headerStyles;
