import {
  StyleSheet,
  TouchableOpacity,
  type ViewProps
} from "react-native";

import { Spacing } from "@/constants/Spacing";
import useStyles from "@/hooks/theme/useStyles";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { ThemedText } from "../ThemedText";

export type ThemedViewProps = ViewProps &
  TouchableOpacityProps & {
    text: string;
  };

function ThemedButton({ style, text, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor("background");
  const { borderColor, agGray700Color } = useStyles();

  return (
    <TouchableOpacity
      style={[{ backgroundColor }, buttonStyles.container, borderColor, style]}
      {...otherProps}
    >
      <ThemedText style={agGray700Color}>{text}</ThemedText>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  container: {
    borderRadius: 15,
    padding: Spacing.large,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ThemedButton;
