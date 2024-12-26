import { paddingStyle, textFontSizeStyle } from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

const AgInput: React.FC<TextInputProps> = ({ style, ...otherProps }) => {
  const {
    agGray900Color,
    agLightActive,
    agBorderGray300Style,
    agGray600Color,
  } = useStyles();
  return (
    <TextInput
      placeholderTextColor={agGray600Color.color}
      style={[
        agGray900Color,
        agLightActive,
        paddingStyle.paddingLg,
        agBorderGray300Style,
        textFontSizeStyle.textFontSizeMd,
        style,
      ]}
      {...otherProps}
    />
  );
};

export default AgInput;
