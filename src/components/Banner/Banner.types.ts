export interface BannerProps {
  /**
   * URL or path to the banner image
   */
  imageSrc: string;
  /**
   * Alt text for the image (for accessibility)
   */
  imageAlt?: string;
  /**
   * Heading text to display on the banner
   */
  heading: string;
  /**
   * Additional CSS class name
   */
  className?: string;
}
