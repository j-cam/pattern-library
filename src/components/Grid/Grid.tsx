import React from 'react';
import { GridProps } from './Grid.types';
import styles from './Grid.module.scss';

/**
 * Grid component - Responsive grid layout for displaying collections
 */
export const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = 'md',
  heading,
  className = '',
}) => {
  const gridClass = `${styles.collection__grid} ${styles[`collection__grid--cols-${columns}`]} ${styles[`collection__grid--gap-${gap}`]}`;

  return (
    <div className={`${styles.collection} ${className}`}>
      {heading && <h2 className={styles.collection__caption}>{heading}</h2>}
      <div className={gridClass}>
        {children}
      </div>
    </div>
  );
};

Grid.displayName = 'Grid';
