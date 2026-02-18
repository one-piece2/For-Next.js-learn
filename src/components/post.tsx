interface PostProps {
  post?: Post;
  onDelete?: (id: string) => void;
  showDelete?: boolean;
}

const Post = ({ post, onDelete, showDelete = false }: PostProps) => {
  const { title = "--", content = "-", createdAt = 0, id = "" } = post || {};
  
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDelete?.(id);
    }
  };
  
  return (
    <div className="w-full border-b border-gray-200 py-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-sm text-gray-900 font-bold">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{content}</p>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
        {showDelete && onDelete && (
          <button
            onClick={handleDelete}
            className="ml-4 text-sm text-red-600 hover:text-red-800 font-bold"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
