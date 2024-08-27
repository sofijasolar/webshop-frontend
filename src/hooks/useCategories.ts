import { useEffect, useState } from "react";
import { getAllCategories } from "../services/WebshopService";

export const useCategories = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            setLoading(true);
            const c = await getAllCategories();
            setCategories(c);
            console.log(c);
          } catch (error) {
            setError('Failed to fetch categories.');
          } finally {
            setLoading(false);
          }
        };
    
        fetchCategories();
      }, []);
    
    
      return { categories, loading, error };

}
