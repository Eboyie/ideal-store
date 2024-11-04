import PopularBlogs from './PopularBlogs';
import TopSellers from './TopSellers';

const Story = () => {
  return (
    <div className="w-full flex justify-center flex-wrap bg-gradient-to-t from-purple-500 to-teal-500 h-screen">
      <TopSellers />
      <PopularBlogs />
    </div>
  );
};
export default Story;
