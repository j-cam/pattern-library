export interface NavLink {
  label: string;
  href: string;
}

export interface NavBarProps {
  /**
   * Logo image source
   */
  logoSrc?: string;
  /**
   * Logo alt text
   */
  logoAlt?: string;
  /**
   * Logo link (default: '/')
   */
  logoHref?: string;
  /**
   * Navigation links
   */
  links: NavLink[];
  /**
   * Additional CSS class name
   */
  className?: string;
  /**
   * Callback when a link is clicked
   */
  onLinkClick?: (link: NavLink) => void;
}
