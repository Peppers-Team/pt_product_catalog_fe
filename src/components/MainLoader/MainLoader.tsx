import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './mainLoader.scss';

export const MainLoader = () => {
  return (
    <section className="main-loader">
      <div className="container">
        <div className="main-loader__content">
          <h1 className="main-loader__title">
            <div className="wrapper">
              <Skeleton />
            </div>
          </h1>

          <div className="main-loader__swiper">
            <div className="main-loader__arrows">
              <Skeleton width={32} height={300} />
            </div>
            <div className="main-loader__banner">
              <Skeleton height={300} borderRadius={0} />
            </div>
            <div className="main-loader__arrows">
              <Skeleton width={32} height={300} />
            </div>
          </div>

          <div className="main-loader__dots">
            {[1, 2, 3].map(item => (
              <div key={item}>
                <Skeleton width={14} height={4} borderRadius={0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
