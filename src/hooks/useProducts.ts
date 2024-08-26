import { useState, useEffect } from 'react';
import { getAllProducts } from '../services/WebshopService'; // Assuming api.ts is where you have the API functions
import { IProduct } from '../interfaces/IProduct';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  return { products, loading, error };
};

