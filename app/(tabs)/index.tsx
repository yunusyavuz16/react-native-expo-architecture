//app/(tabs)/index.tsx

import PostContainer from "@/components/post/PostContainer";
import PostHeaderComponent from "@/components/post-header";
import ScreenLayout from "@/components/screen-layout";

export default function HomeScreen() {
  const onNotificationPress = () => {
    console.log("Notification Pressed");
  };
  const onSearchPress = () => {
    console.log("Search Pressed");
  };

  return (
    <>
      <PostHeaderComponent
        onNotificationPress={onNotificationPress}
        onSearchPress={onSearchPress}
        title="Posts"
      />

      <ScreenLayout>
        <PostContainer />
      </ScreenLayout>
    </>
  );
}
