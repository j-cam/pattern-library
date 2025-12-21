import { ReactNode } from 'react';

export interface GridProps {
  /**
   * Grid items (children)
   */
  children: ReactNode;
  /**
   * Number of columns
   */
  columns?: 2 | 3 | 4;
  /**
   * Gap between items
   */
  gap?: 'sm' | 'md' | 'lg';
  /**
   * Optional heading above the grid
   */
  heading?: string;
  /**
   * Additional CSS class name
   */
  className?: string;
}
