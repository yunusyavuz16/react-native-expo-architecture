import {
  alignItemsStyle,
  borderRadiusStyle,
  heightStyle,
  justifyContentStyle,
  textFontWeightStyle,
  widthStyle
} from "@/constants/Styles";
import React from "react";
import {
  Image,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

const Avatar: React.FC<{
  src?: string;
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}> = ({ src, label, containerStyle, textStyles }) => (
  <View
    style={[
      widthStyle.constWidth25,
      heightStyle.constHeight25,
      borderRadiusStyle.borderRadiusXl,
      justifyContentStyle.justifyContentCenter,
      alignItemsStyle.alignItemsCenter,
      containerStyle,
    ]}
  >
    {src ? (
      <Image source={{ uri: src }} style={widthStyle.width100} />
    ) : (
      <Text style={[textFontWeightStyle.textFontWeightBold, textStyles]}>
        {label}
      </Text>
    )}
  </View>
);

export default Avatar;
