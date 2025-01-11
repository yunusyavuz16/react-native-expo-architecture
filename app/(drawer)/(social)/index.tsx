//app/(tabs)/index.tsx

import ScreenLayout from "@/components/screen-layout";
import Dashboard from "@/screens/dashboard/Dashboard";
import React from "react";

const index = () => {
  return (
    <ScreenLayout>
      <Dashboard />
    </ScreenLayout>
  );
};

export default index;
