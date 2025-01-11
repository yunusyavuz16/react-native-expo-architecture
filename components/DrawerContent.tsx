import {
  alignItemsStyle,
  flexDirectionStyle,
  flexStyle,
  gapStyle,
  heightStyle,
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
import { Href, useRouter } from "expo-router";
import React, { ComponentProps, useState } from "react";
import { LayoutAnimation, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import Divider from "./Divider";
import ScreenLayout from "./screen-layout";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import LogoRowName from "./LogoRowName";

interface SidbarDataItem {
  label: string;
  link?: Href;
  icon?: ComponentProps<typeof MaterialIcons>["name"];
  items?: SidbarDataItem[];
}

const sidebarData: SidbarDataItem[] = [
  {
    label: "Apps",
    icon: "apps",
    items: [
      { label: "Social", link: "/(drawer)/(social)" },
      { label: "Entartainment", link: "/(drawer)/(entertainment)" },
    ],
  },
];

const DrawerContent = () => {
  return (
    <ScreenLayout
      style={[flexStyle.flex1, paddingStyle.paddingLg, heightStyle.height100]}
    >
      <LogoRowName />
      <Divider />
      <View style={[paddingVerticalStyle.paddingVerticalMd, flexStyle.flex1]}>
        {sidebarData.map((item, index) => (
          <SidebarItem key={index} item={item} icon={item.icon} />
        ))}
      </View>
    </ScreenLayout>
  );
};

const SidebarItem: React.FC<{
  item: SidbarDataItem;
  icon?: ComponentProps<typeof MaterialIcons>["name"];
}> = ({ item, icon }) => {
  const agGray600 = useThemeColor("agGray600");
  const { agGray900Color, agGray800Color } = useStyles();
  const [collapsed, setCollapsed] = useState(true);

  const router = useRouter();
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
          style={[
            paddingHorizontalStyle.paddingHorizontalMd,
            paddingVerticalStyle.paddingVerticalSm,
          ]}
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
          onPress={() => item.link && router.push(item.link)}
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
