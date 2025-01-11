import { marginTopStyle } from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { BarChart } from "react-native-gifted-charts";
import { ThemedView } from "../ThemedView";

const AgBarChart = () => {
  const { agGray600Color } = useStyles();

  const data = [
    { value: 120, label: "Mon" },
    { value: 150, label: "Tue" },
    { value: 90, label: "Wed" },
    { value: 110, label: "Thu" },
    { value: 130, label: "Fri" },
  ];

  return (
    <ThemedView style={[marginTopStyle.marginTopLg]}>
      <BarChart
        data={data}
        height={200}
        width={250}
        barWidth={30}
        spacing={40}
        roundedTop
        barBorderRadius={5}
        hideRules
        xAxisLabelTextStyle={agGray600Color}
        yAxisTextStyle={agGray600Color}
        isAnimated
      />
    </ThemedView>
  );
};

export default AgBarChart;
