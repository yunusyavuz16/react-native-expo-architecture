import {
  flexDirectionStyle,
  marginLeftStyle,
  marginTopStyle,
  textFontSizeStyle,
  textFontWeightStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { Card } from "../card";
import { ThemedText } from "../ThemedText";
import AgBadge from "../AgBadge";
import AgLineChart from "./AgLineChart";
import { View } from "react-native";

const PerformanceOverviewWidget = () => {
  const { agGray600Color } = useStyles();

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
          {"18,89"}
        </ThemedText>

        <AgBadge
          style={marginLeftStyle.marginLeftSm}
          value="4.8"
          prefix="▲ "
          suffix="%"
          variant="success"
        />
      </View>
      <View style={flexDirectionStyle.flexDirectionRow}>
        <ThemedText style={[textFontSizeStyle.textFontSizeMd, agGray600Color]}>
          {"Average cost per interaction"}
        </ThemedText>
      </View>
      <AgLineChart />
    </Card>
  );
};

export default PerformanceOverviewWidget;
