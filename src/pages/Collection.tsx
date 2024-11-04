import { ChevronDown, ChevronUp } from 'lucide-react';
import axios from 'axios';
import { useFilter } from '../components/FilterContext';
import { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';

import Sidebar from '../components/Sidebar';

interface Product {
  thumbnail: string;
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;

  rating: number;
}
const Collection = () => {
  const {
    searchQUery,
    SelectedCategory,
    minPrice,
    maxPrice,
    keyword,
    setSearchQuery,
  } = useFilter();

  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const itemsPerPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, [currentPage, keyword]);

  const getFilteredProducts = () => {
    let filteredProducts = products;

    if (SelectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === SelectedCategory
      );
    }

    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice
      );
    }

    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= maxPrice
      );
    }

    if (searchQUery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQUery.toLowerCase())
      );
    }

    switch (filter) {
      case 'cheap':
        return filteredProducts.sort((a, b) => a.price - b.price);

      case 'expensive':
        return filteredProducts.sort((a, b) => b.price - a.price);

      case 'popular':
        return filteredProducts.sort((a, b) => b.rating - a.rating);

      default:
        return filteredProducts;
    }
  };

  const filteredProducts = getFilteredProducts();

  const totalProducts = 100;
  const totalPage = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  const getPaginationNumbers = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPage, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPage, endPage + (2 - (currentPage - 1)));
    }

    if (currentPage + 2 > totalPage) {
      startPage = Math.max(1, startPage - (2 - (totalPage - currentPage)));
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(i);
    }

    return buttons;
  };

  return (
    <section className="flex">
      <Sidebar />
      <div className="mb-5 p-4 w-full mx-auto bg-gradient-to-r from-purple-500 to-teal-500">
        <div>
          <div className="relative mb-5 mt-5 ">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="border px-4 py-2 rounded-full flex items-center hover:border-gray-300"
            >
              {dropdownOpen ? (
                <ChevronUp className="mr-2" />
              ) : (
                <ChevronDown className="mr-2" />
              )}
              {filter === 'all'
                ? 'Filter'
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>

            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white border w-full mt-2 border-gray-200 rounded-md shadow-md z-10 sm:w-[40rem]">
                <button
                  onClick={() => setFilter('cheap')}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Cheap
                </button>
                <button
                  onClick={() => setFilter('expensive')}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Expensive
                </button>
                <button
                  onClick={() => setFilter('popular')}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Popular
                </button>
              </div>
            )}
          </div>

          {/* search bar */}
          <div className="relative sm:hidden">
            <input
              type="text"
              placeholder="Search"
              className="border px-4 py-2 rounded-full w-full"
              value={searchQUery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="absolute right-2 top-2"
              onClick={() => setSearchQuery('')}
            >
              Search
            </button>
          </div>
        </div>

        {/* BookCard */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-image mt-4">
          {filteredProducts.map((product) => (
            <BookCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-5">
          {/* Pagination prev*/}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="border px-4 py-2 mx-2 rounded-full hover:bg-slate-100 transition-all duration-300"
          >
            Previous
          </button>

          {/* Pagination button*/}
          <div className="flex flex-wrap justify-center">
            {getPaginationNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border px-4 py-2 mx-1 rounded-full ${
                  page === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-black'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Pagination next*/}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPage}
            className="border px-4 py-2 mx-2 rounded-full hover:bg-slate-100 transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collection;
