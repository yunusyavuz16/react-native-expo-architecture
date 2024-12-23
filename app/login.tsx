import EasyLogin from "@/components/EasyLogin";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import LoginForm from "@/components/login-form";
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
  widthStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { View } from "react-native";

export default function LoginScreen() {
  const { agGray700Color, agPrimaryColor, borderColor } = useStyles();
  return (
    <ScreenLayout>
      <View
        style={[
          flexStyle.flex1,
          justifyContentStyle.justifyContentCenter,
          alignItemsStyle.alignItemsCenter,
          paddingStyle.paddingLg,
        ]}
      >
        <ThemedView
          style={[
            widthStyle.width100,
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
                Need an account?{" "}
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
          <LoginForm />
        </ThemedView>
      </View>
    </ScreenLayout>
  );
}
