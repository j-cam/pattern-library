import React from 'react';
import { TileProps } from './Tile.types';
import styles from './Tile.module.scss';

/**
 * Tile component - A square tile that can display either an image or text content
 * Supports multiple color variants and optional CTA links
 */
export const Tile: React.FC<TileProps> = ({ 
  content,
  variant = 'default',
  ctaLink,
  className = '' 
}) => {
  const variantClass = variant !== 'default' ? styles[`tile__box--${variant}`] : '';
  
  return (
    <div className={`${styles.tile__box} ${variantClass} ${className}`}>
      <div className={styles.tile__content_wrap}>
        {ctaLink && (
          <div className={styles.tile__cta_link_wrap}>
            <a className={styles.tile__cta_link} href={ctaLink.href}>
              <span>{ctaLink.label}</span>
            </a>
          </div>
        )}
        <div className={styles.tile__table}>
          {content.type === 'image' ? (
            <img 
              className={styles.tile__image} 
              src={content.src} 
              alt={content.alt || ''}
            />
          ) : (
            <span className={`${styles.tile__table_cell} ${styles['tile__table_cell--has_text']}`}>
              {content.number && <span className={styles.tile__number}>{content.number}</span>}
              <span className={styles.tile__title}>{content.title}</span>
              <span className={styles.tile__info}>{content.info}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Tile.displayName = 'Tile';
