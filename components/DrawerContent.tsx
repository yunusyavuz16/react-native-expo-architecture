import {
  alignItemsStyle,
  flexDirectionStyle,
  flexStyle,
  gapStyle,
  justifyContentStyle,
  marginTopStyle,
  paddingHorizontalStyle,
  paddingStyle,
  paddingVerticalStyle,
  textFontSizeStyle,
  textFontWeightStyle,
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import React, { ComponentProps, useState } from "react";
import {
  LayoutAnimation,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Collapsible from "react-native-collapsible";
import Divider from "./Divider";
import ScreenLayout from "./screen-layout";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface SidbarDataItem {
  label: string;
  link?: string;
  icon?: ComponentProps<typeof MaterialIcons>["name"];
  items?: SidbarDataItem[];
}

const sidebarData: SidbarDataItem[] = [
  {
    label: "Dashboards",
    icon: "dashboard",
    items: [
      { label: "Default", link: "dashboard", icon: "dashboard" },
      { label: "eCommerce", link: "dashboard" },
      { label: "Project", link: "dashboard" },
      { label: "Marketinng", link: "dashboard" },
      { label: "Bidding", link: "dashboard" },
      { label: "POS System", link: "dashboard" },
      { label: "Call Center", link: "dashboard" },
      { label: "Logistics", link: "dashboard" },
      { label: "Web Site Analytic", link: "dashboard" },
      { label: "Finance Performance", link: "dashboard" },
      { label: "Store Analytics", link: "dashboard" },
      { label: "Social", link: "dashboard" },
      { label: "Delivery", link: "dashboard" },
      { label: "Crypto", link: "dashboard" },
      { label: "School", link: "dashboard" },
      { label: "Podast", link: "dashboard" },
      { label: "Landing", link: "dashboard" },
    ],
  },
];

const DrawerContent: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const agGray600 = useThemeColor("agGray600");

  return (
    <ScrollView style={[flexStyle.flex1, { maxHeight: "100%" }]}>
      <ScreenLayout style={[flexStyle.flex1, paddingStyle.paddingLg]}>
        {/* App Logo */}
        <View
          style={[
            flexDirectionStyle.flexDirectionRow,
            paddingVerticalStyle.paddingVerticalMd,
            alignItemsStyle.alignItemsCenter,
          ]}
        >
          <MaterialIcons color={agGray600} name="dashboard" size={48} />
          <View style={paddingStyle.paddingMd}>
            <ThemedText
              style={[
                textFontSizeStyle.textFontSizeXl,
                textFontWeightStyle.textFontWeightBold,
              ]}
            >
              App Name
            </ThemedText>
          </View>
        </View>
        <Divider />
        <View style={[paddingVerticalStyle.paddingVerticalMd, flexStyle.flex1]}>
          {sidebarData.map((item, index) => (
            <SidebarItem key={index} item={item} icon={item.icon} />
          ))}
        </View>
      </ScreenLayout>
    </ScrollView>
  );
};

const SidebarItem: React.FC<{
  item: SidbarDataItem;
  icon?: ComponentProps<typeof MaterialIcons>["name"];
}> = ({ item, icon }) => {
  const navigation = useNavigation();
  const agGray600 = useThemeColor("agGray600");
  const { agGray900Color, agGray800Color } = useStyles();
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(!collapsed);
  };

  return (
    <ThemedView>
      {item.items && (
        <TouchableOpacity
          style={[
            flexDirectionStyle.flexDirectionRow,
            alignItemsStyle.alignItemsCenter,
            justifyContentStyle.justifyContentSpaceBetween,
            marginTopStyle.marginTopMd,
          ]}
          onPress={item.items ? toggleCollapse : () => {}}
        >
          <View style={[flexDirectionStyle.flexDirectionRow, gapStyle.gapSm]}>
            <MaterialIcons name={icon} color={agGray600} size={24} />
            <ThemedText
              style={[
                textFontSizeStyle.textFontSizeLg,
                agGray900Color,
                textFontWeightStyle.textFontWeight500,
              ]}
            >
              {item.label}
            </ThemedText>
          </View>
          {item.items && (
            <MaterialIcons
              name={collapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"}
              size={24}
              color={agGray600}
            />
          )}
        </TouchableOpacity>
      )}

      {item.items && (
        <Collapsible
          collapsed={collapsed}
          style={[paddingHorizontalStyle.paddingHorizontalMd]}
        >
          {item.items.map((subItem, index) => (
            <SidebarItem key={index} item={subItem} icon={subItem.icon} />
          ))}
        </Collapsible>
      )}

      {!item.items && (
        <TouchableOpacity
          style={[
            paddingHorizontalStyle.paddingHorizontalMd,
            paddingVerticalStyle.paddingVerticalSm,
          ]}
          onPress={() => navigation.navigate(item.link as never)}
        >
          <ThemedText
            style={[
              textFontSizeStyle.textFontSizeMd,
              agGray800Color,
              textFontWeightStyle.textFontWeightNormal,
            ]}
          >
            • {item.label}
          </ThemedText>
        </TouchableOpacity>
      )}
    </ThemedView>
  );
};

export default DrawerContent;
