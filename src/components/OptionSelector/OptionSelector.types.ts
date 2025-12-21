export interface OptionItem {
  value: string;
  label: string;
  imageSrc?: string;
  available?: boolean;
}

export interface OptionSelectorProps {
  /**
   * Label for the option group
   */
  label?: string;
  /**
   * Option items to display
   */
  options: OptionItem[];
  /**
   * Selected value
   */
  value?: string;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Option type
   */
  type?: 'color' | 'size' | 'default';
  /**
   * Input name attribute
   */
  name: string;
  /**
   * Additional CSS class name
   */
  className?: string;
}
