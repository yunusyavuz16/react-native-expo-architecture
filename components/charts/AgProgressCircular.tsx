import {
  AG_GRAY_300_LIGHT,
  AG_PRIMARY,
  AG_SUCCESS_LIGHT
} from "@/constants/Colors";
import {
  alignItemsStyle,
  justifyContentStyle,
  textFontSizeStyle
} from "@/constants/Styles";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import React from "react";
import { PieChart, pieDataItem } from "react-native-gifted-charts";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

const data = [
  { value: 20, color: AG_GRAY_300_LIGHT },
  { value: 30, color: AG_SUCCESS_LIGHT },
  { value: 35, color: AG_PRIMARY },
];

const AgProgressCircular: React.FC<{
  pieData?: pieDataItem[];
  percentage?: number | string;
}> = ({ pieData = data, percentage }) => {
  const backgroundColor = useThemeColor("background");
  return (
    <ThemedView
      style={[
        justifyContentStyle.justifyContentCenter,
        alignItemsStyle.alignItemsCenter,
      ]}
    >
      <PieChart
        donut
        innerRadius={40}
        radius={60}
        backgroundColor={backgroundColor}
        data={pieData}
        centerLabelComponent={() => {
          return (
            <ThemedText style={textFontSizeStyle.textFontSizeLg}>
              {percentage}
            </ThemedText>
          );
        }}
      />
    </ThemedView>
  );
};

export default AgProgressCircular;
