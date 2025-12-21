import React from 'react';
import { BannerProps } from './Banner.types';
import styles from './Banner.module.scss';

/**
 * Banner component - A full-width image banner with centered text overlay
 */
export const Banner: React.FC<BannerProps> = ({ 
  imageSrc, 
  imageAlt = '', 
  heading,
  className = '' 
}) => {
  return (
    <div className={`${styles.banner} ${className}`}>
      <img 
        className={styles.banner__image} 
        src={imageSrc} 
        alt={imageAlt}
      />
      <div className={styles.banner__caption}>
        <h2 className={styles.banner__heading}>{heading}</h2>
      </div>
    </div>
  );
};

Banner.displayName = 'Banner';
