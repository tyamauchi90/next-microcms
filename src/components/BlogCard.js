import Link from "next/link";

export const BlogCard = ({ blog }) => {
  // 正規表現を使用してタグを除去
  const removeHTMLTags = (html) => {
    return html.replace(/<[^>]*>/g, "");
  };
  const blogContent = removeHTMLTags(blog.body);

  // 本文を一定の文字数に切り詰める関数
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + " ...";
    }
    return text;
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-110 transition-all duration-500">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.title}</div>
          <p className="text-gray-700 text-base">{truncateText(blogContent, 150)}</p>
        </div>
        <div className="px-6 py-4">
          <Link href={`/blog/${blog.id}`}>
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
