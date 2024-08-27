import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IProduct } from '../interfaces/IProduct';
// import { ICategory } from '../interfaces/ICategory';

interface StoreContextType {
  products: IProduct[];
  productsLoaded: boolean;
  currentProducts: IProduct[];
  categories: string[];
  selectedCategory: string | null;
  setProducts: (products: IProduct[]) => void;
  setCurrentProducts: (products: IProduct[]) => void;
  setProductsLoaded: (loaded: boolean) => void;
  setCategories: (categories: string[]) => void;
  setSelectedCategory: (category: string | null) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentProducts, setCurrentProducts] = useState<IProduct[] >(products);

  const [productsLoaded, setProductsLoaded] = useState<boolean>(false);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  return (
    <StoreContext.Provider
      value={{
        products,
        currentProducts,
        categories,
        selectedCategory,
        productsLoaded, 
        setProductsLoaded,
        setProducts,
        setCurrentProducts,
        setCategories,
        setSelectedCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
};
