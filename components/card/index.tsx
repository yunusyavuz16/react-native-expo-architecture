import {
  borderRadiusStyle,
  marginBottomStyle,
  paddingStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { PropsWithChildren } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ThemedView } from "../ThemedView";

const Card: React.FC<
  {
    containerStyle?: StyleProp<ViewStyle>;
  } & PropsWithChildren
> = ({ containerStyle, children }) => {
  const { agBorderGray300Style } = useStyles();
  return (
    <ThemedView
      style={[
        borderRadiusStyle.borderRadiusLg,
        paddingStyle.paddingLg,
        agBorderGray300Style,
        containerStyle,
      ]}
    >
      {children}
    </ThemedView>
  );
};

export { Card };
