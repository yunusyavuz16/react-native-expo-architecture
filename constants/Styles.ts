import { StyleSheet } from "react-native";
import { Spacing } from "./Spacing";
import { Typography } from "./Typography";

export const screenBackgroundStyle = (backgroundColor: string) =>
  StyleSheet.create({
    containerBacgkround: {
      backgroundColor: backgroundColor,
    },
  });

export const borderStyle = (borderColor: string) =>
  StyleSheet.create({
    border: {
      borderColor: borderColor,
      borderWidth: 0.75,
      borderRadius: 15,
    },
  });

export const agTextColorStyle = (agGray: string) =>
  StyleSheet.create({
    textColor: {
      color: agGray,
    },
  });

export const marginStyle = StyleSheet.create({
  marginSm: {
    margin: Spacing.small,
  },
  marginMd: {
    margin: Spacing.medium,
  },
  marginLg: {
    margin: Spacing.large,
  },
  marginXl: {
    margin: Spacing.xLarge,
  },
});

export const paddingStyle = StyleSheet.create({
  paddingSm: {
    padding: Spacing.small,
  },
  paddingMd: {
    padding: Spacing.medium,
  },
  paddingLg: {
    padding: Spacing.large,
  },
  paddingXl: {
    padding: Spacing.xLarge,
  },
});

export const flexStyle = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
});

export const justifyContentStyle = StyleSheet.create({
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentStart: {
    justifyContent: "flex-start",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  justifyContentSpaceAround: {
    justifyContent: "space-around",
  },
});

export const alignItemsStyle = StyleSheet.create({
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  alignItemsStretch: {
    alignItems: "stretch",
  },
});

export const gapStyle = StyleSheet.create({
  gapSm: {
    gap: Spacing.small,
  },
  gapMd: {
    gap: Spacing.medium,
  },
  gapLg: {
    gap: Spacing.large,
  },
  gapXl: {
    gap: Spacing.xLarge,
  },
});

export const borderRadiusStyle = StyleSheet.create({
  borderRadiusSm: {
    borderRadius: Spacing.small,
  },
  borderRadiusMd: {
    borderRadius: Spacing.medium,
  },
  borderRadiusLg: {
    borderRadius: Spacing.large,
  },
  borderRadiusXl: {
    borderRadius: Spacing.xLarge,
  },
});

export const flexDirectionStyle = StyleSheet.create({
  flexDirectionRow: {
    flexDirection: "row",
  },
  flexDirectionColumn: {
    flexDirection: "column",
  },
  flexDirectionRowReverse: {
    flexDirection: "row-reverse",
  },
  flexDirectionColumnReverse: {
    flexDirection: "column-reverse",
  },
});

export const textAlignStyle = StyleSheet.create({
  textAlignCenter: {
    textAlign: "center",
  },
  textAlignLeft: {
    textAlign: "left",
  },
  textAlignRight: {
    textAlign: "right",
  },
  textAlignJustify: {
    textAlign: "justify",
  },
});

export const textFontSizeStyle = StyleSheet.create({
  textFontSizeSm: {
    fontSize: Typography.fontSizeSmall,
  },
  textFontSizeMd: {
    fontSize: Typography.fontSizeMedium,
  },
  textFontSizeLg: {
    fontSize: Typography.fontSizeLarge,
  },
  textFontSizeXl: {
    fontSize: Typography.fontSizeExtraLarge,
  },
});
