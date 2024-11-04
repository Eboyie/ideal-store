import { MessageCircle, ThumbsUp } from 'lucide-react';

const PopularBlogs = () => {
  const blogs = [
    {
      id: 1,
      author: 'Ben',
      title: 'Progressive hub',
      likes: 15,
      comments: 5,
    },
    {
      id: 2,
      author: 'Sheffy',
      title: 'Content-based hierarchy',
      likes: 20,
      comments: 10,
    },
    {
      id: 3,
      author: 'Elroy',
      title: 'Synergistic Graphic Interface',
      likes: 13,
      comments: 6,
    },
    {
      id: 4,
      author: 'Tadeas',
      title: 'Profit-focused matrices',
      likes: 41,
      comments: 16,
    },
    {
      id: 5,
      author: 'Dionisio',
      title: 'Upward-trending moratorium',
      likes: 15,
      comments: 15,
    },
  ];

  return (
    <div className="w-[23rem] bg-white p-5 mx-5 ml-5 mt-[2rem] rounded border">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-4">
            <div className="flex items-center justify-between">
              <span className="mb-2 font-semibold">{blog.title}</span>
            </div>
            <span className="text-gray-600">By {blog.author}</span>

            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-600 mr-5 ml-1">
                {blog.likes} likes
              </span>

              <ThumbsUp size={16} />
              <span className="text-gray-600 mr-2 ml-2">
                {blog.comments} comments
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PopularBlogs;
