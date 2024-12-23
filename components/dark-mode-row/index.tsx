import { Spacing } from "@/constants/Spacing";
import { useAllColors } from "@/hooks/theme/useAllColors";
import useStyles from "@/hooks/theme/useStyles";
import { useTheme } from "@/providers/theme/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { memo } from "react";
import { StyleSheet, Switch } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const DarkModeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  const borderColorStyle = useStyles().borderColor;
  const { agGray600, agGray300, agPrimary } = useAllColors();
  const toggleSwitch = () => {
    toggleTheme();
  };
  const isEnabled = theme === "dark";

  return (
    <ThemedView style={[styles.container, borderColorStyle]}>
      <Ionicons
        name="moon-outline"
        size={24}
        color={isEnabled ? agPrimary : agGray600}
      />

      <ThemedText style={styles.text}>Dark Mode</ThemedText>
      <Switch
        trackColor={{ false: agGray300, true: agPrimary }}
        thumbColor={isEnabled ? "#FFFFFF" : "#F4F3F4"}
        ios_backgroundColor="#D3D3D3"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Spacing.large,
    margin: Spacing.large,
    borderRadius: 15,
  },
  text: {
    flex: 1,
    marginLeft: Spacing.medium,
    fontWeight: "500",
  },
});

export default memo(DarkModeToggle);
