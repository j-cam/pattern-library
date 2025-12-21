import React from 'react';
import { BrowserUpgradeProps } from './BrowserUpgrade.types';
import styles from './BrowserUpgrade.module.scss';

/**
 * BrowserUpgrade component - Warning message for outdated browsers
 */
export const BrowserUpgrade: React.FC<BrowserUpgradeProps> = ({
  message = 'You are using an outdated browser.',
  upgradeUrl = 'http://browsehappy.com/',
  className = '',
}) => {
  return (
    <p className={`${styles.browserupgrade} ${className}`}>
      {message}{' '}
      Please{' '}
      <a href={upgradeUrl} target="_blank" rel="noopener noreferrer">
        upgrade your browser
      </a>{' '}
      to improve your experience.
    </p>
  );
};

BrowserUpgrade.displayName = 'BrowserUpgrade';
