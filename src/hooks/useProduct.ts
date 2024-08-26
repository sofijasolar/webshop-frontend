import { useState, useEffect } from 'react';
import { getProductById } from '../services/WebshopService';
import { IProduct } from '../interfaces/IProduct';

export const useProduct = (id: number) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        setError('Failed to fetch product.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};
