import { Colors } from "@/constants/Colors";
import { useTheme } from "@/providers/theme/ThemeContext";

export const useAllColors = () => {
  const { theme } = useTheme();
  return Colors[theme ?? "light"];
};
