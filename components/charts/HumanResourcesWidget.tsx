import { marginTopStyle } from "@/constants/Styles";
import { Card } from "../card";
import { ThemedText } from "../ThemedText";
import AgBarChart from "./AgBarChart";

// Human Resources Widget
const HumanResourcesWidget = () => {
  return (
    <Card containerStyle={[marginTopStyle.marginTopLg]}>
      <ThemedText>Human Resources</ThemedText>
      <AgBarChart />
    </Card>
  );
};

export default HumanResourcesWidget;
