// useStyles

import { screenBackgroundStyle } from "@/constants/Styles";
import { useAllColors } from "./useAllColors";

const useStyles = () => {
  const screenBackground = useAllColors().screenBackground;

  return {
    screenBackground: screenBackgroundStyle(screenBackground),
  };
};
export default useStyles;
