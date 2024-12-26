import {
    borderBottomWidthStyle,
    borderStyleStyle,
    borderWidthStyle
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import React, { ComponentProps } from "react";
import { View } from "react-native";

const Divider: React.FC<
  {
    dividerType?: "dash" | "solid";
  } & ComponentProps<typeof View>
> = ({ dividerType, style, ...otherProps }) => {
  const { agBorderGray300Style } = useStyles();
  return (
    <View
      {...otherProps}
      style={[
        agBorderGray300Style,
        borderWidthStyle.boderWidth0,
        borderBottomWidthStyle.borderBottom,
        dividerType === "dash"
          ? borderStyleStyle.borderStyleDashed
          : borderStyleStyle.borderStyleSolid,

        style,
      ]}
    />
  );
};

export default Divider;
