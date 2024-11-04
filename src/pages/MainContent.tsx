import Hero from '../components/Hero';

const MainContent = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen">
      <Hero />

      {/* second */}
      <div className="align-element items-center justify-center ">
        <div>
          <div className="p-4">
            <h2 className="text-xl">
              Our simple yet powerful ecommerce solution allows users of all
              abilities to operate a successful online store
            </h2>
            <p className="py-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus, recusandae ipsa voluptates placeat deserunt
              quaerat esse, aperiam laboriosam corrupti quae qui sunt magnam
              rerum.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus, recusandae ipsa voluptates placeat deserunt
              quaerat esse, aperiam laboriosam corrupti quae qui sunt magnam
              rerum.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus, recusandae ipsa voluptates placeat deserunt
              quaerat esse, aperiam laboriosam corrupti quae qui sunt magnam
              rerum.
            </p>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ducimus, recusandae ipsa voluptates placeat deserunt
              quaerat esse, aperiam laboriosam corrupti quae qui sunt magnam
              rerum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainContent;
