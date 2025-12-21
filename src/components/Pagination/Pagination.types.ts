export interface PaginationProps {
  /**
   * Current page number
   */
  currentPage: number;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Callback when previous button is clicked
   */
  onPrevious?: () => void;
  /**
   * Callback when next button is clicked
   */
  onNext?: () => void;
  /**
   * Callback when back to top is clicked
   */
  onBackToTop?: () => void;
  /**
   * Show back to top link
   */
  showBackToTop?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
}
