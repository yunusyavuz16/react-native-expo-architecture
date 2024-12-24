import Avatar from "@/components/Avatar";
import { Card } from "@/components/card";
import { ProgressBar } from "@/components/ProgressBar";
import { ThemedText } from "@/components/ThemedText";
import {
  alignItemsStyle,
  flexDirectionStyle,
  justifyContentStyle,
  marginBottomStyle,
  marginTopStyle,
  paddingStyle,
  textAlignStyle,
  textFontSizeStyle,
  textFontWeightStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { ScrollView, Text, View } from "react-native";

const Dashboard = () => {
  const { agBgDangerStyle, agTextLightStyle } = useStyles();
  return (
    <ScrollView contentContainerStyle={paddingStyle.paddingLg}>
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
      <View
        style={[
          flexDirectionStyle.flexDirectionRow,
          marginTopStyle.marginTopMd,
          alignItemsStyle.alignItemsCenter,
        ]}
      >
        <Avatar label="A" bgColor="#ffc107" />
        <Avatar
          src="/metronic8/react/demo1/media/avatars/300-11.jpg"
          bgColor="transparent"
        />
        <Avatar label="S" bgColor="#007bff" />
        <Avatar
          src="/metronic8/react/demo1/media/avatars/300-2.jpg"
          bgColor="transparent"
        />
        <Avatar label="P" bgColor="#dc3545" />
        <Avatar
          src="/metronic8/react/demo1/media/avatars/300-12.jpg"
          bgColor="transparent"
        />
        <Avatar label="+42" bgColor="#343a40" />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
