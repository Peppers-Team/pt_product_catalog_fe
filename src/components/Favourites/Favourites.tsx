import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { ProductCard } from '../ProductCard/ProductCard';
import './Favourites.scss';
import { FavouriteContext } from '../../context/FavouriteContext';
import HaveNoFavourites from '../../assets/images/no-favourites.png';
import { HomeButton } from '../HomeButton/HomeButton';
import { BreadcrumbsNav } from '../Breadcrumbs/Breadcrumbs';

export const Favourites = () => {
  const { favourite } = useContext(FavouriteContext);

  return (
    <Fade direction="up" triggerOnce>
      <div className="favourites wrapper container">
        <BreadcrumbsNav
          className="top-bar top-bar--no-margin"
          links={[
            <Link
              to="/favourites"
              key="favourites"
              className="top-bar__link-text top-bar__link-text--last"
            >
              Favourites
            </Link>,
          ]}
        />
        {favourite.length ? (
          <>
            <h1 className="favourites__title">Favourites</h1>
            <div className="favourites__items">
              {`${favourite.length} items`}
            </div>
            <div className="favourites__products">
              {favourite.map((prod) => (
                <ProductCard product={prod} key={prod.itemId} />
              ))}
            </div>
          </>
        ) : (
          <>

            <img
              src={HaveNoFavourites}
              alt="You have no favourites"
              className="img-favourites"
            />

            <div className="button-home">
              <HomeButton />
            </div>
          </>
        )}
      </div>
    </Fade>
  );
};
