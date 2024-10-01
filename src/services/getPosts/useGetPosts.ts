import { useQuery } from "@tanstack/react-query";
import { postService } from "./postService";
import { Post } from "./post.types";

export const useGetPosts = () => {
  const query = useQuery<Array<Post>>({
    queryKey: ["getPosts"],
    queryFn: postService,
  });

  return { ...query };
};
