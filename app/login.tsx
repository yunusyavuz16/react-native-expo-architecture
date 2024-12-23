import EasyLogin from "@/components/EasyLogin";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ScreenLayout from "@/components/screen-layout";
import {
  alignItemsStyle,
  flexDirectionStyle,
  flexStyle,
  gapStyle,
  justifyContentStyle,
  marginStyle,
  paddingStyle,
  textFontSizeStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("admin");
  const { handleLogin } = useAuth(username);
  const { agGray700Color, agPrimaryColor, borderColor } = useStyles();
  return (
    <ScreenLayout>
      <View
        style={[
          flexStyle.flex1,
          justifyContentStyle.justifyContentCenter,
          alignItemsStyle.alignItemsCenter,
        ]}
      >
        <ThemedView
          style={[
            justifyContentStyle.justifyContentCenter,
            alignItemsStyle.alignItemsCenter,
            gapStyle.gapLg,
            paddingStyle.paddingLg,
            borderColor,
          ]}
        >
          <View
            style={[
              justifyContentStyle.justifyContentCenter,
              alignItemsStyle.alignItemsCenter,
            ]}
          >
            <View style={[marginStyle.marginMd]}>
              <ThemedText type="title">Sign In</ThemedText>
            </View>
            <View>
              <ThemedText
                style={[agGray700Color, textFontSizeStyle.textFontSizeMd]}
              >
                Need an account?
                <ThemedText style={agPrimaryColor}>Sign up</ThemedText>
              </ThemedText>
            </View>
          </View>
          <View style={[flexDirectionStyle.flexDirectionRow, gapStyle.gapMd]}>
            <EasyLogin buttonText="Use Login" logo="apple" />
            <EasyLogin buttonText="Use Apple" logo="google" />
          </View>
          <View>
            <ThemedText style={agGray700Color} type="sm">
              OR
            </ThemedText>
          </View>
          <View></View>
          <TextInput
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
          <Button title="Login" onPress={handleLogin} />
        </ThemedView>
      </View>
    </ScreenLayout>
  );
}
