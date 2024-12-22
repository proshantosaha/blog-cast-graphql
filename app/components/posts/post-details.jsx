import { getFormattedDate } from "@/utils";
import Image from "next/image";
import React from "react";

const PostDetailsPage = ({ post }) => {
  return (
    <article className="bg-white pt-3 mt-3 flex flex-col justify-center items-center">
      <Image
        className="rounded-lg"
        width={500}
        height={500}
        alt={post?.title}
        src={post?.coverImage?.url}
      />
      <h1 className="text-4xl font-bold pt-5">{post?.title}</h1>
      <h2 className="text-xl  pt-3 pb-3">{post?.subtitle}</h2>

      <div
        className="post-details"
        dangerouslySetInnerHTML={{ __html: post?.content?.html }}
      ></div>
    </article>
  );
};

export default PostDetailsPage;
