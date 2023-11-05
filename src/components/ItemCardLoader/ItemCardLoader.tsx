import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const ItemCardLoader = () => {
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <section className="MainContent">
            <h1 className="MainContent__header">
              <Skeleton />
            </h1>

            <div className="MainContent__photos">
              {[1, 2, 3, 4].map((image) => (
                <Skeleton key={image} width={50} height={50} />
              ))}
            </div>

            <div className="MainContent__selected-photo">
              <Skeleton height={400} width={400} />
            </div>

            <div className="MainContent__stats">
              <Skeleton width={50} />

              <Skeleton width={50} />

              <p className="MainContent__stats__capacity-header">
                <Skeleton width={100} />
              </p>

              <div className="MainContent__stats__capacites">
                {[1, 2, 3, 4].map((currentCapacity) => (
                  <Skeleton key={currentCapacity} width={40} />
                ))}
              </div>

              <Skeleton width={50} />

              <div className="MainContent__stats__buttons">
                <Skeleton width={200} height={32} />

                <Skeleton width={32} height={32} />
              </div>

              <div className="MainContent__stats__short">
                {[1, 2, 3, 4].map(item => (
                  <Skeleton key={item} />
                ))}
              </div>
            </div>
          </section>

          <article className="About-info">
            <div className="About-info__about">
              <h2 className="About-info__about-header About-info__header">
                <Skeleton />
              </h2>

              <div className="About-info__about__description">
                {[1, 2].map(item => (
                  <div
                    className="About-info__about__description__block"
                    key={item}
                  >
                    <h3 className="About-info__about__description__title">
                      <Skeleton />
                    </h3>

                    {[1, 2].map(item2 => (
                      <p
                        className="About-info__about__description__text"
                        key={item2}
                      >
                        <Skeleton height={100} />
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="About-info__tech-specs">
              <h2 className="About-info__tech-specs-header About-info__header">
                <Skeleton />
              </h2>

              <div className="About-info__tech-specs__stats">
                {[1, 2, 3, 4, 5].map(item => (
                  <Skeleton key={item} />
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
