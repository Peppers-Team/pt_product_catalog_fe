import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { CategoryType } from '../../types/CategoryType';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';
import './navigationMobile.scss';
import { SearchBar } from '../SearchBar/SearchBar';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  onMenuOpen: (value: boolean) => void;
};

export const NavigationMobile: React.FC<Props> = ({ onMenuOpen }) => {
  const location = useLocation();
  const [searchParams, setSeacrhParams] = useSearchParams();
  const [selectActiveLink, setSelectActiveLink] = useState<string>('');

  const params = new URLSearchParams(searchParams);
  const sort = params.get('sortBy') || sortDefault;
  const category = params.get('category') || '';

  const { theme } = useTheme();

  const handleMenuItemClick = (selectedItems: string) => {
    params.set('category', selectedItems);
    setSeacrhParams(params);
    onMenuOpen(false);
  };

  const handleIconsClick = () => {
    onMenuOpen(false);
  };

  useEffect(() => {
    const { pathname } = location;

    if (pathname.slice(1) === '') {
      setSelectActiveLink('');
    }

    if (pathname.slice(1) === 'products') {
      setSelectActiveLink(category);
    }

    if (pathname.slice(1) === 'cart') {
      setSelectActiveLink('cart');
    }

    if (pathname.slice(1) === 'favourites') {
      setSelectActiveLink('favourites');
    }
  }, [location]);

  return (
    <nav className="navigation-mobile">
      <div className="navigation-mobile__menu">
        <Link
          to="/"
          onClick={() => handleMenuItemClick('')}
          className={classnames('navigation-mobile__menu-link', {
            'active-menu-link': selectActiveLink === '',
          })}
        >
          home
        </Link>

        {Object.values(CategoryType).map(item => (
          <Link
            key={item}
            to={normalizedMenuLink(item, limitDefault, offsetDefault, sort)}
            className={classnames('navigation-mobile__menu-link', {
              'active-menu-link': selectActiveLink === item,
            })}
            onClick={() => handleMenuItemClick(item)}
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="icon icon--search__link-navigation-mobile">
        {category && <SearchBar onMenuOpen={onMenuOpen} />}
      </div>

      <div className="navigation-mobile__icons">

        <Link
          to="/favourites"
          className={classnames(
            'icon icon--favourites__link-navigation-mobile',
            {
              'active-icon-link-mobile': selectActiveLink === 'favourites',
            },
          )}
          onClick={handleIconsClick}
        >
          <i
            className={classnames('icon--favourites', {
              'icon--favourites-dark': theme.theme === 'dark',
            })}
          />
        </Link>

        <Link
          to="/cart"
          onClick={handleIconsClick}
          className={classnames(
            'icon icon--shopping-bag__link-navigation-mobile',
            {
              'active-icon-link-mobile': selectActiveLink === 'cart',
            },
          )}
        >
          <i
            className={classnames('icon--shopping-bag', {
              'icon--shopping-bag-dark': theme.theme === 'dark',
            })}
          />
        </Link>
      </div>
    </nav>
  );
};
