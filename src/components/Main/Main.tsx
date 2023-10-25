import React from 'react';

import './main.scss';
import { SwiperMain } from '../SwiperMain';

export const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main__content">
          <h1 className="main__title">
            <div className="wrapper">
              Welcome to Nice Gadgets store!
            </div>
          </h1>

          <div className="main__swiper">
            <SwiperMain />
          </div>
        </div>
      </div>
    </section>
  );
};
