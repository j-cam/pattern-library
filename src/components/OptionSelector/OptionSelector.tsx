import React from 'react';
import { OptionSelectorProps } from './OptionSelector.types';
import styles from './OptionSelector.module.scss';

/**
 * OptionSelector component - Radio button group for product options (color, size, etc.)
 */
export const OptionSelector: React.FC<OptionSelectorProps> = ({
  label,
  options,
  value,
  onChange,
  type = 'default',
  name,
  className = '',
}) => {
  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <fieldset className={`${styles.option_selector} ${styles[`option_selector--${type}`]} ${className}`}>
      {label && <legend className={styles.option_selector__legend}>{label}</legend>}
      <div className={styles.option_selector__options}>
        {options.map((option, index) => {
          const inputId = `${name}-${index}`;
          const isSelected = value === option.value;
          const isAvailable = option.available !== false;

        return (
          <div
            key={option.value}
            className={`${styles.option} ${!isAvailable ? styles['option--unavailable'] : ''}`}
          >
            <input
              id={inputId}
              type="radio"
          name={name}
              value={option.value}
              checked={isSelected}
              onChange={() => handleChange(option.value)}
              disabled={!isAvailable}
              className={styles.option__input}
            />
            <label htmlFor={inputId} className={styles.option__label}>
              {option.imageSrc ? (
                <span className={styles.option__image_wrap}>
                  <img src={option.imageSrc} alt={option.label} className={styles.option__image} />
                </span>
              ) : (
                <span className={styles.option__text}>{option.label}</span>
              )}
            </label>
          </div>
        );
      })}
      </div>
    </fieldset>
  );
};

OptionSelector.displayName = 'OptionSelector';
