import { borderRadiusStyle, flexStyle, widthStyle } from "@/constants/Styles";
import { ThemedView } from "./ThemedView";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import useStyles from "@/hooks/theme/useStyles";

interface ProgressBarProps {
  progress: number;
  progressContainerStyle?: StyleProp<ViewStyle>;
  progressIndicatorStyle?: StyleProp<ViewStyle>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  progressContainerStyle,
  progressIndicatorStyle,
}) => {
  const { agBgGray400Style, agBgGray200Style } = useStyles();
  return (
    <ThemedView style={[borderRadiusStyle.borderRadiusMd, flexStyle.flex1]}>
      <ThemedView
        style={[
          widthStyle.width100,
          agBgGray400Style,
          borderRadiusStyle.borderRadiusLg,
          progressContainerStyle,
        ]}
      >
        <ThemedView
          style={[
            widthStyle.width100,
            styles.height10,
            agBgGray200Style,
            borderRadiusStyle.borderRadiusLg,
            progressIndicatorStyle,

            { width: `${progress}%` },
          ]}
        />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  height10: {
    height: 10,
  },
});

export { ProgressBar };
