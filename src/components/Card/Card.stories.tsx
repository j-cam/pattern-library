import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'blog', 'product'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlogCard: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    imageAlt: 'Blog post image',
    title: 'Blog post title goes here & might be long enough to break',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove...',
    href: '#',
    variant: 'blog',
  },
};

export const ProductCard: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop',
    imageAlt: 'Product image',
    title: 'grumpy little cardigan',
    metadata: '$24',
    href: '#',
    variant: 'product',
  },
};

export const DefaultCard: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop',
    imageAlt: 'Card image',
    title: 'Card Title',
    description: 'This is a description of the card content.',
    href: '#',
    variant: 'default',
  },
};
