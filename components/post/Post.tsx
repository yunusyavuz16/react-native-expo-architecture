import { MaterialIcons } from "@expo/vector-icons";
import React, { memo, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { postStyles } from "./post.styles";
import { PostProps } from "./post.types";

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity style={postStyles.actionButton} onPress={handleLike}>
      <MaterialIcons
        name={liked ? "favorite" : "favorite-border"}
        size={24}
        color={liked ? "red" : "gray"}
      />
      <Text style={liked ? postStyles.likedText : postStyles.actionText}>
        {liked ? "Liked" : "Like"}
      </Text>
    </TouchableOpacity>
  );
};

function FooterSection() {
  return (
    <View style={postStyles.footer}>
      <LikeButton />

      <TouchableOpacity style={postStyles.actionButton}>
        <MaterialIcons name="comment" size={24} color="gray" />
        <Text style={postStyles.actionText}>Comment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={postStyles.actionButton}>
        <MaterialIcons name="share" size={24} color="gray" />
        <Text style={postStyles.actionText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const Post: React.FC<PostProps> = ({
  profileImage,
  username,
  timestamp,
  content,
  image,
}) => {
  return (
    <View style={postStyles.container}>
      {/* Header Section */}
      <View style={postStyles.header}>
        <Image source={{ uri: profileImage }} style={postStyles.profileImage} />
        <View style={postStyles.headerInfo}>
          <Text style={postStyles.username}>{username}</Text>
          <Text style={postStyles.timestamp}>{timestamp}</Text>
        </View>
      </View>

      {/* Content Section */}
      <Text style={postStyles.content}>{content}</Text>
      {image && <Image source={{ uri: image }} style={postStyles.postImage} />}

      {/* Footer Section */}
      <FooterSection />
    </View>
  );
};

export default memo(Post);
