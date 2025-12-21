import type { Meta, StoryObj } from '@storybook/react';
import { ProductDetails } from './ProductDetails';

const meta = {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Classic Leather Jacket',
    price: '$249.99',
    description: 'Premium leather jacket with a timeless design. Features multiple pockets, zip closure, and a comfortable fit perfect for any season.',
    inStock: true,
    sku: 'LJ-001-BLK',
  },
};

export const WithDiscount: Story = {
  args: {
    title: 'Classic Leather Jacket',
    price: '$199.99',
    compareAtPrice: '$249.99',
    description: 'Premium leather jacket with a timeless design. Features multiple pockets, zip closure, and a comfortable fit perfect for any season.',
    inStock: true,
    sku: 'LJ-001-BLK',
  },
};

export const OutOfStock: Story = {
  args: {
    title: 'Classic Leather Jacket',
    price: '$249.99',
    description: 'Premium leather jacket with a timeless design. Features multiple pockets, zip closure, and a comfortable fit perfect for any season.',
    inStock: false,
    sku: 'LJ-001-BLK',
  },
};

export const WithDetails: Story = {
  args: {
    title: 'Classic Leather Jacket',
    price: '$249.99',
    compareAtPrice: '$299.99',
    description: 'Premium leather jacket with a timeless design. Features multiple pockets, zip closure, and a comfortable fit perfect for any season.',
    inStock: true,
    sku: 'LJ-001-BLK',
    details: [
      { label: 'Material', value: '100% Genuine Leather' },
      { label: 'Lining', value: 'Polyester' },
      { label: 'Care', value: 'Professional leather clean only' },
      { label: 'Fit', value: 'Regular fit' },
      { label: 'Origin', value: 'Made in Italy' },
    ],
  },
};
