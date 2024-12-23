/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorDark = "#fff";

const AG_PRIMARY = "#1B84FF";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: AG_PRIMARY,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: AG_PRIMARY,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: AG_PRIMARY,
  },
};

export const ConstantColors = {
  primary: "rgb(85,124,230)",
  white: "#fff",
};
