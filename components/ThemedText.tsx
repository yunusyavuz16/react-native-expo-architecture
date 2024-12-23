import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { Typography } from "@/constants/Typography";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor("text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: Typography.fontSizeMedium,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: Typography.fontSizeMedium,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: Typography.fontSizeHuge,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: Typography.fontSizeExtraLarge,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: Typography.fontSizeMedium,
    color: "#0a7ea4",
  },
});
