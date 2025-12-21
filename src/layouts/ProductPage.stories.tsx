import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { ProductGallery } from '../components/ProductGallery';
import { ProductDetails } from '../components/ProductDetails';
import { ProductOptions } from '../components/ProductOptions';
import { Button } from '../components/Button';
import '../styles/style.scss';

const meta = {
  title: 'Layouts/ProductPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProductImages = [
  {
    src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop',
    alt: 'Black leather jacket - front view',
  },
  {
    src: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=800&fit=crop',
    alt: 'Black leather jacket - side view',
  },
  {
    src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&fit=crop',
    alt: 'Black leather jacket - back view',
  },
  {
    src: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=800&fit=crop',
    alt: 'Black leather jacket - detail',
  },
];

const ProductPageTemplate = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('m');
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="page">
      <NavBar
        logoSrc="https://via.placeholder.com/150x40?text=Fashion+Co."
        logoAlt="Fashion Co."
        links={[
          { label: 'Shop', href: '#shop' },
          { label: 'About', href: '#about' },
          { label: 'Contact', href: '#contact' },
        ]}
      />

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
      }}>
        {/* Left Column - Gallery */}
        <div>
          <ProductGallery images={sampleProductImages} showThumbnails />
        </div>

        {/* Right Column - Product Info */}
        <div>
          <ProductDetails
            title="Classic Leather Jacket"
            price="$249.99"
            compareAtPrice="$349.99"
            description="Premium leather jacket with a timeless design. Features multiple pockets, zip closure, and a comfortable fit perfect for any season. Made from 100% genuine leather with a soft polyester lining."
            inStock
            sku="LJ-001-BLK"
            details={[
              { label: 'Material', value: '100% Genuine Leather' },
              { label: 'Lining', value: 'Polyester' },
              { label: 'Care', value: 'Professional leather clean only' },
              { label: 'Fit', value: 'Regular fit' },
              { label: 'Origin', value: 'Made in Italy' },
              { label: 'Closure', value: 'Full zip with snap buttons' },
            ]}
          />

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5' }}>
            <ProductOptions
              colorOptions={[
                { label: 'Black', value: 'black', imageSrc: 'https://via.placeholder.com/50/000000/000000' },
                { label: 'Brown', value: 'brown', imageSrc: 'https://via.placeholder.com/50/8B4513/8B4513' },
                { label: 'Navy', value: 'navy', imageSrc: 'https://via.placeholder.com/50/000080/000080' },
              ]}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              sizeOptions={[
                { label: 'XS', value: 'xs' },
                { label: 'S', value: 's' },
                { label: 'M', value: 'm' },
                { label: 'L', value: 'l' },
                { label: 'XL', value: 'xl' },
                { label: 'XXL', value: 'xxl', available: false },
              ]}
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
            />

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <label htmlFor="quantity" style={{ fontWeight: 600 }}>Qty:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  style={{
                    width: '60px',
                    padding: '0.5rem',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <Button variant="primary" size="lg" fullWidth>
                Add to Cart
              </Button>
            </div>

            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <Button variant="secondary" fullWidth>
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .page > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export const Default: Story = {
  render: ProductPageTemplate,
};
