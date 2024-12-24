import { Card } from "@/components/card";
import { ProgressBar } from "@/components/ProgressBar";
import { ThemedText } from "@/components/ThemedText";
import {
    flexDirectionStyle,
    justifyContentStyle,
    marginBottomStyle,
    marginTopStyle,
    textAlignStyle,
    textFontSizeStyle,
    textFontWeightStyle
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { Text, View } from "react-native";

const Widget1 = () => {
  const {
    agBgDangerStyle,
    agTextLightStyle,
  } = useStyles();
  return (
    <Card containerStyle={agBgDangerStyle}>
      <View style={marginBottomStyle.marginBottomMd}>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeXl,
            textFontWeightStyle.textFontWeightBold,
            textAlignStyle.textAlignLeft,
            agTextLightStyle,
          ]}
        >
          {69}
        </ThemedText>
        <ThemedText
          style={[textFontSizeStyle.textFontSizeMd, agTextLightStyle]}
        >
          {"Active Projects"}
        </ThemedText>
      </View>
      <View style={marginTopStyle.marginTopMd}>
        <View
          style={[
            flexDirectionStyle.flexDirectionRow,
            justifyContentStyle.justifyContentSpaceBetween,
            marginBottomStyle.marginBottomMd,
          ]}
        >
          <Text style={[textFontSizeStyle.textFontSizeMd, agTextLightStyle]}>
            43 Pending
          </Text>
          <Text style={[textFontSizeStyle.textFontSizeMd, agTextLightStyle]}>
            72%
          </Text>
        </View>
      </View>
      <View>
        <ProgressBar progress={72} />
      </View>
    </Card>
  );
};

export default Widget1;
