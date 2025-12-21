import type { Meta, StoryObj } from '@storybook/react';
import { ProductOptions } from './ProductOptions';
import { useState } from 'react';

const meta = {
  title: 'Components/ProductOptions',
  component: ProductOptions,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorOptions: [
      { label: 'Black', value: 'black', imageSrc: 'https://via.placeholder.com/50/000000/000000' },
      { label: 'Brown', value: 'brown', imageSrc: 'https://via.placeholder.com/50/8B4513/8B4513' },
      { label: 'Navy', value: 'navy', imageSrc: 'https://via.placeholder.com/50/000080/000080' },
    ],
    selectedColor: 'black',
    sizeOptions: [
      { label: 'XS', value: 'xs' },
      { label: 'S', value: 's' },
      { label: 'M', value: 'm' },
      { label: 'L', value: 'l' },
      { label: 'XL', value: 'xl', available: false },
    ],
    selectedSize: 'm',
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState('black');
    const [selectedSize, setSelectedSize] = useState('m');
    const [selectedMaterial, setSelectedMaterial] = useState('leather');

    return (
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
          { label: 'XL', value: 'xl', available: false },
        ]}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
        materialOptions={[
          { label: 'Genuine Leather', value: 'leather' },
          { label: 'Vegan Leather', value: 'vegan' },
          { label: 'Suede', value: 'suede' },
        ]}
        selectedMaterial={selectedMaterial}
        onMaterialChange={setSelectedMaterial}
      />
    );
  },
};

export const ColorOnly: Story = {
  args: {
    colorOptions: [
      { label: 'Black', value: 'black', imageSrc: 'https://via.placeholder.com/50/000000/000000' },
      { label: 'Brown', value: 'brown', imageSrc: 'https://via.placeholder.com/50/8B4513/8B4513' },
      { label: 'Navy', value: 'navy', imageSrc: 'https://via.placeholder.com/50/000080/000080' },
      { label: 'Red', value: 'red', imageSrc: 'https://via.placeholder.com/50/DC143C/DC143C', available: false },
    ],
    selectedColor: 'black',
  },
};

export const SizeOnly: Story = {
  args: {
    sizeOptions: [
      { label: 'XS', value: 'xs' },
      { label: 'S', value: 's' },
      { label: 'M', value: 'm' },
      { label: 'L', value: 'l' },
      { label: 'XL', value: 'xl' },
      { label: 'XXL', value: 'xxl' },
    ],
    selectedSize: 'm',
  },
};
