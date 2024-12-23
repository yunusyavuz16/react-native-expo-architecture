import React, { memo, PropsWithChildren } from "react";
import { ThemedView } from "../ThemedView";
import { styles } from "./index.styles";
import useStyles from "@/hooks/theme/useStyles";

const ScreenLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const backgroundStyle = useStyles().screenBackground;
  return (
    <ThemedView
      style={[styles.flexContainer, backgroundStyle.containerBacgkround]}
    >
      {children}
    </ThemedView>
  );
};

export default memo(ScreenLayout);
