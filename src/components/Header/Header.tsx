/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import classnames from 'classnames';
import { Fade } from 'react-awesome-reveal';

import logoDarkMode from '../../assets/images/logo-dark-mode.png';
import logoLightMode from '../../assets/images/logo-black.png';
import './header.scss';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { NavigationMobile } from '../NavigationMobile';
import { CategoryType } from '../../types/CategoryType';
import { SearchBar } from '../SearchBar/SearchBar';
import { useFavourite } from '../../context/FavouriteContext';
import { useCart } from '../../context/CartContext';
import { CounterIcon } from '../CounterIcon/CounterIcon';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const { favourite } = useFavourite();
  const { cart } = useCart();
  const { theme, setTheme } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectActiveLink, setSelectActiveLink] = useState<string>('');

  const params = new URLSearchParams(searchParams);
  const category = params.get('category') || '';
  const sort = params.get('sortBy') || sortDefault;

  const isDark = theme.theme === 'dark';
  const isLight = theme.theme === 'light';

  const logo = isDark ? logoDarkMode : logoLightMode;

  const handleSwitchTheme = () => {
    const newTheme = isLight
      ? 'dark'
      : 'light';

    setTheme({ theme: newTheme, toggleTheme: !theme.toggleTheme });
  };

  useEffect(() => {
    const backgroundColor = isLight
      ? '#fafbfc'
      : '#0f1121';

    const page = document.getElementById('page');

    if (page) {
      page.style.backgroundColor = backgroundColor;
    }
  }, [theme.theme]);

  const handleMenuItemClick = (selectedItems: string) => {
    params.set('category', selectedItems);
    setSearchParams(params);
    setIsMenuOpen(false);
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
  }, [location, category]);

  return (
    <header className="header">
      <div className="header__left">
        <Link
          className="header__logo"
          to="/"
          onClick={() => handleMenuItemClick('')}
        >
          <Fade direction="left" triggerOnce>
            <img
              className="header__logo-img"
              src={logo}
              alt="logo"
            />
          </Fade>
        </Link>

        <nav className="header__menu">
          <Link
            to="/"
            className={classnames('header__menu-link', {
              'active-menu-link': selectActiveLink === '',
            })}
            onClick={() => handleMenuItemClick('')}
          >
            <Fade direction="down" triggerOnce>
              home
            </Fade>
          </Link>

          {Object.values(CategoryType).map(item => (
            <Link
              key={item}
              to={normalizedMenuLink(item, limitDefault, offsetDefault, sort)}
              className={classnames('header__menu-link', {
                'active-menu-link': selectActiveLink === item,
              })}
              onClick={() => handleMenuItemClick(item)}
            >
              <Fade direction="down" triggerOnce>
                {item}
              </Fade>
            </Link>
          ))}
        </nav>
      </div>

      <div className="header__right">
        <Fade direction="right" triggerOnce>
          <div className="header__icons">
            {category && <SearchBar />}

            <div
              className="icon icon--theme__link"
              onClick={handleSwitchTheme}
            >
              <i
                className={classnames('', {
                  'icon--sun-dark': theme.toggleTheme && isDark,
                  'icon--moon': !theme.toggleTheme && isLight,
                })}
              />
            </div>

            <div className="icon icon--menu__link">
              <i
                className={classnames('', {
                  'icon--menu': !isMenuOpen && isLight,
                  'icon--close': isMenuOpen && isLight,
                  'icon--menu-dark': !isMenuOpen && isDark,
                  'icon--close-dark': isMenuOpen && isDark,
                })}
                onClick={() => setIsMenuOpen(prev => !prev)}
              />
            </div>

            <Link
              to="/favourites"
              className={classnames('icon icon--favourites__link-header', {
                'active-icon-link': selectActiveLink === 'favourites',
              })}
            >
              <CounterIcon
                iconClassName={classnames('icon--favourites', {
                  'icon--favourites-dark': isDark,
                })}
                amount={favourite.length}
              />
            </Link>

            <Link
              to="/cart"
              className={classnames('icon icon--shopping-bag__link-header', {
                'active-icon-link': selectActiveLink === 'cart',
              })}
            >
              <CounterIcon
                iconClassName={classnames('icon--shopping-bag', {
                  'icon--shopping-bag-dark': isDark,
                })}
                amount={cart.length}
              />
            </Link>
          </div>
        </Fade>
      </div>

      {isMenuOpen && (
        <NavigationMobile onMenuOpen={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
};
