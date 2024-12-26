import AgButton from "@/components/common/AgButton";
import ScreenLayout from "@/components/screen-layout";
import { flexStyle, gapStyle, marginStyle } from "@/constants/Styles";
import DarkModeToggle from "@/screens/setting/DarkModeToggle";
import LanguageDropdown from "@/screens/setting/LanguageDropdown";
import { logout } from "@/store/slices/authSlice";
import { router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { useDispatch } from "react-redux";

const Setting = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };
  return (
    <ScreenLayout>
      <View style={[marginStyle.marginLg, flexStyle.flex1, gapStyle.gapMd]}>
        <DarkModeToggle />
        <LanguageDropdown />
        <AgButton text={t("logout")} onPress={handleLogout} />
      </View>
    </ScreenLayout>
  );
};

export default Setting;
