import type { Meta, StoryObj } from '@storybook/react';
import { ProductGallery } from './ProductGallery';

const meta = {
  title: 'Components/ProductGallery',
  component: ProductGallery,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductGallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleImages = [
  {
    src: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=600&fit=crop',
    alt: 'Product view 1',
  },
  {
    src: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
    alt: 'Product view 2',
  },
  {
    src: 'https://images.unsplash.com/photo-1620799140188-3b2a7f5fc42e?w=600&h=600&fit=crop',
    alt: 'Product view 3',
  },
  {
    src: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
    alt: 'Product view 4',
  },
];

export const Default: Story = {
  args: {
    images: sampleImages,
    showThumbnails: true,
  },
};

export const WithoutThumbnails: Story = {
  args: {
    images: sampleImages,
    showThumbnails: false,
  },
};

export const SingleImage: Story = {
  args: {
    images: [sampleImages[0]],
    showThumbnails: true,
  },
};
