import { createContext, useContext, useState, ReactNode } from 'react';

interface FilterContextType {
  searchQUery: string;
  setSearchQuery: (Query: string) => void;
  SelectedCategory: string;
  setSelectedCategory: (Category: string) => void;
  minPrice: number | undefined;
  setMinPrice: (price: number | undefined) => void;
  maxPrice: number | undefined;
  setMaxPrice: (price: number | undefined) => void;
  keyword: string;
  setKeyword: (keywords: string) => void;
}

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQUery, setSearchQuery] = useState<string>('');
  const [SelectedCategory, setSelectedCategory] = useState<string>('');
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [keyword, setKeyword] = useState<string>('');

  return (
    <FilterContext.Provider
      value={{
        searchQUery,
        setSearchQuery,
        SelectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        keyword,
        setKeyword,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
