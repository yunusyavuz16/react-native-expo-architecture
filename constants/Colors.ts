/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const AG_WHITE = "#fff";

// primary
const AG_PRIMARY = "#1B84FF";
const AG_PRIMARY_DARK = "#006AE6";
const AG_BG_PRIMARY_LIGHT = "#EDF0F8";
const AG_BG_PRIMARY_DARK = "#1a1b24";

export const Colors = {
  light: {
    screenBackground: AG_BG_PRIMARY_LIGHT,
    text: "#11181C",
    background: AG_WHITE,
    tint: AG_PRIMARY,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: AG_PRIMARY,
    agLight: AG_WHITE,
    agPrimary: AG_PRIMARY,
    agGray100: "#F9F9F9",
    agGray200: "#F1F1F4",
    agGray300: "#DBDFE9",
    agGray400: "#C4CADA",
    agGray500: "#99A1B7",
    agGray600: "#78829D",
    agGray700: "#4B5675",
    agGray800: "#252F4A",
    agGray900: "#071437",
    agLightActive: "#FCFCFC",
  },
  dark: {
    screenBackground: AG_BG_PRIMARY_DARK,
    text: "#ECEDEE",
    background: "#1F212A",
    tint: AG_WHITE,
    agPrimary: AG_PRIMARY_DARK,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: AG_PRIMARY_DARK,
    agLight: "#1F212A",
    agGray100: "#1B1C22",
    agGray200: "#26272F",
    agGray300: "#363843",
    agGray400: "#464852",
    agGray500: "#636674",
    agGray600: "#808290",
    agGray700: "#9A9CAE",
    agGray800: "#B5B7C8",
    agGray900: "#F5F5F5",
    agLightActive: "#1F212A",
  },
};
