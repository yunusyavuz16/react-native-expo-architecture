//app/(tabs)/index.tsx

import PostHeaderComponent from "@/components/post-header";
import ScreenLayout from "@/components/screen-layout";
import { flexStyle } from "@/constants/Styles";
import Dashboard from "@/screens/home/Dashboard";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

export default function HomeScreen() {
  const { t } = useTranslation();
  const onNotificationPress = () => {
    console.log("Notification Pressed");
  };
  const onSearchPress = () => {
    console.log("Search Pressed");
  };

  return (
    <View style={flexStyle.flex1}>
      <PostHeaderComponent
        onNotificationPress={onNotificationPress}
        onSearchPress={onSearchPress}
        title={t("welcome")}
      />

      <ScreenLayout>
        <Dashboard />
      </ScreenLayout>
    </View>
  );
}
