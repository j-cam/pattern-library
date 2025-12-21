import React from 'react';
import { ProductOptionsProps } from './ProductOptions.types';
import { OptionSelector } from '../OptionSelector';
import styles from './ProductOptions.module.scss';

/**
 * ProductOptions component - Combines multiple OptionSelector components for product variants
 */
export const ProductOptions: React.FC<ProductOptionsProps> = ({
  colorOptions,
  selectedColor,
  onColorChange,
  sizeOptions,
  selectedSize,
  onSizeChange,
  materialOptions,
  selectedMaterial,
  onMaterialChange,
  className = '',
}) => {
  const hasOptions = colorOptions || sizeOptions || materialOptions;

  if (!hasOptions) {
    return null;
  }

  return (
    <div className={`${styles.product_options} ${className}`}>
      {colorOptions && (
        <div className={styles.product_options__group}>
          <OptionSelector
            label="Color"
            name="color"
            type="color"
            options={colorOptions}
            value={selectedColor}
            onChange={onColorChange}
          />
        </div>
      )}

      {sizeOptions && (
        <div className={styles.product_options__group}>
          <OptionSelector
            label="Size"
            name="size"
            type="size"
            options={sizeOptions}
            value={selectedSize}
            onChange={onSizeChange}
          />
        </div>
      )}

      {materialOptions && (
        <div className={styles.product_options__group}>
          <OptionSelector
            label="Material"
            name="material"
            options={materialOptions}
            value={selectedMaterial}
            onChange={onMaterialChange}
          />
        </div>
      )}
    </div>
  );
};

ProductOptions.displayName = 'ProductOptions';
