import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { flexStyle } from "@/constants/Styles";
import { ThemedView } from "@/components/ThemedView";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Text } from "react-native";

export default function Layout() {
  return (
    <GestureHandlerRootView style={flexStyle.flex1}>
      <Drawer drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          options={{ headerShown: false }}
          name="(tabs)" // This is the name of the page and must match the url from root
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const DrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  return (
    <ThemedView style={flexStyle.flex1}>
      <Text>Sa</Text>
    </ThemedView>
  );
};
