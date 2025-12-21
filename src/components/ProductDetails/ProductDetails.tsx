import React from 'react';
import { ProductDetailsProps } from './ProductDetails.types';
import styles from './ProductDetails.module.scss';

/**
 * ProductDetails component - Displays product information including title, price, description, and details
 */
export const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  price,
  compareAtPrice,
  description,
  details,
  inStock = true,
  sku,
  className = '',
}) => {
  const hasDiscount = compareAtPrice && parseFloat(compareAtPrice.replace(/[^0-9.]/g, '')) > parseFloat(price.replace(/[^0-9.]/g, ''));

  return (
    <div className={`${styles.product_details} ${className}`}>
      <h1 className={styles.product_details__title}>{title}</h1>

      <div className={styles.product_details__pricing}>
        <div className={styles.product_details__price_group}>
          <span className={`${styles.product_details__price} ${hasDiscount ? styles['product_details__price--sale'] : ''}`}>
            {price}
          </span>
          {hasDiscount && compareAtPrice && (
            <span className={styles.product_details__compare_price}>
              {compareAtPrice}
            </span>
          )}
        </div>

        <div className={styles.product_details__stock}>
          <span className={`${styles.product_details__stock_indicator} ${inStock ? styles['product_details__stock_indicator--in_stock'] : styles['product_details__stock_indicator--out_of_stock']}`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </span>
          {sku && (
            <span className={styles.product_details__sku}>SKU: {sku}</span>
          )}
        </div>
      </div>

      {description && (
        <div className={styles.product_details__description}>
          <p>{description}</p>
        </div>
      )}

      {details && details.length > 0 && (
        <div className={styles.product_details__details}>
          <h3 className={styles.product_details__details_title}>Product Details</h3>
          <dl className={styles.product_details__details_list}>
            {details.map((detail, index) => (
              <div key={index} className={styles.product_details__detail_item}>
                <dt className={styles.product_details__detail_label}>{detail.label}</dt>
                <dd className={styles.product_details__detail_value}>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
};

ProductDetails.displayName = 'ProductDetails';
