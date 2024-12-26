import ScreenLayout from "@/components/screen-layout";
import { flexStyle } from "@/constants/Styles";
import Dashboard from "@/screens/dashboard/Dashboard";
import React from "react";
import { View } from "react-native";
import { MenuProvider } from "react-native-popup-menu";

export default function DashboardScreen() {
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
