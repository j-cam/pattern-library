export interface ProductDetail {
  label: string;
  value: string;
}

export interface ProductDetailsProps {
  /**
   * Product title
   */
  title: string;
  /**
   * Product price
   */
  price: string;
  /**
   * Optional compare at price
   */
  compareAtPrice?: string;
  /**
   * Product description
   */
  description?: string;
  /**
   * List of product details
   */
  details?: ProductDetail[];
  /**
   * Stock status
   */
  inStock?: boolean;
  /**
   * SKU or product code
   */
  sku?: string;
  /**
   * Additional CSS class name
   */
  className?: string;
}
