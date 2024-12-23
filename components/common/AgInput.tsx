import { paddingStyle } from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import React from "react";
import { TextInput, TextInputProps } from "react-native";

const AgInput: React.FC<TextInputProps> = ({ style, ...otherProps }) => {
  const { agGray900Color, agLightActive, borderColor } = useStyles();
  return (
    <TextInput
      style={[
        agGray900Color,
        agLightActive,
        paddingStyle.paddingLg,
        borderColor,
        style,
      ]}
      {...otherProps}
    />
  );
};

export default AgInput;
