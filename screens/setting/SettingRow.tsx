import { ThemedView } from "@/components/ThemedView";
import {
  alignItemsStyle,
  borderRadiusStyle,
  flexDirectionStyle,
  justifyContentStyle,
  paddingHorizontalStyle
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import React from "react";
import { StyleSheet, ViewProps } from "react-native";

const SettingRow: React.FC<ViewProps> = ({ style, ...otherProps }) => {
  const borderColorStyle = useStyles().agBorderGray300Style;
  return (
    <ThemedView
      style={[
        flexDirectionStyle.flexDirectionRow,
        alignItemsStyle.alignItemsCenter,
        justifyContentStyle.justifyContentSpaceBetween,
        borderRadiusStyle.borderRadiusLg,
        borderColorStyle,
        styles.container,
        paddingHorizontalStyle.paddingHorizontalLg,
        style,
      ]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
});

export default SettingRow;
