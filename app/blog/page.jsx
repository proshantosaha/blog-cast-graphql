import React from "react";
import PostList from "../components/posts/post-list";
import { getAllPosts } from "@/queries/blog-data";

const BlogPost = async () => {
  const posts = await getAllPosts();
  return <PostList posts={posts} />;
};

export default BlogPost;
