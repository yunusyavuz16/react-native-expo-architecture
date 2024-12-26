import DrawerContent from "@/components/DrawerContent";
import { flexStyle } from "@/constants/Styles";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={flexStyle.flex1}>
      <Drawer drawerContent={DrawerContent}>
        <Drawer.Screen
          options={{ headerShown: false }}
          name="(tabs)" // This is the name of the page and must match the url from root
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
