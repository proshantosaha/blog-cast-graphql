import { getFormattedDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {" "}
      <Link href={`/blog/${post?.slug}`}>
        <Image
          className="bject-cover w-full h-auto"
          width={500}
          height={500}
          alt={post?.title}
          src={post?.coverImage?.url}
        />
        <h3 className="text-xl font-semibold p-4">{post?.title}</h3>
        <p className="text-gray-500 p-4">
          posted on {getFormattedDate(post?.publishedAt)}
        </p>
        <p className="mt-2 text-gray-700 p-4">{post?.brief}</p>
      </Link>
    </div>
  );
};

export default PostCard;
