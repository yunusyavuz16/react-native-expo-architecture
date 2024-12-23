import { StyleSheet } from "react-native";

export const screenBackgroundStyle = (backgroundColor: string) =>
  StyleSheet.create({
    containerBacgkround: {
      backgroundColor: backgroundColor,
    },
  });

export const borderStyle = (borderColor: string) =>
  StyleSheet.create({
    border: {
      borderColor: borderColor,
      borderWidth: 0.75,
      borderRadius: 15,
    },
  });
