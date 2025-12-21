export interface CardProps {
  /**
   * Image source URL
   */
  imageSrc: string;
  /**
   * Image alt text
   */
  imageAlt?: string;
  /**
   * Card title/heading
   */
  title: string;
  /**
   * Card description/excerpt
   */
  description?: string;
  /**
   * Link URL
   */
  href: string;
  /**
   * Optional metadata (e.g., price, date, category)
   */
  metadata?: string;
  /**
   * Card variant
   */
  variant?: 'blog' | 'product' | 'default';
  /**
   * Additional CSS class name
   */
  className?: string;
}
