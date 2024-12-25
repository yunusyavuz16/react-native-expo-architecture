import { TouchableOpacity, type ViewProps } from "react-native";

import {
  alignItemsStyle,
  borderRadiusStyle,
  justifyContentStyle,
  paddingStyle,
  textFontWeightStyle
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { ThemedText } from "../ThemedText";

export type ThemedViewProps = ViewProps &
  TouchableOpacityProps & {
    text: string;
    type?: "primary" | "secondary";
  };

function AgButton({ style, text, type, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor("background");
  const {
    agBorderGray300Style,
    agGray700Color,
    agBgPrimaryStyle,
    agBorderPrimaryStyle,
    agTextLightStyle,
  } = useStyles();

  return (
    <TouchableOpacity
      style={[
        type === "primary" ? agBgPrimaryStyle : { backgroundColor },
        type === "primary" ? agBorderPrimaryStyle : agBorderGray300Style,
        paddingStyle.paddingMd,
        justifyContentStyle.justifyContentCenter,
        alignItemsStyle.alignItemsCenter,
        borderRadiusStyle.borderRadiusMd,
        style,
      ]}
      {...otherProps}
    >
      <ThemedText
        style={[
          type === "primary" ? agTextLightStyle  : agGray700Color,
          textFontWeightStyle.textFontWeightBold,
        ]}
      >
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
}

export default AgButton;
