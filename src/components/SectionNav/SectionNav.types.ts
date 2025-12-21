export interface SectionNavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface SectionNavProps {
  /**
   * Navigation links
   */
  links: SectionNavLink[];
  /**
   * Additional CSS class name
   */
  className?: string;
}
