export interface ProductImage {
  src: string;
  alt?: string;
  srcSet?: string;
}

export interface ProductGalleryProps {
  /**
   * Array of product images
   */
  images: ProductImage[];
  /**
   * Currently selected image index
   */
  selectedIndex?: number;
  /**
   * Callback when image is clicked
   */
  onImageClick?: (index: number) => void;
  /**
   * Show thumbnails
   */
  showThumbnails?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
}
