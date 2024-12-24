import { Card } from "@/components/card";
import { ThemedText } from "@/components/ThemedText";
import {
  alignItemsStyle,
  flexDirectionStyle,
  justifyContentStyle,
  marginBottomStyle,
  marginLeftStyle,
  marginRightStyle,
  marginTopStyle,
  textFontSizeStyle,
  textFontWeightStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { Text, View } from "react-native";
import AgProgressCircular from "../charts/AgProgressCircular";

const Widget3 = () => {
  const { agBgSuccessStyle, agTextSuccessStyle } = useStyles();

  return (
    <Card containerStyle={[marginTopStyle.marginTopLg]}>
      <View
        style={[
          flexDirectionStyle.flexDirectionRow,
        ]}
      >
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeXl,
            textFontWeightStyle.textFontWeightBold,
          ]}
        >
          {"$69,700"}
        </ThemedText>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeMd,
            agTextSuccessStyle,
            marginLeftStyle.marginLeftSm,
            alignItemsStyle.alignItemsCenter,
          ]}
        >
          {"▲ 2.2%"}
        </ThemedText>
      </View>
      <View style={flexDirectionStyle.flexDirectionRow}>
        <ThemedText style={[textFontSizeStyle.textFontSizeMd]}>
          {"Projects Earnings in April"}
        </ThemedText>
      </View>

      <View style={marginTopStyle.marginTopMd}>
        <AgProgressCircular />
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
