import React, { useContext } from 'react';
import './HeartIcon.scss';
import heartEmpty from '../../assets/icons/favouritesh-heart-like.svg';
import heartEmptyDarkMode from
  '../../assets/icons-dark-mode/favourites-heart-like.svg';
import heartFilled from '../../assets/icons/favourites-filled-heart-like.svg';
import { FavouriteContext } from '../../context/FavouriteContext';
import { ProductType } from '../../types';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  product: ProductType,
};

export const HeartIcon: React.FC<Props> = ({ product }) => {
  const { favourite, setFavourite } = useContext(FavouriteContext);

  const isLiked = favourite.find(({ itemId }) => itemId === product.itemId);

  const { theme } = useTheme();

  const addToFavourites = () => {
    if (isLiked) {
      setFavourite(curFav => {
        return curFav.filter(({ itemId }) => itemId !== product.itemId);
      });

      return;
    }

    setFavourite(curFav => {
      return [...curFav, { ...product, id: product.itemId }];
    });
  };

  return (
    <button
      className="HeartIcon"
      onClick={addToFavourites}
      type="button"
    >
      {theme.theme === 'light'
        ? (
          <input
            src={!isLiked ? heartEmpty : heartFilled}
            alt="like icon"
            type="image"
          />
        )
        : (
          <input
            src={!isLiked ? heartEmptyDarkMode : heartFilled}
            alt="like icon"
            type="image"
          />
        )}
    </button>
  );
};
