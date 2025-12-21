import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrcMobile: {
      control: 'text',
      description: 'Image source for mobile screens',
    },
    imageSrcDesktop: {
      control: 'text',
      description: 'Image source for desktop screens (min-width: 600px)',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    heading: {
      control: 'text',
      description: 'Heading text to display on the hero',
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrcMobile: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=400&fit=crop&blur=2',
    imageSrcDesktop: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1024&h=350&fit=crop&blur=2',
    imageAlt: 'Hero background',
    heading: 'Hero Module',
  },
};

export const Landscape: Story = {
  args: {
    imageSrcMobile: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&blur=2',
    imageSrcDesktop: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1024&h=350&fit=crop&blur=2',
    imageAlt: 'Mountain landscape',
    heading: 'Explore the Mountains',
  },
};

export const Urban: Story = {
  args: {
    imageSrcMobile: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&blur=2',
    imageSrcDesktop: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1024&h=350&fit=crop&blur=2',
    imageAlt: 'City skyline',
    heading: 'Urban Living',
  },
};
