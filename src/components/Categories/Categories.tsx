import React from 'react';

import { CategoriesList } from './CategoriesList';
import './categories.scss';

export const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <div className="wrapper">
          <h2 className="categories__title">Shop by category</h2>

          <CategoriesList />
        </div>
      </div>
    </section>
  );
};
