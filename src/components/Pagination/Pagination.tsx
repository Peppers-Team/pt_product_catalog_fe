import React, { useMemo } from 'react';
import './Pagination.scss';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { getPagesCount } from '../../utils/getPagesCount';

type Props = {
  total: number,
  currentPage: number,
  onPageChange: (pageNumber: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  currentPage,
  onPageChange,
}) => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get('limit') || '16';
  const pages: number[] = getPagesCount(1,
    Math.ceil(total / Number(limit)));

  const isFirstPageActive = currentPage === 1;
  const isLastPageActive = currentPage === pages.length;

  const visiblePages = useMemo(() => {
    if (currentPage > 1) {
      return pages.slice(currentPage - 2, currentPage + 2);
    }

    return pages.slice(0, 4);
  }, [currentPage, pages]);

  const handlePreviousPageSelect = () => {
    if (!isFirstPageActive) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPageSelect = () => {
    if (!isLastPageActive) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__button">
        <button
          type="button"
          aria-label="prev-page-button"
          className="pagination__arrow pagination__arrow--left"
          onClick={handlePreviousPageSelect}
        />
      </div>
      {visiblePages.map(value => (
        <button
          type="button"
          aria-label="page-button"
          className={classNames('pagination__button', {
            'is-active': currentPage === value,
          })}
          key={value}
          onClick={() => onPageChange(value)}
        >
          {value}
        </button>
      ))}
      <div className="pagination__button">
        <button
          type="button"
          aria-label="next-page-button"
          className="pagination__arrow pagination__arrow--right"
          onClick={handleNextPageSelect}
        />
      </div>
    </div>
  );
};
