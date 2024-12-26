import {
  alignItemsStyle,
  flexDirectionStyle,
  flexStyle,
  heightStyle,
  justifyContentStyle,
  paddingHorizontalStyle,
  paddingStyle,
  textFontSizeStyle,
  textFontWeightStyle,
} from "@/constants/Styles";
import { MaterialIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useThemeColor } from "@/hooks/theme/useThemeColor";

interface HeaderProps {
  children: ReactNode;
  containerStyle?: ViewStyle;
}

const AgHeader: React.FC<HeaderProps> & {
  Left: typeof Left;
  Title: typeof Title;
  Right: typeof Right;
} = ({ children, containerStyle }) => {
  return (
    <ThemedView
      style={[
        justifyContentStyle.justifyContentSpaceBetween,
        heightStyle.constHeight50,
        flexDirectionStyle.flexDirectionRow,
        alignItemsStyle.alignItemsCenter,
        paddingHorizontalStyle.paddingHorizontalLg,
        containerStyle,
      ]}
    >
      {children}
    </ThemedView>
  );
};

// Left Section
interface LeftProps {
  iconName?: React.ComponentProps<typeof MaterialIcons>["name"];
  onPress?: () => void;
  iconSize?: number;
  iconColor?: string;
}

const Left: React.FC<LeftProps> = ({
  iconName = "arrow-back",
  onPress,
  iconSize = 24,
  iconColor,
}) => {
  const text = useThemeColor("text");
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[justifyContentStyle.justifyContentCenter, paddingStyle.paddingMd]}
    >
      <MaterialIcons
        name={iconName}
        size={iconSize}
        color={iconColor ?? text}
      />
    </TouchableOpacity>
  );
};

// Title Section
interface TitleProps {
  title: string;
  titleStyle?: TextStyle;
  center?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, titleStyle, center = true }) => {
  return (
    <View
      style={[
        flexStyle.flex1,
        justifyContentStyle.justifyContentCenter,
        center
          ? alignItemsStyle.alignItemsCenter
          : alignItemsStyle.alignItemsStart,
      ]}
    >
      <ThemedText
        style={[
          textFontSizeStyle.textFontSizeLg,
          textFontWeightStyle.textFontWeightBold,
          titleStyle,
        ]}
      >
        {title}
      </ThemedText>
    </View>
  );
};

// Right Section (up to 3 icons)
interface RightProps {
  icons?: {
    name?: React.ComponentProps<typeof MaterialIcons>["name"];
    onPress?: () => void;
    size?: number;
    color?: string;
    component?: React.ReactNode;
  }[];
}

const Right: React.FC<RightProps> = ({ icons = [] }) => {
  const text = useThemeColor("text");
  return (
    <View
      style={[
        flexDirectionStyle.flexDirectionRow,
        alignItemsStyle.alignItemsCenter,
      ]}
    >
      {icons.slice(0, 3).map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={icon.onPress}
          style={[
            justifyContentStyle.justifyContentCenter,
            paddingStyle.paddingMd,
          ]}
        >
          {icon.component ? (
            icon.component
          ) : (
            <MaterialIcons
              name={icon.name}
              size={icon.size || 24}
              color={icon.color || text}
            />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Attach compound parts to the main component
AgHeader.Left = Left;
AgHeader.Title = Title;
AgHeader.Right = Right;

export default AgHeader;
