import React from 'react';
import { SectionNavProps } from './SectionNav.types';
import styles from './SectionNav.module.scss';

/**
 * SectionNav component - Horizontal navigation for filtering/categorizing content
 */
export const SectionNav: React.FC<SectionNavProps> = ({ links, className = '' }) => {
  return (
    <div className={`${styles['section-nav']} ${className}`}>
      <nav className={styles['section-nav__nav']}>
        {links.map((link, index) => (
          <a
            key={index}
            className={`${styles['section-nav__link']} ${link.active ? styles.active : ''}`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

SectionNav.displayName = 'SectionNav';
