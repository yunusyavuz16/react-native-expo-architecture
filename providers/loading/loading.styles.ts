import { StyleSheet } from "react-native";

const loaadingProviderStyles = StyleSheet.create({
  flexContainer: { flex: 1 },
  absoluteLoadingContainerWithScreenSizes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    elevation: 99,
    position: "absolute",
    backgroundColor: "black",
    opacity: 0.5,
  },
});

export default loaadingProviderStyles;
