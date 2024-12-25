import {
  alignItemsStyle,
  flexDirectionStyle,
  gapStyle,
  justifyContentStyle,
  paddingStyle,
} from "@/constants/Styles";
import { useAllColors } from "@/hooks/theme/useAllColors";
import useStyles from "@/hooks/theme/useStyles";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

function EasyLogin({
  buttonText,
  logo,
}: {
  buttonText: string;
  logo: "google" | "apple";
}) {
  const { agBorderGray300Style } = useStyles();
  const { text } = useAllColors();

  return (
    <TouchableOpacity
      style={[
        agBorderGray300Style,
        paddingStyle.paddingMd,
        flexDirectionStyle.flexDirectionRow,
        justifyContentStyle.justifyContentCenter,
        alignItemsStyle.alignItemsCenter,
        gapStyle.gapSm,
      ]}
    >
      <View>
        <Ionicons
          name={logo === "apple" ? "logo-apple" : "logo-google"}
          size={24}
          color={text}
        />
      </View>
      <ThemedText>{buttonText}</ThemedText>
    </TouchableOpacity>
  );
}

export default EasyLogin;
