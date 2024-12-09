import { useAppSelector } from "@/hooks/useAppSelector";
import { usePosts } from "@/hooks/usePosts";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { ThemedView } from "../ThemedView";
import Post from "./Post";
import { postContainerStyles } from "./postContainer.styles";

const PostContainer = () => {
  const { posts } = usePosts();
  const authUser = useAppSelector((state) => state.auth.user);
  const newTimeStamp = new Date().toISOString();
  return (
    <ThemedView style={postContainerStyles.container}>
      <FlashList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <Post
            content={item.body}
            profileImage="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
            timestamp={newTimeStamp}
            username={authUser ?? ""}
          />
        )}
        estimatedItemSize={100} // Adjust this based on the average item height
      />
    </ThemedView>
  );
};

export default PostContainer;
