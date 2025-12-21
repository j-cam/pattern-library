export interface InfoPanelProps {
  /**
   * Image source for the background
   */
  imageSrc: string;
  /**
   * Alt text for the image
   */
  imageAlt?: string;
  /**
   * Label text (appears above heading)
   */
  label: string;
  /**
   * Main heading text
   */
  heading: string;
  /**
   * Descriptive text content
   */
  info: string;
  /**
   * Link configuration
   */
  link: {
    label: string;
    href: string;
  };
  /**
   * Additional CSS class name
   */
  className?: string;
}
