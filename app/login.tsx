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
import { useTranslation } from "react-i18next";

export default function LoginScreen() {
  const { agGray700Color, agPrimaryColor, agBorderGray300Style } = useStyles();
  const { t } = useTranslation();

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
            agBorderGray300Style,
          ]}
        >
          <View
            style={[
              justifyContentStyle.justifyContentCenter,
              alignItemsStyle.alignItemsCenter,
            ]}
          >
            <View style={[marginStyle.marginMd]}>
              <ThemedText type="title">{t("login")}</ThemedText>
            </View>
            <View>
              <ThemedText
                style={[agGray700Color, textFontSizeStyle.textFontSizeMd]}
              >
                {t("needAccount")}{" "}
                <ThemedText style={agPrimaryColor}>{t("register")}</ThemedText>
              </ThemedText>
            </View>
          </View>
          <View style={[flexDirectionStyle.flexDirectionRow, gapStyle.gapMd]}>
            <EasyLogin buttonText={t("useLogin")} logo="apple" />
            <EasyLogin buttonText={t("useApple")} logo="google" />
          </View>
          <View>
            <ThemedText style={agGray700Color} type="sm">
              {t("or")}
            </ThemedText>
          </View>
          <LoginForm />
        </ThemedView>
      </View>
    </ScreenLayout>
  );
}
