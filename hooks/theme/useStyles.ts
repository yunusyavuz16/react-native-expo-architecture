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
    agLightActive,
    textLight,
    agDanger,
  } = useAllColors();

  return {
    screenBackground: screenBackgroundStyle(screenBackground),
    agLightActive: screenBackgroundStyle(agLightActive).containerBacgkround,
    agBgPrimaryColor: screenBackgroundStyle(agPrimary).containerBacgkround,
    agBgGray100Style: screenBackgroundStyle(agGray100).containerBacgkround,
    agBgGray200Style: screenBackgroundStyle(agGray200).containerBacgkround,
    agBgGray300Style: screenBackgroundStyle(agGray300).containerBacgkround,
    agBgGray400Style: screenBackgroundStyle(agGray400).containerBacgkround,
    agBgGray500Style: screenBackgroundStyle(agGray500).containerBacgkround,
    agBgGray600Style: screenBackgroundStyle(agGray600).containerBacgkround,
    agBgGray700Style: screenBackgroundStyle(agGray700).containerBacgkround,
    agBgGray800Style: screenBackgroundStyle(agGray800).containerBacgkround,
    agBgGray900Style: screenBackgroundStyle(agGray900).containerBacgkround,
    borderColor: borderStyle(agGray300).border,

    ag600BorderColor: borderStyle(agGray600).border,
    agPrimaryBorderColor: borderStyle(agPrimary).border,
    agPrimaryBorderSmRounded: borderStyle(agPrimary).borderSmRounded,
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
    agBgDangerStyle: screenBackgroundStyle(agDanger).containerBacgkround,
    agTextLightStyle: agTextColorStyle(textLight).textColor,
  };
};
export default useStyles;
