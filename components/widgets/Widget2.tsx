import Avatar from "@/components/Avatar";
import { Card } from "@/components/card";
import { ThemedText } from "@/components/ThemedText";
import {
    flexDirectionStyle,
    marginBottomStyle,
    marginLeftStyle,
    marginTopStyle,
    textAlignStyle,
    textFontSizeStyle,
    textFontWeightStyle
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { View } from "react-native";

const Widget2 = () => {
  const {
    agBgDangerStyle,
    agTextLightStyle,
    agBgPrimaryStyle,
    agBgSuccessStyle,
    agBgInfoStyle,
    agBgWarningStyle,
    agBgSecondaryStyle,
  } = useStyles();
  return (
    <Card containerStyle={[marginTopStyle.marginTopLg]}>
      <View style={marginBottomStyle.marginBottomLg}>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeXl,
            textFontWeightStyle.textFontWeightBold,
            textAlignStyle.textAlignLeft,
          ]}
        >
          {357}
        </ThemedText>
        <ThemedText style={[textFontSizeStyle.textFontSizeMd]}>
          {"Professionals"}
        </ThemedText>
      </View>
      <View style={[marginBottomStyle.marginBottomMd]}>
        <ThemedText style={textFontWeightStyle.textFontWeightBold}>
          Today' s Heroes
        </ThemedText>
      </View>
      <View style={[flexDirectionStyle.flexDirectionRow]}>
        <Avatar
          label="A"
          containerStyle={agBgDangerStyle}
          textStyles={agTextLightStyle}
        />
        <Avatar
          label="B"
          containerStyle={[agBgPrimaryStyle, marginLeftStyle.minusMarginLeftSm]}
          textStyles={agTextLightStyle}
        />
        <Avatar
          label="C"
          containerStyle={[agBgSuccessStyle, marginLeftStyle.minusMarginLeftSm]}
          textStyles={agTextLightStyle}
        />
        <Avatar
          label="D"
          containerStyle={[agBgInfoStyle, marginLeftStyle.minusMarginLeftSm]}
          textStyles={agTextLightStyle}
        />
        <Avatar
          label="E"
          containerStyle={[agBgWarningStyle, marginLeftStyle.minusMarginLeftSm]}
          textStyles={agTextLightStyle}
        />
        <Avatar
          label="+42"
          containerStyle={[
            agBgSecondaryStyle,
            marginLeftStyle.minusMarginLeftSm,
          ]}
          textStyles={textFontSizeStyle.textFontSizeSm}
        />
      </View>
    </Card>
  );
};

export default Widget2;
