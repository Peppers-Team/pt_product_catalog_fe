import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCard } from '../ProductCard/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperCards.scss';
import { ProductType } from '../../types';

type Props = {
  arrowLeftClassName: string,
  arrowRightClassName: string,
  visibleProducts: ProductType[],
};

export const SwiperCards: React.FC<Props> = ({
  arrowLeftClassName,
  arrowRightClassName,
  visibleProducts,
}) => {
  return (
    <Swiper
      className="swiper-cards"
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{ nextEl: `.${arrowRightClassName}`, prevEl: `.${arrowLeftClassName}` }}
      autoHeight
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
    >
      {visibleProducts.map(product => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
