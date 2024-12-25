import { borderRadiusStyle } from "@/constants/Styles";
import { useAllColors } from "@/hooks/theme/useAllColors";
import useStyles from "@/hooks/theme/useStyles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import DropDownPicker, {
  DropDownPickerProps,
} from "react-native-dropdown-picker";

type SetStateCallback<T> = (value: T) => T;

export default function AgDropdown<T>({
  open,
  ...otherProps
}: {
  setValue: (callback: SetStateCallback<T>) => void;
  value: any;
  items: any;
} & DropDownPickerProps<T>) {
  const { agBorderPrimaryStyle } = useStyles();
  const { background, text } = useAllColors();
  return (
    <DropDownPicker
      open={open}
      arrowIconStyle={{ display: "none" }}
      tickIconContainerStyle={{ display: "none" }}
      textStyle={{ color: text, textAlign: "center" }}
      dropDownContainerStyle={[
        styles.dropdown,
        agBorderPrimaryStyle,
        borderRadiusStyle.borderRadiusMd,
        { backgroundColor: background },
      ]}
      style={[styles.dropdown, { backgroundColor: background }]}
      {...otherProps}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  dropdown: {
    justifyContent: "flex-end",
    alignContent: "flex-end",
    borderWidth: 0,
    width: 104,
  },
});
