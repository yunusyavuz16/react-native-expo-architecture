import { Card } from "@/components/card";
import { ThemedText } from "@/components/ThemedText";
import {
  flexDirectionStyle,
  justifyContentStyle,
  marginBottomStyle,
  marginRightStyle,
  marginTopStyle,
  textFontSizeStyle,
  textFontWeightStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { Text, View } from "react-native";

const Widget3 = () => {
  const { agBgSuccessStyle, agTextSuccessStyle } = useStyles();

  return (
    <Card containerStyle={[marginTopStyle.marginTopLg]}>
      <View style={marginBottomStyle.marginBottomMd}>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeXl,
            textFontWeightStyle.textFontWeightBold,
          ]}
        >
          {"$69,700"}
        </ThemedText>
        <View style={flexDirectionStyle.flexDirectionRow}>
          <Text
            style={[
              textFontSizeStyle.textFontSizeMd,
              agTextSuccessStyle,
              marginRightStyle.marginRightSm,
            ]}
          >
            {"▲ 2.2%"}
          </Text>
          <ThemedText style={[textFontSizeStyle.textFontSizeMd]}>
            {"Projects Earnings in April"}
          </ThemedText>
        </View>
      </View>

      <View style={marginTopStyle.marginTopMd}>
        {/* <ProgressCircle size={100} progressData={[45, 25, 30]} /> */}
        <View style={marginTopStyle.marginTopLg}>
          <View
            style={[
              flexDirectionStyle.flexDirectionRow,
              justifyContentStyle.justifyContentSpaceBetween,
              marginBottomStyle.marginBottomSm,
            ]}
          >
            <Text>Leaf CRM</Text>
            <Text>{"$7,660"}</Text>
          </View>
          <View
            style={[
              flexDirectionStyle.flexDirectionRow,
              justifyContentStyle.justifyContentSpaceBetween,
              marginBottomStyle.marginBottomSm,
            ]}
          >
            <Text>Mivy App</Text>
            <Text>{"$2,820"}</Text>
          </View>
          <View
            style={[
              flexDirectionStyle.flexDirectionRow,
              justifyContentStyle.justifyContentSpaceBetween,
            ]}
          >
            <Text>Others</Text>
            <Text>{"$45,257"}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default Widget3;
