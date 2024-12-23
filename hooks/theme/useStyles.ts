// useStyles

import {
  agGray700Style,
  borderStyle,
  screenBackgroundStyle,
} from "@/constants/Styles";
import { useAllColors } from "./useAllColors";

const useStyles = () => {
  const { screenBackground, agGray300, agGray700 } = useAllColors();

  return {
    screenBackground: screenBackgroundStyle(screenBackground),
    borderColor: borderStyle(agGray300).border,
    agGray700Color: agGray700Style(agGray700).agGray700Color,
  };
};
export default useStyles;
