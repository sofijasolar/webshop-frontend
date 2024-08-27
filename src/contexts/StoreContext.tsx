import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { IProduct } from '../interfaces/IProduct';

interface StoreContextType {
  products: IProduct[];
  productsLoaded: boolean;
  currentProducts: IProduct[];
  categories: string[];
  selectedCategory: string | null;

  productsInCart: IProduct[];

  setProducts: (products: IProduct[]) => void;
  setCurrentProducts: (products: IProduct[]) => void;
  setProductsLoaded: (loaded: boolean) => void;
  setCategories: (categories: string[]) => void;
  setSelectedCategory: (category: string | null) => void;
  setProductsInCart: (products: IProduct[]) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentProducts, setCurrentProducts] = useState<IProduct[] >(products);

  const [productsLoaded, setProductsLoaded] = useState<boolean>(false);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  const [productsInCart, setProductsInCart] = useState<IProduct[]>([]);


  useEffect(() => {
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      saveCartToLocalStorage(productsInCart);
    }
  }, [productsInCart]);

  const saveCartToLocalStorage = (products: IProduct[]) => {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  const getFromLocalStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      setProductsInCart(JSON.parse(cart));
    }
  }



  return (
    <StoreContext.Provider
      value={{
        products,
        currentProducts,
        categories,
        selectedCategory,
        productsLoaded, 
        productsInCart,
        setProductsLoaded,
        setProducts,
        setCurrentProducts,
        setCategories,
        setSelectedCategory,
        setProductsInCart,
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
