import {
  alignItemsStyle,
  flexDirectionStyle,
  gapStyle,
  justifyContentStyle,
  paddingStyle,
  textFontSizeStyle
} from "@/constants/Styles";
import useStyles from "@/hooks/theme/useStyles";
import { useThemeColor } from "@/hooks/theme/useThemeColor";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { LayoutAnimation, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useTranslation } from "react-i18next";

const AgAccordion: React.FC<{}> = () => {
  const agGray600 = useThemeColor("agGray600");
  const { agGray900Color } = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    // make component animated
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCollapsed(!collapsed);
  };

  return (
    <ThemedView>
      <TouchableOpacity
        style={[
          flexDirectionStyle.flexDirectionRow,
          alignItemsStyle.alignItemsCenter,
          justifyContentStyle.justifyContentSpaceBetween,
        ]}
        onPress={toggleCollapse}
      >
        <View style={[flexDirectionStyle.flexDirectionRow, gapStyle.gapSm]}>
          <MaterialIcons name="dashboard" color={agGray600} size={24} />
          <ThemedText
            style={[textFontSizeStyle.textFontSizeLg, agGray900Color]}
          >
            {t("dashboard")}
          </ThemedText>
        </View>
        <MaterialIcons
          name={collapsed ? "keyboard-arrow-down" : "keyboard-arrow-up"}
          size={24}
          color={agGray600}
        />
      </TouchableOpacity>

      <Collapsible collapsed={collapsed} style={[paddingStyle.paddingMd]}>
        <TouchableOpacity onPress={() => {}}>
          {/* put point dot to start of text */}
          <ThemedText style={[textFontSizeStyle.textFontSizeMd]}>
            • {t("default")}
          </ThemedText>
        </TouchableOpacity>
      </Collapsible>
    </ThemedView>
  );
};

export default AgAccordion;
