import { Link, Stack } from "expo-router";

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
  return (
    <View style={flexStyle.flex1}>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView
        style={[
          flexStyle.flex1,
          alignItemsStyle.alignItemsCenter,
          justifyContentStyle.justifyContentCenter,
          paddingStyle.paddingMd,
        ]}
      >
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <Link
          href="/"
          style={[
            marginTopStyle.marginTopMd,
            paddingVerticalStyle.paddingVerticalMd,
          ]}
        >
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </View>
  );
}
