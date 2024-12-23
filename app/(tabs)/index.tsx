//app/(tabs)/index.tsx

import PostContainer from "@/components/post/PostContainer";
import PostHeaderComponent from "@/components/post-header";
import ScreenLayout from "@/components/screen-layout";
import { View } from "react-native";
import { flexStyle } from "@/constants/Styles";
import { useTranslation } from "react-i18next";
import i18n from "@/localization";

export default function HomeScreen() {
  const {t} = useTranslation()
  const onNotificationPress = () => {
    console.log("Notification Pressed");
  };
  const onSearchPress = () => {
    console.log("Search Pressed");
  };
  console.log(i18n.language);  // Logs the current language

  return (
    <View style={flexStyle.flex1}>
      <PostHeaderComponent
        onNotificationPress={onNotificationPress}
        onSearchPress={onSearchPress}
        title={t("welcome")}
      />

      <ScreenLayout>
        <PostContainer />
      </ScreenLayout>
    </View>
  );
}
