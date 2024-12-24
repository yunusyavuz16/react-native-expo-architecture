import { useAllColors } from "@/hooks/theme/useAllColors";
import React from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { ThemedText } from "../ThemedText";
import {
  alignItemsStyle,
  flexDirectionStyle,
  justifyContentStyle,
  textFontSizeStyle,
} from "@/constants/Styles";
import { ThemedView } from "../ThemedView";

const AgProgressCircular = () => {
  const { agPrimary, agGray300, agSuccess, agDanger } = useAllColors();
  const pieData = [
    { value: 35, color: agPrimary },
    { value: 20, color: agSuccess },
    { value: 15, color: agDanger },
    { value: 30, color: agGray300 },
  ];
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
        data={pieData}
        centerLabelComponent={() => {
          return (
            <ThemedText style={textFontSizeStyle.textFontSizeLg}>
              70%
            </ThemedText>
          );
        }}
      />
    </ThemedView>
  );
};

export default AgProgressCircular;
