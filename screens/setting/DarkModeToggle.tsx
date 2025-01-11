import { ThemedText } from "@/components/ThemedText";
import { Spacing } from "@/constants/Spacing";
import { useAllColors } from "@/hooks/theme/useAllColors";
import { useTheme } from "@/providers/theme/ThemeContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { memo } from "react";
import { StyleSheet, Switch } from "react-native";
import SettingRow from "./SettingRow";
import { useTranslation } from "react-i18next";

const DarkModeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  const { t } = useTranslation();
  const { agGray300, agPrimary, text } = useAllColors();
  const toggleSwitch = () => {
    toggleTheme();
  };
  const isEnabled = theme === "dark";

  return (
    <SettingRow>
      <Ionicons name="moon-outline" size={24} color={text} />

      <ThemedText style={styles.text}>{t("darkMode")}</ThemedText>
      <Switch
        trackColor={{ false: agGray300, true: agPrimary }}
        thumbColor={isEnabled ? "#FFFFFF" : "#F4F3F4"}
        ios_backgroundColor="#D3D3D3"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SettingRow>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    marginLeft: Spacing.medium,
    fontWeight: "500",
  },
});

export default memo(DarkModeToggle);
