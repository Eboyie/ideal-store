import PopularBlogs from './PopularBlogs';
import TopSellers from './TopSellers';

const Story = () => {
  return (
    <div className="w-full flex pb-3 justify-center flex-wrap bg-gradient-to-t from-purple-500 to-teal-500 min-h-screen">
      <TopSellers />
      <PopularBlogs />
    </div>
  );
};
export default Story;
