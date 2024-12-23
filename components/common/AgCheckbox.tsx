import useStyles from "@/hooks/theme/useStyles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
const AgCheckBox = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: () => void;
}) => {
  const { agBgPrimaryColor, agPrimaryBorderSmRounded } = useStyles();
  return (
    <TouchableOpacity
      onPress={onValueChange}
      style={[
        styles.checkbox,
        value && agBgPrimaryColor,
        value && agPrimaryBorderSmRounded,
      ]}
    >
      {value && <Ionicons name="checkmark" size={18} color="white" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#A0A0A0",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#4A90E2",
    borderColor: "#4A90E2",
  },
});
export default AgCheckBox;
