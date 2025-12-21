import React from 'react';
import { InfoPanelProps } from './InfoPanel.types';
import styles from './InfoPanel.module.scss';

/**
 * InfoPanel component - A panel with image background, heading, description and CTA link
 */
export const InfoPanel: React.FC<InfoPanelProps> = ({
  imageSrc,
  imageAlt = '',
  label,
  heading,
  info,
  link,
  className = '',
}) => {
  return (
    <div className={`${styles['info-panel']} ${className}`}>
      <img className={styles['info-panel__image']} src={imageSrc} alt={imageAlt} />
      
      <div className={styles['info-panel__caption']}>
        <span className={styles['info-panel__label']}>{label}</span>
        <h2 className={styles['info-panel__heading']}>{heading}</h2>
      </div>

      <div className={styles['info-panel__content']}>
        <p className={styles['info-panel__info']}>{info}</p>
        <a className={styles['info-panel__link']} href={link.href}>
          {link.label}
        </a>
      </div>
    </div>
  );
};

InfoPanel.displayName = 'InfoPanel';
