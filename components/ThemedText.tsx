import { StyleSheet, Text, type TextProps } from "react-native";

import { Typography } from "@/constants/Typography";
import { useAllColors } from "@/hooks/theme/useAllColors";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link" | "sm";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor("text");
  const { agGray900 } = useAllColors();

  return (
    <Text
      style={[
        { color },
        type === "sm" ? styles.smallSizeText : undefined,
        type === "title" ? { color: agGray900 } : undefined,
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
  smallSizeText: {
    fontSize: Typography.fontSizeSmall,
    lineHeight: 20,
  },
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
    fontSize: Typography.fontSizeLarge,
    fontWeight: "bold",
    lineHeight: 24,
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
