import ThemedButton from "@/components/common/AgButton";
import DarkModeToggle from "@/components/dark-mode-row";
import ScreenLayout from "@/components/screen-layout";
import { flexStyle, gapStyle, marginStyle } from "@/constants/Styles";
import { logout } from "@/store/slices/authSlice";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";

const Setting = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/login");
  };
  return (
    <ScreenLayout>
      <View style={[marginStyle.marginLg, flexStyle.flex1, gapStyle.gapMd]}>
        <DarkModeToggle />
        <ThemedButton text="Log Out" onPress={handleLogout} />
      </View>
    </ScreenLayout>
  );
};

export default Setting;
