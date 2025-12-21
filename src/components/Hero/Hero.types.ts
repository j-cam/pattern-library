export interface HeroProps {
  /**
   * Image source for mobile screens
   */
  imageSrcMobile: string;
  /**
   * Image source for desktop screens (min-width: 600px)
   */
  imageSrcDesktop: string;
  /**
   * Alt text for the image (for accessibility)
   */
  imageAlt?: string;
  /**
   * Heading text to display on the hero
   */
  heading: string;
  /**
   * Additional CSS class name
   */
  className?: string;
}
