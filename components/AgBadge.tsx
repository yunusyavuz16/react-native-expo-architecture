import {
  alignItemsStyle,
  borderRadiusStyle,
  marginLeftStyle,
  paddingHorizontalStyle,
  textFontSizeStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import React from "react";
import { StyleProp, TextStyle } from "react-native";
import { ThemedText } from "./ThemedText";

const AgBadge: React.FC<{
  prefix?: string;
  value: string;
  suffix?: string;
  style?: StyleProp<TextStyle>;
  variant?: "success" | "danger" | "primary" | "secondary" | "info" | "warning";
}> = ({ prefix, value, suffix, style, variant = "success" }) => {
  const {
    agTextSuccessStyle,
    agBgSuccessLightStyle,
    agBorderSuccessStyle,
    agTextDangerStyle,
    agBgDangerLightStyle,
    agBorderDangerStyle,
    agTextPrimaryStyle,
    agBgPrimaryLightStyle,
    agBorderPrimaryStyle,
    agTextSecondaryStyle,
    agBgSecondaryLightStyle,
    agBorderSecondaryStyle,
    agTextInfoStyle,
    agBgInfoLightStyle,
    agBorderInfoStyle,
    agTextWarningStyle,
    agBgWarningLightStyle,
    agBorderWarningStyle,
  } = useStyles();

  const handleStyle = () => {
    switch (variant) {
      case "success":
        return [
          agTextSuccessStyle,
          agBgSuccessLightStyle,
          agBorderSuccessStyle,
        ];
      case "danger":
        return [agTextDangerStyle, agBgDangerLightStyle, agBorderDangerStyle];
      case "primary":
        return [
          agTextPrimaryStyle,
          agBgPrimaryLightStyle,
          agBorderPrimaryStyle,
        ];
      case "secondary":
        return [
          agTextSecondaryStyle,
          agBgSecondaryLightStyle,
          agBorderSecondaryStyle,
        ];
      case "info":
        return [agTextInfoStyle, agBgInfoLightStyle, agBorderInfoStyle];
      case "warning":
        return [
          agTextWarningStyle,
          agBgWarningLightStyle,
          agBorderWarningStyle,
        ];
      default:
        return [
          agTextSuccessStyle,
          agBgSuccessLightStyle,
          agBorderSuccessStyle,
        ];
    }
  };

  const variantStyle = handleStyle();
  return (
    <ThemedText
      style={[
        style,
        ...variantStyle,
        textFontSizeStyle.textFontSizeSm,
        alignItemsStyle.alignItemsCenter,
        paddingHorizontalStyle.paddingHorizontalSm,
        borderRadiusStyle.borderRadiusSm,
      ]}
    >
      {prefix}
      {value}
      {suffix}
    </ThemedText>
  );
};

export default AgBadge;
