"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
import useQueryPostList from "@/hooks/use-query-post-list";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "@/services/post";
import { useSearchParams } from "next/navigation";

const PostList = () => {
  const { data, isLoading, error } = useQueryPostList();
  const { posts = [], totalPages } = data || {};
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";

  const { mutate: deletePostMutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts", currentPage] });
    },
  });

  const handleDelete = (id: string) => {
    deletePostMutate(id);
  };

  return (
    <div className="mt-8">
      {isLoading && <div className="text-gray-600">Loading...</div>}
      {error && <div className="text-red-600">Error: {error.message}</div>}
      {!isLoading && posts.length === 0 && <div className="text-gray-600">No posts</div>}
      {!isLoading &&
        posts.map((post: Post) => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <Post post={post} onDelete={handleDelete} showDelete={true} />
          </Link>
        ))}
      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default PostList;
