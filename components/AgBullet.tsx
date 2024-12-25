import useStyles from "@/hooks/theme/useStyles";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

const AgBullet: React.FC<{
  style?: StyleProp<ViewStyle>;
}> = ({ style }) => {
  const { agBgSuccessStyle } = useStyles();
  return <View style={[stlyes.size, agBgSuccessStyle, style]} />;
};

const stlyes = StyleSheet.create({
  size: {
    height: 4,
    width: 8,
    borderRadius: 4,
  },
});

export default AgBullet;
