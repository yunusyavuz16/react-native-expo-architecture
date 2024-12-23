import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import headerStyles from "./index.styles";

const PostHeaderComponent: React.FC<{
  onSearchPress: () => void;
  onNotificationPress: () => void;
  title: string;
}> = ({ onSearchPress, onNotificationPress, title }) => {
  return (
    <View style={headerStyles.headerContainer}>
      <Text style={headerStyles.title}>{title}</Text>
      <View style={headerStyles.iconContainer}>
        <TouchableOpacity
          onPress={onSearchPress}
          style={headerStyles.iconButton}
        >
          <MaterialIcons name="search" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onNotificationPress}
          style={headerStyles.iconButton}
        >
          <MaterialIcons name="notifications" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostHeaderComponent;
