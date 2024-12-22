import { getPost } from "@/queries/blog-data";
import React from "react";

const BlogDetailsPage = async ({ param: { slug } }) => {
  const post = await getPost(slug);
  return <div>BlogDetailsPage</div>;
};

export default BlogDetailsPage;
