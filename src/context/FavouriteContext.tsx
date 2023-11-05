import React, { useContext } from 'react';
import { ProductType } from '../types';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

interface FavouriteContextType {
  favourite: ProductType[],
  setFavourite: React.Dispatch<React.SetStateAction<ProductType[]>>
}

export const FavouriteContext = React.createContext({} as FavouriteContextType);

type Props = {
  children: React.ReactNode,
};

export const FavouriteContextProvider: React.FC<Props> = ({ children }) => {
  const [
    favourite,
    setFavourite,
  ] = useLocalStorageState<ProductType[]>('favourites', []);

  const value = {
    favourite,
    setFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => useContext(FavouriteContext);
