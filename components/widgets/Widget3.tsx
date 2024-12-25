import { Card } from "@/components/card";
import { ThemedText } from "@/components/ThemedText";
import {
  alignItemsStyle,
  flexDirectionStyle,
  flexStyle,
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
import AgBadge from "../AgBadge";
import AgProgressCircular from "../charts/AgProgressCircular";
import AgBullet from "../AgBullet";

const Widget3 = () => {
  const { agGray600Color, agGray700Color, agBgPrimaryStyle, agBgGray300Style } =
    useStyles();

  return (
    <Card containerStyle={[marginTopStyle.marginTopLg]}>
      <View style={[flexDirectionStyle.flexDirectionRow]}>
        <ThemedText style={[agGray600Color]}>$</ThemedText>
        <ThemedText
          style={[
            textFontSizeStyle.textFontSizeXl,
            textFontWeightStyle.textFontWeightBold,
          ]}
        >
          {"69,700"}
        </ThemedText>

        <AgBadge
          style={marginLeftStyle.marginLeftSm}
          value="2.2"
          prefix="▲ "
          suffix="%"
          variant="success"
        />
      </View>
      <View style={flexDirectionStyle.flexDirectionRow}>
        <ThemedText style={[textFontSizeStyle.textFontSizeMd, agGray600Color]}>
          {"Projects Earnings in April"}
        </ThemedText>
      </View>

      <View
        style={[
          marginTopStyle.marginTopMd,
          flexDirectionStyle.flexDirectionRow,
          justifyContentStyle.justifyContentSpaceBetween,
          alignItemsStyle.alignItemsCenter,
        ]}
      >
        <AgProgressCircular />
        <View
          style={[
            marginTopStyle.marginTopLg,
            flexStyle.flex1,
            marginLeftStyle.marginLeftMd,
          ]}
        >
          <View
            style={[
              flexDirectionStyle.flexDirectionRow,
              justifyContentStyle.justifyContentSpaceBetween,
              marginBottomStyle.marginBottomSm,
            ]}
          >
            <View
              style={[
                flexDirectionStyle.flexDirectionRow,
                justifyContentStyle.justifyContentCenter,
                alignItemsStyle.alignItemsCenter,
              ]}
            >
              <AgBullet
                style={[
                  marginLeftStyle.marginLeftSm,
                  marginRightStyle.marginRightSm,
                ]}
              />
              <ThemedText>Leaf CRM</ThemedText>
            </View>
            <ThemedText style={agGray700Color}>{"$7,660"}</ThemedText>
          </View>
          <View
            style={[
              flexDirectionStyle.flexDirectionRow,
              justifyContentStyle.justifyContentSpaceBetween,
              marginBottomStyle.marginBottomSm,
            ]}
          >
            <View
              style={[
                flexDirectionStyle.flexDirectionRow,
                justifyContentStyle.justifyContentCenter,
                alignItemsStyle.alignItemsCenter,
              ]}
            >
              <AgBullet
                style={[
                  marginLeftStyle.marginLeftSm,
                  marginRightStyle.marginRightSm,
                  agBgPrimaryStyle,
                ]}
              />
              <ThemedText>Mivy App</ThemedText>
            </View>
            <ThemedText style={agGray700Color}>{"$2,820"}</ThemedText>
          </View>
          <View
            style={[
              flexDirectionStyle.flexDirectionRow,
              justifyContentStyle.justifyContentSpaceBetween,
            ]}
          >
            <View
              style={[
                flexDirectionStyle.flexDirectionRow,
                justifyContentStyle.justifyContentCenter,
                alignItemsStyle.alignItemsCenter,
              ]}
            >
              <AgBullet
                style={[
                  marginLeftStyle.marginLeftSm,
                  marginRightStyle.marginRightSm,
                  agBgGray300Style,
                ]}
              />
              <ThemedText>Others</ThemedText>
            </View>
            <ThemedText style={agGray700Color}>{"$45,257"}</ThemedText>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default Widget3;
