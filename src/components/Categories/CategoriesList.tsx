import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  categories,
  limitDefault,
  offsetDefault,
  sortDefault,
} from '../../utils/constant';
import { normalizedMenuLink } from '../../utils/getNormalizedMenuLink';
import { getCategoryCount } from '../../api/products';

export const CategoriesList = () => {
  const [categoryCount, setCategoryCount] = useState<{
    [key: string]: number
  } | null>(null);

  useEffect(() => {
    getCategoryCount()
      .then((data) => {
        setCategoryCount(data);
      });
  }, []);

  const updatedCategories = categories.map((category) => {
    let count = 0;

    if (categoryCount) {
      count = categoryCount[category.count];
    }

    return {
      ...category,
      description: `${count} models`,
    };
  });

  return (
    <ul className="categories__list">
      {updatedCategories.map(category => {
        const {
          id, title, description, imgSrc,
        } = category;

        return (
          <li className="categories__item" key={id}>
            <Link to={normalizedMenuLink(
              id, limitDefault, offsetDefault, sortDefault,
            )}
            >
              <div className="categories__item-picture-box">
                <img
                  className="categories__item-picture"
                  src={imgSrc}
                  alt="mobile-phones"
                />
              </div>

              <h5 className="categories__item-title">{title}</h5>
              <p className="categories__item-description">
                {description}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
