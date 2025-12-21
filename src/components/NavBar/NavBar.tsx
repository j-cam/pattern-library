import React from 'react';
import { NavBarProps, NavLink } from './NavBar.types';
import styles from './NavBar.module.scss';

/**
 * NavBar component - A responsive navigation bar with logo and links
 */
export const NavBar: React.FC<NavBarProps> = ({ 
  logoSrc,
  logoAlt = 'Logo',
  logoHref = '/',
  links,
  className = '',
  onLinkClick
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    if (onLinkClick) {
      e.preventDefault();
      onLinkClick(link);
    }
  };

  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.navbar__wrapper}>
        <div className={styles.navbar__flex_container}>
          <div className={styles.navbar__logo_block}>
            <a href={logoHref} className={styles.navbar__logo_link}>
              {logoSrc ? (
                <img src={logoSrc} alt={logoAlt} className={styles.navbar__logo} />
              ) : (
                <span className={styles.navbar__logo_text}>{logoAlt}</span>
              )}
            </a>
          </div>
          
          <div className={styles.navbar__nav_block}>
            <ul className={styles.site_nav}>
              {links.map((link, index) => (
                <li key={index} className={styles.site_nav__item}>
                  <a 
                    href={link.href}
                    className={styles.site_nav__link}
                    onClick={(e) => handleLinkClick(e, link)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.displayName = 'NavBar';
