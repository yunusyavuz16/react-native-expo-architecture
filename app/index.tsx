import LogoRowName from "@/components/LogoRowName";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  alignItemsStyle,
  flexStyle,
  justifyContentStyle,
  paddingStyle,
  textAlignStyle,
} from "@/constants/Styles";
import { useRouteNavigation } from "@/hooks/useRouteNavigation";
import React from "react";
import { View } from "react-native";

const index = () => {
  useRouteNavigation();
  return (
    <ThemedView
      style={[
        flexStyle.flex1,
        alignItemsStyle.alignItemsCenter,
        justifyContentStyle.justifyContentCenter,
        paddingStyle.paddingLg,
      ]}
    >
      <View
        style={[
          justifyContentStyle.justifyContentCenter,
          alignItemsStyle.alignItemsCenter,
          paddingStyle.paddingXl,
        ]}
      >
        <LogoRowName />
      </View>
      <ThemedText style={textAlignStyle.textAlignCenter}>
        React Native Expo Architecture
      </ThemedText>
    </ThemedView>
  );
};

export default index;
