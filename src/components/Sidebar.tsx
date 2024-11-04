import { useState, useEffect } from 'react';
import { useFilter } from './FilterContext';

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const {
    searchQUery,
    setSearchQuery,
    SelectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const [category, setCategory] = useState<string[]>([]);

  const [keywords] = useState<string[]>([
    'apple',
    'watch',
    'fashion',
    'trend',
    'shoes',
    'shirt',
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );

        setCategory(uniqueCategories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSelectedCategory('');
    setKeyword('');
  };

  return (
    <div className="hidden w-64 p-4 h-full sm:block bg-gradient-to-r from-purple-500 to-teal-500">
      <h1 className="text-2xl font-bold mb-10 mt-4 tracking-wider text-teal-400">
        Specify
      </h1>

      <section className="mb-5">
        <input
          type="text"
          className="border-2 rounded px-2 py-2 w-full sm:bm-0"
          placeholder="Search Product..."
          value={searchQUery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex justify-center items-center mt-3 ">
          <input
            type="text"
            className="max-min border mr-3 px-3 py-2 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ''}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="max-min border  px-3 py-2 mb-3 w-full"
            placeholder="Max"
            value={maxPrice ?? ''}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        {/* categories */}
        <div className="text-xl font-semibold mb-3">Categories</div>

        <section>
          {category.map((category, index) => (
            <label
              key={index}
              className="cursor-pointer mb-2 text-sm font-medium flex flex-row justify-start items-center"
            >
              <input
                type="radio"
                name="category"
                value={category}
                onChange={() => handleRadioChangeCategories(category)}
                className="mr-2 w-[16px] h-[16px]"
                checked={SelectedCategory === category}
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>

        {/* keywords section */}
        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>

          <div>
            {keywords.map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200 font-semibold transition-all duration-300"
              >
                {keyword.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* clear button */}
        <button
          onClick={handleResetFilters}
          className="w-full mb-[4rem] py-2 border rounded mt-5 bg-black text-white hover:bg-gray-600 font-semibold transition-all duration-300"
        >
          Reset Filter
        </button>
      </section>
    </div>
  );
};
export default Sidebar;
