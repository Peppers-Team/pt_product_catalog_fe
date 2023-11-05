import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './cartsLoader.scss';

export const CartsLoader = () => {
  return (
    <div className="card-loader">
      {[1, 2, 3, 4].map(item => (
        <div key={item}>
          <Skeleton height={260} width={260} />
          <Skeleton height={24} style={{ marginTop: 22 }} />
          <Skeleton height={20} style={{ marginTop: 10, marginBottom: 22 }} />
          <Skeleton height={14} count={3} style={{ marginTop: 4 }} />
        </div>
      ))}
    </div>
  );
};
