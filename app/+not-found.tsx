import { Link, Stack } from "expo-router";
import { useTranslation } from "react-i18next";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  alignItemsStyle,
  flexStyle,
  justifyContentStyle,
  marginTopStyle,
  paddingStyle,
  paddingVerticalStyle,
} from "@/constants/Styles";
import { View } from "react-native";

export default function NotFoundScreen() {
  const { t } = useTranslation();

  return (
    <View style={flexStyle.flex1}>
      <Stack.Screen options={{ title: t("title") }} />
      <ThemedView
        style={[
          flexStyle.flex1,
          alignItemsStyle.alignItemsCenter,
          justifyContentStyle.justifyContentCenter,
          paddingStyle.paddingMd,
        ]}
      >
        <ThemedText type="title">{t("notFoundMessage")}</ThemedText>
        <Link
          href="/"
          style={[
            marginTopStyle.marginTopMd,
            paddingVerticalStyle.paddingVerticalMd,
          ]}
        >
          <ThemedText type="link">{t("goHome")}</ThemedText>
        </Link>
      </ThemedView>
    </View>
  );
}
