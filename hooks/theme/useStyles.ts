// useStyles

import { borderStyle, screenBackgroundStyle } from "@/constants/Styles";
import { useAllColors } from "./useAllColors";

const useStyles = () => {
  const { screenBackground, agGray300 } = useAllColors();

  return {
    screenBackground: screenBackgroundStyle(screenBackground),
    borderColor: borderStyle(agGray300).border,
  };
};
export default useStyles;
