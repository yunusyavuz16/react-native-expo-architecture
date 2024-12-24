import {
    alignItemsStyle,
    borderRadiusStyle,
    justifyContentStyle,
    marginRightStyle,
    screenBackgroundStyle,
    textFontWeightStyle,
    widthStyle,
} from "@/constants/Styles";
import React from "react";
import { Image, Text, View } from "react-native";

const Avatar: React.FC<{ src?: string; label?: string; bgColor: string }> = ({
  src,
  label,
  bgColor,
}) => (
  <View
    style={[
      widthStyle.width25,
      { height: "25%" },
      borderRadiusStyle.borderRadiusXl,
      justifyContentStyle.justifyContentCenter,
      alignItemsStyle.alignItemsCenter,
      marginRightStyle.marginRightMd,
      screenBackgroundStyle(bgColor).containerBacgkround,
    ]}
  >
    {src ? (
      <Image source={{ uri: src }} style={widthStyle.width100} />
    ) : (
      <Text
        style={[
          textFontWeightStyle.textFontWeightBold,
          screenBackgroundStyle("white").containerBacgkround,
        ]}
      >
        {label}
      </Text>
    )}
  </View>
);

export default Avatar;
