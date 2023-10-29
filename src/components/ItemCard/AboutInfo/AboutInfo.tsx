import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { getSplitedGB } from '../../../utils/getSplitedGB';
import { ProductCartType } from '../../../types';
import './AboutInfo.scss';

type Props = {
  phone: ProductCartType;
  selectedCapacity: string;
  hasLoaded: boolean;
};

export const AboutInfo: React.FC<Props> = ({
  phone, selectedCapacity, hasLoaded,
}) => {
  const {
    description,
    screen,
    resolution,
    processor,
    ram,
    camera,
    zoom,
    cell,
  } = phone;

  const dataFormTable = {
    screen,
    resolution,
    processor,
    RAM: getSplitedGB(ram),
    'built in memory': getSplitedGB(selectedCapacity),
    camera,
    zoom,
    cell: cell.join(' '),
  };

  return (
    <div className="container">
      <div className="wrapper">
        <article className="About-info">
          <div className="About-info__about">
            <h2 className="About-info__about-header About-info__header">
              {hasLoaded ? <Skeleton /> : 'About'}
            </h2>

            <div className="About-info__about__description">
              {description.map(({ title, text }) => (
                <div
                  className="About-info__about__description__block"
                  key={title}
                >
                  <h3 className="About-info__about__description__title">
                    {hasLoaded ? <Skeleton /> : title}
                  </h3>

                  {text.map((paragraph) => (
                    <p
                      className="About-info__about__description__text"
                      key={paragraph}
                    >
                      {hasLoaded ? <Skeleton height={100} /> : paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="About-info__tech-specs">
            <h2 className="About-info__tech-specs-header About-info__header">
              {hasLoaded ? <Skeleton /> : 'Tech specs'}
            </h2>

            <div className="About-info__tech-specs__stats">
              {Object.entries(dataFormTable).map(([key, value]) => {
                if (value === null) {
                  return null;
                }

                return hasLoaded ? (
                  <Skeleton key={key} />
                ) : (
                  <div className="About-info__tech-specs__stats__row" key={key}>
                    <span className="About-info__tech-specs__stats__title">
                      {key}
                    </span>
                    <span className="About-info__tech-specs__stats__data">
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
