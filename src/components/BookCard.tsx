import { Link } from 'react-router-dom';
interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, image, price }) => {
  return (
    <div className="border rounded px-2 w-full mb-2 sm:mb-4 bg-gradient-to-r from-purple-500 to-teal-500">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover mb-2 transition-all duration-300 hover:scale-90"
        />
      </Link>
      <h2 className="font-bold">{title}</h2>

      <div className="flex justify-between items-center mb-2">
        <p className="text-2xl">${price}</p>
        <button className="bg-black text-white px-2 py-1 rounded">Add</button>
      </div>
    </div>
  );
};
export default BookCard;
