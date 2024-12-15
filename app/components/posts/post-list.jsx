import { getAllPosts } from "@/queries/blog-data";
import React from "react";

const PostList = async () => {
  const posts = await getAllPosts();
  console.log(posts);

  const latestPost = posts[0];

  const restPosts = posts.slice(1);
  return (
    <>
      <div></div>
    </>
  );
};

export default PostList;
