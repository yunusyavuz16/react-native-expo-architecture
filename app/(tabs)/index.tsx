//app/(tabs)/index.tsx

import PostContainer from "@/components/post/PostContainer";
import ScreenLayout from "@/components/screenLayout";

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <PostContainer />
    </ScreenLayout>
  );
}
