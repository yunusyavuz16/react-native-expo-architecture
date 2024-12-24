import Widget1 from "@/components/widgets/Widget1";
import Widget2 from "@/components/widgets/Widget2";
import Widget3 from "@/components/widgets/Widget3";
import { paddingStyle } from "@/constants/Styles";
import { ScrollView } from "react-native";

const Dashboard = () => {
  return (
    <ScrollView contentContainerStyle={paddingStyle.paddingLg}>
      <Widget1 />
      <Widget2 />
      <Widget3 />
    </ScrollView>
  );
};

export default Dashboard;
