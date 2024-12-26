// app/(tabs)/_layout.tsx

import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { useAllColors } from "@/hooks/theme/useAllColors";
import DashboardHeader from "@/screens/home/DashboardHeader";
import { Ionicons } from "@expo/vector-icons";
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
          title: t("dashboard"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          headerShown: false,

          title: t("notification"),
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,

          title: t("profile"),
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          headerShown: false,

          title: t("settings"),
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
