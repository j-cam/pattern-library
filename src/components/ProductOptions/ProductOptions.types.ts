import { OptionItem } from '../OptionSelector/OptionSelector.types';

export interface ProductOptionsProps {
  /**
   * Available color options
   */
  colorOptions?: OptionItem[];
  /**
   * Selected color value
   */
  selectedColor?: string;
  /**
   * Callback when color is selected
   */
  onColorChange?: (value: string) => void;
  /**
   * Available size options
   */
  sizeOptions?: OptionItem[];
  /**
   * Selected size value
   */
  selectedSize?: string;
  /**
   * Callback when size is selected
   */
  onSizeChange?: (value: string) => void;
  /**
   * Available material options
   */
  materialOptions?: OptionItem[];
  /**
   * Selected material value
   */
  selectedMaterial?: string;
  /**
   * Callback when material is selected
   */
  onMaterialChange?: (value: string) => void;
  /**
   * Additional CSS class name
   */
  className?: string;
}
