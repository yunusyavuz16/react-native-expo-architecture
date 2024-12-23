// app/(tabs)/_layout.tsx

import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { useAllColors } from "@/hooks/theme/useAllColors";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const { tint, background } = useAllColors();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tint,
        headerShown: false,
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
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: "Notification",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="settings" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
