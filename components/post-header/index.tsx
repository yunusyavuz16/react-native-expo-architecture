import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import headerStyles from "./index.styles";

const PostHeaderComponent: React.FC<{
  onSearchPress: () => void;
  onNotificationPress: () => void;
  title: string;
}> = ({ onSearchPress, onNotificationPress, title }) => {
  const text = useThemeColor("text");
  return (
    <ThemedView style={headerStyles.headerContainer}>
      <ThemedText style={headerStyles.title}>{title}</ThemedText>
      <View style={headerStyles.iconContainer}>
        <TouchableOpacity
          onPress={onSearchPress}
          style={headerStyles.iconButton}
        >
          <MaterialIcons name="search" size={24} color={text} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onNotificationPress}
          style={headerStyles.iconButton}
        >
          <MaterialIcons name="notifications" size={24} color={text} />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

export default PostHeaderComponent;
