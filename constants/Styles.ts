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
    borderSmRounded: {
      borderRadius: 5,

      borderColor: borderColor,
      borderWidth: 0.75,
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

export const marginBottomStyle = StyleSheet.create({
  marginBottomSm: {
    marginBottom: Spacing.small,
  },
  marginBottomMd: {
    marginBottom: Spacing.medium,
  },
  marginBottomLg: {
    marginBottom: Spacing.large,
  },
  marginBottomXl: {
    marginBottom: Spacing.xLarge,
  },
});

export const marginTopStyle = StyleSheet.create({
  marginTopSm: {
    marginTop: Spacing.small,
  },
  marginTopMd: {
    marginTop: Spacing.medium,
  },
  marginTopLg: {
    marginTop: Spacing.large,
  },
  marginTopXl: {
    marginTop: Spacing.xLarge,
  },
});

export const marginLeftStyle = StyleSheet.create({
  marginLeftSm: {
    marginLeft: Spacing.small,
  },
  marginLeftMd: {
    marginLeft: Spacing.medium,
  },
  marginLeftLg: {
    marginLeft: Spacing.large,
  },
  marginLeftXl: {
    marginLeft: Spacing.xLarge,
  },
});

export const marginRightStyle = StyleSheet.create({
  marginRightSm: {
    marginRight: Spacing.small,
  },
  marginRightMd: {
    marginRight: Spacing.medium,
  },
  marginRightLg: {
    marginRight: Spacing.large,
  },
  marginRightXl: {
    marginRight: Spacing.xLarge,
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

export const paddingHorizontalStyle = StyleSheet.create({
  paddingHorizontalSm: {
    paddingHorizontal: Spacing.small,
  },
  paddingHorizontalMd: {
    paddingHorizontal: Spacing.medium,
  },
  paddingHorizontalLg: {
    paddingHorizontal: Spacing.large,
  },
  paddingHorizontalXl: {
    paddingHorizontal: Spacing.xLarge,
  },
});

export const paddingVerticalStyle = StyleSheet.create({
  paddingVerticalSm: {
    paddingVertical: Spacing.small,
  },
  paddingVerticalMd: {
    paddingVertical: Spacing.medium,
  },
  paddingVerticalLg: {
    paddingVertical: Spacing.large,
  },
  paddingVerticalXl: {
    paddingVertical: Spacing.xLarge,
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
  textFontSizeXmd: {
    fontSize: Typography.fontSizeSmallMedium,
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

export const textFontWeightStyle = StyleSheet.create({
  textFontWeightBold: {
    fontWeight: "bold",
  },
  textFontWeight500: {
    fontWeight: "500",
  },
  textFontWeightNormal: {
    fontWeight: "normal",
  },
  textFontWeightLight: {
    fontWeight: "light",
  },
});

export const widthStyle = StyleSheet.create({
  width100: {
    width: "100%",
  },
  width50: {
    width: "50%",
  },
  width25: {
    width: "25%",
  },
  width75: {
    width: "75%",
  },
  constWidth25: {
    width: 25,
  },
  constWidth50: {
    width: 50,
  },
  constWidth75: {
    width: 75,
  },
  constWidth100: {
    width: 100,
  },
});

export const heightStyle = StyleSheet.create({
  height100: {
    height: "100%",
  },
  height50: {
    height: "50%",
  },
  height25: {
    height: "25%",
  },
  height75: {
    height: "75%",
  },
  constHeight25: {
    height: 25,
  },
  constHeight50: {
    height: 50,
  },
  constHeight75: {
    height: 75,
  },
  constHeight100: {
    height: 100,
  },
});

export const positionStyle = StyleSheet.create({
  positionRelative: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
  positionFixed: {
    position: "fixed",
  },
  positionSticky: {
    position: "sticky",
  },
});
