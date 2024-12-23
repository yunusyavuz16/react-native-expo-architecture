/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/Colors";
import { useTheme } from "@/providers/theme/ThemeContext";

export function useThemeColor(
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
  props?: { light?: string; dark?: string }
) {
  const { theme } = useTheme();
  if (props) {
    const colorFromProps = props[theme];
    if (colorFromProps) {
      return colorFromProps;
    }
  }
  return Colors[theme][colorName];
}
