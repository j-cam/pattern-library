export type TileVariant = 'default' | 'grey' | 'pink' | 'blue';

export type TileContent = 
  | { type: 'image'; src: string; alt?: string; }
  | { type: 'text'; number?: string; title: string; info: string; };

export interface TileProps {
  /**
   * Content to display in the tile (image or text)
   */
  content: TileContent;
  /**
   * Color variant of the tile
   */
  variant?: TileVariant;
  /**
   * Optional CTA link
   */
  ctaLink?: {
    href: string;
    label: string;
  };
  /**
   * Additional CSS class name
   */
  className?: string;
}
