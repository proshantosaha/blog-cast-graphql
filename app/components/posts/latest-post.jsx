import React from "react";

const LatestPost = ({ post }) => {
  return (
    <article className="mt-4">
      <h3>{post?.title}</h3>
      <p>posted on {post?.publishedAt}</p>
    </article>
  );
};

export default LatestPost;
