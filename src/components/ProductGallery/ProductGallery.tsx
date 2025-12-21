import React, { useState } from 'react';
import { ProductGalleryProps } from './ProductGallery.types';
import styles from './ProductGallery.module.scss';

/**
 * ProductGallery component - Image gallery/slider for product photos
 */
export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  selectedIndex: controlledIndex,
  onImageClick,
  showThumbnails = true,
  className = '',
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const selectedIndex = controlledIndex ?? internalIndex;

  const handleImageClick = (index: number) => {
    if (onImageClick) {
      onImageClick(index);
    } else {
      setInternalIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = selectedIndex > 0 ? selectedIndex - 1 : images.length - 1;
    handleImageClick(newIndex);
  };

  const handleNext = () => {
    const newIndex = selectedIndex < images.length - 1 ? selectedIndex + 1 : 0;
    handleImageClick(newIndex);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.product_gallery} ${className}`}>
      <div className={styles.product_gallery__main}>
        <img
          src={images[selectedIndex].src}
          srcSet={images[selectedIndex].srcSet}
          alt={images[selectedIndex].alt || `Product image ${selectedIndex + 1}`}
          className={styles.product_gallery__main_image}
        />
        
        {images.length > 1 && (
          <>
            <button
              className={`${styles.product_gallery__nav} ${styles['product_gallery__nav--prev']}`}
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className={`${styles.product_gallery__nav} ${styles['product_gallery__nav--next']}`}
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}
      </div>

      {showThumbnails && images.length > 1 && (
        <div className={styles.product_gallery__thumbnails}>
          {images.map((image, index) => (
            <button
              key={index}
              className={`${styles.product_gallery__thumbnail} ${
                index === selectedIndex ? styles['product_gallery__thumbnail--active'] : ''
              }`}
              onClick={() => handleImageClick(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt || `Thumbnail ${index + 1}`}
                className={styles.product_gallery__thumbnail_image}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

ProductGallery.displayName = 'ProductGallery';
