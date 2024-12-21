import Image from "next/image";
import React from "react";

const LatestPost = ({ post }) => {
  return (
    <article className="mt-4">
      <h3 className="text-xl font-semibold">{post?.title}</h3>
      <p className="text-gray-500">posted on {post?.publishedAt}</p>
      <Image
        className="mt-4 object-cover rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:2-1/3"
        width={500}
        height={500}
        alt={post?.title}
        src={post?.coverImage?.url}
      />

      <p className="mt-4 text-gray-700">{post?.breif}</p>
    </article>
  );
};

export default LatestPost;
