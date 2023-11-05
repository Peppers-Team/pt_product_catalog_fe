import React from 'react';
import classnames from 'classnames';

import { SwiperCards } from '../SwiperCards';
import { ProductType } from '../../types';
import { useTheme } from '../../context/ThemeContext';
import './productsCarousel.scss';

type Props = {
  title: string;
  visibleProducts: ProductType[];
};

export const ProductsCarousel: React.FC<Props> = ({
  title,
  visibleProducts,
}) => {
  const { theme } = useTheme();

  const isDark = theme.theme === 'dark';
  const isLight = theme.theme === 'light';

  return (
    <section className="products-carousel">
      <div className="container">
        <div className="wrapper">
          <div className="products-carousel__top">
            <h2 className="products-carousel__title">
              {title}
            </h2>

            <div className="products-carousel__arrows">
              <div className="products-carousel__arrows">
                <button
                  className={classnames(
                    'products-carousel__arrow-left arrow',
                    {
                      'arrow-left': isLight,
                      'arrow-left-dark': isDark,
                    },
                  )}
                  type="button"
                  aria-label="arrow-left"
                />
                <button
                  className={classnames(
                    'products-carousel__arrow-right arrow',
                    {
                      'arrow-right': isLight,
                      'arrow-right-dark': isDark,
                    },
                  )}
                  type="button"
                  aria-label="arrow-right"
                />
              </div>
            </div>
          </div>

          <SwiperCards
            arrowLeftClassName="products-carousel__arrow-left"
            arrowRightClassName="products-carousel__arrow-right"
            visibleProducts={visibleProducts}
          />
        </div>
      </div>
    </section>
  );
};
