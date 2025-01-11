import AgDropdown from "@/components/common/AgDropdown";
import { ThemedText } from "@/components/ThemedText";
import { LANGUAGES } from "@/constants/Languages";
import {
  flexStyle,
  marginLeftStyle,
  textFontWeightStyle
} from "@/constants/Styles";
import { useAllColors } from "@/hooks/theme/useAllColors";
import { useAppSelector } from "@/hooks/useAppSelector";
import { switchLanguage } from "@/store/slices/languageSlice";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import SettingRow from "./SettingRow";

export default function LanguageDropdown() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { language } = useAppSelector((state) => state.language);
  const { t } = useTranslation();
  const { text } = useAllColors();

  const handleChange = (value: string) => {
    switchLanguage(value)(dispatch);
  };

  const items = LANGUAGES.map((lang) => ({
    label: `${lang.icon} ${lang.label}`,
    value: lang.value,
  }));
  return (
    <SettingRow style={{ paddingEnd: 0 }}>
      <Ionicons name="earth-outline" size={24} color={text} />
      <ThemedText
        style={[
          flexStyle.flex1,
          textFontWeightStyle.textFontWeight500,
          marginLeftStyle.marginLeftMd,
        ]}
      >
        {t("language")}
      </ThemedText>
      <View>
        <AgDropdown
          open={open}
          value={language}
          items={items}
          setOpen={setOpen}
          setValue={(callback) => handleChange(callback(language))}
          placeholder="Select Language"
        />
      </View>
    </SettingRow>
  );
}
