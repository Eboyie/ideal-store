import { useState, useEffect } from 'react';

interface Author {
  id: number;
  isFollowed: boolean;
  image: string;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}

interface singleAuthor {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();

        const authorsData: Author[] = data.results.map(
          (author: singleAuthor) => ({
            name: `${author.name.first} ${author.name.last}`,
            isFollowed: false,
            image: author.picture.medium,
          })
        );

        setAuthors(authorsData);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchData();
  }, []);

  const handleFollowAuthor = (index: number) => {
    const newAuthors = [...authors];
    newAuthors[index].isFollowed = !newAuthors[index].isFollowed;
    setAuthors(newAuthors);
  };

  return (
    <div className="w-[23rem] bg-white p-5 mx-5 mt-[2rem] rounded border">
      <h2 className="text-xl font-bold mb-5">Top Sellers</h2>

      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex justify-center items-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-12 h-12 rounded-full mr-2"
              />
              <div>
                <span className="font-semibold">{author.name}</span>
              </div>
            </section>

            <button
              onClick={() => handleFollowAuthor(index)}
              className={`py-1 px-3 rounded ${
                author.isFollowed
                  ? 'bg-red-500 text-white'
                  : 'bg-blue-500 text-white'
              }
                  
              }`}
            >
              {author.isFollowed ? 'Unfollow' : 'Follow'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TopSellers;
