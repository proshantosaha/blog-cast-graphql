import PostDetailsPage from "@/app/components/posts/post-details";
import { getPost } from "@/queries/blog-data";
import React from "react";

const BlogDetailsPage = async ({ params: { slug } }) => {
  const post = await getPost(slug);
  return <PostDetailsPage post={post} />;
};

export default BlogDetailsPage;
