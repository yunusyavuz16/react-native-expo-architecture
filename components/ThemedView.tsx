import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/theme/useThemeColor";

export type ThemedViewProps = ViewProps;

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor("background");

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
