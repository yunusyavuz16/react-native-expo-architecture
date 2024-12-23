import React, { memo, PropsWithChildren } from "react";
import { ThemedView } from "../ThemedView";
import { styles } from "./index.styles";
import useStyles from "@/hooks/theme/useStyles";
import { ViewProps } from "react-native";

const ScreenLayout: React.FC<ViewProps> = (props) => {
  const backgroundStyle = useStyles().screenBackground;
  return (
    <ThemedView
      style={[styles.flexContainer, backgroundStyle.containerBacgkround]}
      {...props}
    />
  );
};

export default memo(ScreenLayout);
