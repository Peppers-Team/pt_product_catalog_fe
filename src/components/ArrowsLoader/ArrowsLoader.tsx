import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './arrowsLoader.scss';

export const ArrowsLoader = () => {
  return (
    <div className="arrows-loader">
      {[1, 2].map(item => (
        <Skeleton key={item} circle width={32} height={32} />
      ))}
    </div>
  );
};
