import React, { PropsWithChildren } from "react";
import { ThemedView } from "../ThemedView";
import { styles } from "./index.styles";

const ScreenLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemedView style={styles.flexContainer}>{children}</ThemedView>;
};

export default ScreenLayout;
