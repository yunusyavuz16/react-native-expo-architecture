// app/(tabs)/_layout.tsx

import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol, IconSymbolIonicons } from "@/components/ui/IconSymbol";
import { useAllColors } from "@/hooks/theme/useAllColors";
import DashboardHeader from "@/screens/dashboard/DashboardHeader";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  const { tint, background } = useAllColors();
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tint,
        tabBarStyle: {
          backgroundColor: background,
          borderTopWidth: 0,
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          elevation: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          header: DashboardHeader,
          title: t("home"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      {/* setting */}
      <Tabs.Screen
        name="settings"
        options={{
          title: t("settings"),
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="gear" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
