import { useState, useEffect } from 'react';
import { getAllProducts, getProductsByCategory } from '../services/WebshopService'; // Assuming api.ts is where you have the API functions
import { IProduct } from '../interfaces/IProduct';
import { useStoreContext } from '../contexts/StoreContext';

export const useProducts = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);
  const { setProducts, selectedCategory } = useStoreContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let productsData: IProduct[];

        if (selectedCategory) {
          // if a category is selected, fetch products by category
          productsData = await getProductsByCategory(selectedCategory);
        } else {
          // if not selected fetch all products
          productsData = await getAllProducts();
        }

        setProducts(productsData);
      } catch (error) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, setProducts]);


  return { loading, error };
};

