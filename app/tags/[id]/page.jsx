import PostList from "@/app/components/posts/post-list";
import { getAllPosts } from "@/queries/blog-data";
import Link from "next/link";

const PostByTagPage = async ({ params: { id } }) => {
  const posts = await getAllPosts([id]);

  const tags = posts[0].node.tags;

  const foundTag = tags.find((tag) => tag.id === id);

  return (
    <div className="flex flex-col">
      <div className=" flex pt-0 pl-4 mb-8 text-2xl">
        <p>
          {posts.length} posts found for the tag {foundTag.name}
        </p>
        <span className="mr-2">|</span>
        <Link href="/blog" className="underline">
          See all post
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default PostByTagPage;
