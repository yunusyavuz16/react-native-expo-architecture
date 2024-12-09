import { getPosts } from "@/api/post";
import { setLoadingActivityIndicator } from "@/store/slices/loadingSlice";
import { Post } from "@/types/post.types";
import { delay } from "@/utils/delay";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const usePosts = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string>("");

  const getLocalPosts = async () => {
    dispatch(setLoadingActivityIndicator(true));
    const data = await getPosts();
    await delay(1000)
    if (!data.isSuccessful || !data.response) {
      dispatch(setLoadingActivityIndicator(false));
      setError(error);
      return;
    }
    setPosts(data.response);
    dispatch(setLoadingActivityIndicator(false));
  };

  useEffect(() => {
    getLocalPosts();
  }, []);

  return { posts, error, getPosts };
};
