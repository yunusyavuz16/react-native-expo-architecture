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

const ExternalLinksWidget = () => {
  const { agTextPrimaryStyle, agBorderGray300Style } = useStyles();

  return (
    <Card containerStyle={[marginTopStyle.marginTopLg]}>
      <View style={marginBottomStyle.marginBottomMd}>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeLg,
            textFontWeightStyle.textFontWeightBold,
          ]}
        >
          External Links
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
          {"Avg. Client Rating"}
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
          {"Instagram Followers"}
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
          {"Google Ads CPC"}
        </ThemedText>
        <Pressable>
          <MaterialIcons name="link" size={18} color="#B0B0B0" />
        </Pressable>
      </View>
    </Card>
  );
};

export default ExternalLinksWidget;
