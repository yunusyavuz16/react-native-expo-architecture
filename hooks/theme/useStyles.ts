// useStyles

import { screenBackgroundStyle } from "@/constants/Styles";
import { useColor } from "./useColors";

const useStyles = () => {
  const screenBackground = useColor().screenBackground;

  return {
    screenBackground: screenBackgroundStyle(screenBackground),
  };
};
export default useStyles;
