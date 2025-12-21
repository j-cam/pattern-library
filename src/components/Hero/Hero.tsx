import React from 'react';
import { HeroProps } from './Hero.types';
import styles from './Hero.module.scss';

/**
 * Hero component - A responsive hero image with centered text overlay
 * Uses picture element for responsive images
 */
export const Hero: React.FC<HeroProps> = ({ 
  imageSrcMobile, 
  imageSrcDesktop,
  imageAlt = '', 
  heading,
  className = '' 
}) => {
  return (
    <div className={`${styles.hero} ${className}`}>
      <picture>
        <source srcSet={imageSrcDesktop} media="(min-width: 600px)" />
        <img 
          className={styles.hero__image} 
          srcSet={imageSrcMobile}
          alt={imageAlt}
        />
      </picture>
      <div className={styles.hero__caption}>
        <h2 className={styles.hero__heading}>{heading}</h2>
      </div>
    </div>
  );
};

Hero.displayName = 'Hero';
