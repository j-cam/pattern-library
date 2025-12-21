import React from 'react';
import { CardProps } from './Card.types';
import styles from './Card.module.scss';

/**
 * Card component - Reusable card for blog posts, products, or general content
 */
export const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  href,
  metadata,
  variant = 'default',
  className = '',
}) => {
  return (
    <div className={`${styles.item} ${styles[`item--${variant}`]} ${className}`}>
      <div className={styles.item__wrap}>
        <a className={styles.item__image_link} href={href}>
          <img
            className={styles.item__image}
            src={imageSrc}
            alt={imageAlt}
          />
        </a>
        <div className={styles.item__info}>
          <h3 className={styles.item__title}>
            <a href={href}>{title}</a>
          </h3>
          {description && (
            <div className={styles.item__description}>
              <p>{description}</p>
            </div>
          )}
          {metadata && (
            <div className={styles.item__metadata}>{metadata}</div>
          )}
        </div>
      </div>
    </div>
  );
};

Card.displayName = 'Card';
