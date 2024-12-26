import useStyles from "@/hooks/theme/useStyles";
import React, { memo } from "react";
import { ViewProps } from "react-native";
import { ThemedView } from "../ThemedView";
import { styles } from "./index.styles";

const ScreenLayout: React.FC<ViewProps> = (props) => {
  const backgroundStyle = useStyles().screenBgStyle;
  return (
    <ThemedView
      style={[styles.flexContainer, backgroundStyle]}
      {...props}
    />
  );
};

export default memo(ScreenLayout);
