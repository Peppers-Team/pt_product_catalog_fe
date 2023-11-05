import React, { useState, useContext } from 'react';
import { ProductType } from '../types/ProductType';

interface ProductsContextType {
  products: ProductType[],
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>
}

export const ProductsContext = React.createContext({} as ProductsContextType);

type Props = {
  children: React.ReactNode,
};

export const ProductsContextProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const value = {
    products,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useCart = () => useContext(ProductsContext);
