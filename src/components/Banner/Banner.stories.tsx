import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'text',
      description: 'URL or path to the banner image',
    },
    imageAlt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    heading: {
      control: 'text',
      description: 'Heading text to display on the banner',
    },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1024&h=350&fit=crop&blur=2',
    imageAlt: 'Abstract background',
    heading: 'Banner Module',
  },
};

export const WithLongHeading: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1024&h=350&fit=crop&blur=2',
    imageAlt: 'Abstract background',
    heading: 'Welcome to Our Pattern Library',
  },
};

export const DarkImage: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1024&h=350&fit=crop&blur=2',
    imageAlt: 'Dark abstract background',
    heading: 'Dark Banner',
  },
};
