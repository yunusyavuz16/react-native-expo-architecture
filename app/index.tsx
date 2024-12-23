import i18n from "@/localization";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  flexStyle,
  justifyContentStyle,
  paddingStyle,
  textAlignStyle,
} from "@/constants/Styles";
import { useRouteNavigation } from "@/hooks/useRouteNavigation";
import React from "react";

const index = () => {
  useRouteNavigation();
  return (
    <ThemedView
      style={[
        flexStyle.flex1,
        justifyContentStyle.justifyContentCenter,
        paddingStyle.paddingLg,
      ]}
    >
      <ThemedText style={textAlignStyle.textAlignCenter}>
        React Native Expo Architecture
      </ThemedText>
    </ThemedView>
  );
};

export default index;
