import { AG_PRIMARY, AG_SUCCESS_LIGHT } from "@/constants/Colors";
import {
  flexDirectionStyle,
  justifyContentStyle,
  marginTopStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { ThemedView } from "../ThemedView";

const AgLineChart = () => {
  const { agGray600Color } = useStyles();

  const data = [
    { value: 40, label: "9" },
    { value: 90, label: "12" },
    { value: 90, label: "15" },
    { value: 50, label: "18" },
    { value: 50, label: "24" },
    { value: 105, label: "27" },
    { value: 105, label: "30" },
    { value: 80, label: "33" },
  ];

  const data2 = [
    { value: 10, label: "9" },
    { value: 60, label: "12" },
    { value: 60, label: "15" },
    { value: 30, label: "18" },
    { value: 30, label: "24" },
    { value: 85, label: "27" },
    { value: 85, label: "30" },
    { value: 60, label: "33" },
  ];

  return (
    <ThemedView style={[marginTopStyle.marginTopLg]}>
      <View
        style={[
          flexDirectionStyle.flexDirectionRow,
          justifyContentStyle.justifyContentCenter,
        ]}
      >
        <LineChart
          data={data}
          data2={data2}
          height={200}
          width={350}
          color={AG_PRIMARY}
          color2={AG_SUCCESS_LIGHT}
          thickness={3}
          yAxisColor={"#E5E7EB"}
          xAxisColor={"#E5E7EB"}
          xAxisLabelTextStyle={agGray600Color}
          yAxisTextStyle={agGray600Color}
          isAnimated
          hideRules
          hideDataPoints1
          hideDataPoints2
          initialSpacing={10}
          spacing={40}
          hideYAxisText={false}
          pointerConfig={{
            pointerStripHeight: 160,
            pointerStripColor: "#D1D5DB",
            pointerStripWidth: 2,

            pointerColor: "#3B82F6",
            radius: 6,
          }}
        />
      </View>
    </ThemedView>
  );
};

export default AgLineChart;
