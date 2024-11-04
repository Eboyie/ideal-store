import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
  brand: string;
  stock: number;
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  console.log(product);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 w-full bg-gradient-to-r from-purple-500 to-teal-500">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 px-4 py-2 border rounded hover:bg-slate-100 transition-all duration-300"
      >
        Back
      </button>

      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-auto mb-5"
      />
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <p className="mb-4 text-gray-700 w-[70%]">{product.description}</p>
      <div className="flex justify-between items-center p-2">
        <p>${product.price}</p>
        <p className="ml-10">Rating: {product.rating}</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <p>Category: {product.category}</p>
        <p className="ml-10">Brand: {product.brand}</p>
      </div>
      <div className="flex justify-between items-center p-2">
        <p>Availability: {product.stock} in stock</p>
        <p>
          <button className="border px-2 py-1 rounded hover:bg-slate-100 transition-all duration-300 ">
            Add to cart
          </button>
        </p>
      </div>
    </div>
  );
};
export default ProductPage;
