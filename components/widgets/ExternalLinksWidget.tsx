import { Card } from "@/components/card";
import { ThemedText } from "@/components/ThemedText";
import {
  borderBottomWidthStyle,
  borderWidthStyle,
  flexDirectionStyle,
  justifyContentStyle,
  marginBottomStyle,
  marginTopStyle,
  paddingVerticalStyle,
  textFontSizeStyle,
  textFontWeightStyle
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { MaterialIcons } from "@expo/vector-icons"; // For edit icon
import { Pressable, View } from "react-native";
import { useTranslation } from "react-i18next";

const ExternalLinksWidget = () => {
  const { agTextPrimaryStyle, agBorderGray300Style } = useStyles();
  const { t } = useTranslation();

  return (
    <Card containerStyle={[marginTopStyle.marginTopLg]}>
      <View style={marginBottomStyle.marginBottomMd}>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeLg,
            textFontWeightStyle.textFontWeightBold,
          ]}
        >
          {t("externalLinks")}
        </ThemedText>
      </View>

      <View
        style={[
          flexDirectionStyle.flexDirectionRow,
          justifyContentStyle.justifyContentSpaceBetween,
          marginBottomStyle.marginBottomSm,
          agBorderGray300Style,
          paddingVerticalStyle.paddingVerticalSm,
          borderWidthStyle.boderWidth0,
          borderBottomWidthStyle.borderBottom,
        ]}
      >
        <ThemedText
          style={[textFontSizeStyle.textFontSizeMd, agTextPrimaryStyle]}
        >
          {t("avgClientRating")}
        </ThemedText>
        <Pressable>
          <MaterialIcons name="link" size={18} color="#B0B0B0" />
        </Pressable>
      </View>
      <View
        style={[
          flexDirectionStyle.flexDirectionRow,
          justifyContentStyle.justifyContentSpaceBetween,
          marginBottomStyle.marginBottomSm,
          agBorderGray300Style,
          paddingVerticalStyle.paddingVerticalSm,
          borderWidthStyle.boderWidth0,
          borderBottomWidthStyle.borderBottom,
        ]}
      >
        <ThemedText
          style={[textFontSizeStyle.textFontSizeMd, agTextPrimaryStyle]}
        >
          {t("instagramFollowers")}
        </ThemedText>
        <Pressable>
          <MaterialIcons name="link" size={18} color="#B0B0B0" />
        </Pressable>
      </View>
      <View
        style={[
          flexDirectionStyle.flexDirectionRow,
          justifyContentStyle.justifyContentSpaceBetween,
          marginBottomStyle.marginBottomSm,
          paddingVerticalStyle.paddingVerticalSm,
        ]}
      >
        <ThemedText
          style={[textFontSizeStyle.textFontSizeMd, agTextPrimaryStyle]}
        >
          {t("googleAdsCPC")}
        </ThemedText>
        <Pressable>
          <MaterialIcons name="link" size={18} color="#B0B0B0" />
        </Pressable>
      </View>
    </Card>
  );
};

export default ExternalLinksWidget;
