// useStyles

import {
  agTextColorStyle,
  borderStyle,
  screenBackgroundStyle,
} from "@/constants/Styles";
import { useAllColors } from "./useAllColors";

const useStyles = () => {
  const {
    screenBackground,
    agGray100,
    agGray200,
    agGray400,
    agGray500,
    agGray600,
    agGray800,
    agGray900,
    agPrimary,
    agGray300,
    agGray700,
  } = useAllColors();

  return {
    screenBackground: screenBackgroundStyle(screenBackground),
    borderColor: borderStyle(agGray300).border,
    agGray100Color: agTextColorStyle(agGray100).textColor,
    agGray200Color: agTextColorStyle(agGray200).textColor,
    agGray300Color: agTextColorStyle(agGray300).textColor,
    agGray400Color: agTextColorStyle(agGray400).textColor,
    agGray500Color: agTextColorStyle(agGray500).textColor,
    agGray600Color: agTextColorStyle(agGray600).textColor,
    agGray700Color: agTextColorStyle(agGray700).textColor,
    agGray800Color: agTextColorStyle(agGray800).textColor,
    agGray900Color: agTextColorStyle(agGray900).textColor,
    agPrimaryColor: agTextColorStyle(agPrimary).textColor,
  };
};
export default useStyles;
