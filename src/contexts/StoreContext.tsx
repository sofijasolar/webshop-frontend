import React, { createContext, useState, useContext, ReactNode } from 'react';
import { IProduct } from '../interfaces/IProduct';
import { ICategory } from '../interfaces/ICategory';

interface StoreContextType {
  products: IProduct[];
  categories: ICategory[];
  selectedCategory: ICategory | null;
  setProducts: (products: IProduct[]) => void;
  productsLoaded: boolean;
  setProductsLoaded: (loaded: boolean) => void;
  setCategories: (categories: ICategory[]) => void;
  setSelectedCategory: (category: ICategory | null) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsLoaded, setProductsLoaded] = useState<boolean>(false);

  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(null);


  return (
    <StoreContext.Provider
      value={{
        products,
        categories,
        selectedCategory,
        productsLoaded, setProductsLoaded,
        setProducts,
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
