import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link, useSearchParams } from 'react-router-dom';

import bannerPhone from '../../assets/images/banner-phone.png';
import bannerWatch from '../../assets/images/banner-watch.png';
import bannerIpad from '../../assets/images/banner-ipad.png';

import bannerPhoneMobile from '../../assets/images/banner-phone-mobile.png';
import bannerWatchMobile from '../../assets/images/banner-watch-mobile.png';
import bannerIpadMobile from '../../assets/images/banner-ipad-mobile.png';

import arrowLeftBlack from '../../assets/icons/arrow-left-black.svg';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowRightBlack from '../../assets/icons/arrow-right-black.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperMain.scss';
import { limitDefault, offsetDefault, sortDefault } from '../../utils/constant';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { useTheme } from '../../context/ThemeContext';

const banners = [
  {
    id: 'phones',
    imgUrl: bannerPhone,
    imgUrlMobile: bannerPhoneMobile,
  },
  {
    id: 'accessories',
    imgUrl: bannerWatch,
    imgUrlMobile: bannerWatchMobile,
  },
  {
    id: 'tablets',
    imgUrl: bannerIpad,
    imgUrlMobile: bannerIpadMobile,
  },
];

export const SwiperMain = () => {
  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const sort = params.get('sortBy') || sortDefault;

  const { theme } = useTheme();

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: '.swiper-slide__main-arrow-right',
        prevEl: '.swiper-slide__main-arrow-left',
      }}
      mousewheel
      loop
    >
      {banners.map(item => (
        <SwiperSlide key={item.id}>
          <div className="swiper-slide__img-box">
            <img
              className="swiper-slide__img"
              src={item.imgUrl}
              alt="banner"
            />

            <img
              className="swiper-slide__img-mobile"
              src={item.imgUrlMobile}
              alt="banner"
            />

            <button
              className="swiper-slide__main-arrow swiper-slide__main-arrow-left"
              type="button"
              aria-label="arrow-left"
            >
              <img
                src={
                  theme.theme !== 'light'
                    ? arrowLeft
                    : arrowLeftBlack
                }
                alt="arrow_left_black"
              />
            </button>

            <button
              className={'swiper-slide__main-arrow'
                + ' swiper-slide__main-arrow-right'}
              type="button"
              aria-label="arrow-right"
            >
              <img
                src={theme.theme !== 'light'
                  ? arrowRight
                  : arrowRightBlack}
                alt="arrow_right_black"
              />
            </button>
          </div>

          <Link
            className="swiper-slide__main-order-link"
            to={normalizedMenuLink(item.id, limitDefault, offsetDefault, sort)}
          >
            <button
              type="button"
              className="swiper-slide__main-order-button"
            >
              Order now
            </button>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
