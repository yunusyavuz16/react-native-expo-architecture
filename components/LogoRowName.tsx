import {
  alignItemsStyle,
  flexDirectionStyle,
  paddingStyle,
  textFontSizeStyle,
  textFontWeightStyle,
} from "@/constants/Styles";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { ThemedText } from "./ThemedText";

const LogoRowName = () => {
  const agPrimary = useThemeColor("agPrimary");
  return (
    <View
      style={[
        flexDirectionStyle.flexDirectionRow,
        alignItemsStyle.alignItemsCenter,
      ]}
    >
      <MaterialIcons color={agPrimary} name="dashboard" size={48} />
      <View style={paddingStyle.paddingMd}>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeXl,
            textFontWeightStyle.textFontWeightBold,
          ]}
        >
          AppFormit
        </ThemedText>
      </View>
    </View>
  );
};

export default LogoRowName;
