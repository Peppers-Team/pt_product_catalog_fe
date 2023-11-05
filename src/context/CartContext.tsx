import React, { useContext } from 'react';
import { CartProduct } from '../types';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

interface CartContextType {
  cart: CartProduct[],
  setCart: React.Dispatch<React.SetStateAction<CartProduct[]>>
}

export const CartContext = React.createContext({} as CartContextType);

type Props = {
  children: React.ReactNode,
};

export const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useLocalStorageState<CartProduct[]>('cart', []);

  const value = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
