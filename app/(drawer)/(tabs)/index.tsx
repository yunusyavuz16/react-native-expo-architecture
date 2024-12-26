//app/(tabs)/index.tsx

import ScreenLayout from "@/components/screen-layout";
import { flexStyle } from "@/constants/Styles";
import Dashboard from "@/screens/home/Dashboard";
import React from "react";
import { View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

export default function HomeScreen() {
  return (
    <View style={flexStyle.flex1}>
      <MenuProvider>
        <ScreenLayout>
          <Dashboard />
        </ScreenLayout>
      </MenuProvider>
    </View>
  );
}
