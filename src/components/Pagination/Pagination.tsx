import React from 'react';
import { PaginationProps } from './Pagination.types';
import styles from './Pagination.module.scss';

/**
 * Pagination component - Navigation for paginated content
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onBackToTop,
  showBackToTop = true,
  className = '',
}) => {
  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage > 1 && onPrevious) {
      onPrevious();
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage < totalPages && onNext) {
      onNext();
    }
  };

  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.pagination} ${className}`}>
      {showBackToTop && (
        <div className={`${styles.pagination__to_top} desktop--show tablet-down--hide`}>
          <a href="#" id="scroll-top" onClick={handleBackToTop}>
            back to top
          </a>
        </div>
      )}
      <div className={styles.pagination__pages}>
        <a
          href="#"
          className={styles.pagination__previous}
          onClick={handlePrevious}
          aria-disabled={currentPage === 1}
        >
          Prev
        </a>
        <span className={styles.pagination__page_of}>
          {currentPage} of {totalPages}
        </span>
        <a
          href="#"
          className={styles.pagination__next}
          onClick={handleNext}
          aria-disabled={currentPage === totalPages}
        >
          Next
        </a>
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';
