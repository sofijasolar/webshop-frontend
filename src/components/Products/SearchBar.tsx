import { useEffect, useState } from "react";
import { useStoreContext } from "../../contexts/StoreContext";

const SearchBar: React.FC = () => {
  const { products, setCurrentProducts } = useStoreContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query !== "") {
      console.log('products in handleSearch', products);
      const filtered = products.filter(
        (product) =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {

      setFilteredProducts(products);
    }
  };

  // update context on filtered products change
   useEffect(() => {
    setCurrentProducts(filteredProducts);
  }, [filteredProducts]); 

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search products..."
      className="w-full md:w-80 p-1 px-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
};

export default SearchBar;
