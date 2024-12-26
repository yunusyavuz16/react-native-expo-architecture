import AgHeader from "@/components/AgHeader";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { useTranslation } from "react-i18next";

const DashboardHeader = (props: BottomTabHeaderProps) => {
  const { t } = useTranslation();
  return (
    <AgHeader>
      <AgHeader.Left
        iconName="menu"
        onPress={() => {
          // @ts-ignore
          props.navigation.openDrawer();
        }}
      />
      <AgHeader.Title title={t("feed")} center={true} />
      <AgHeader.Right
        icons={[
          {
            name: "search",
            onPress: () => props.navigation.navigate("search"),
          },
        ]}
      />
    </AgHeader>
  );
};

export default DashboardHeader;
