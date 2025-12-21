import type { Meta, StoryObj } from '@storybook/react';
import { InfoPanel } from './InfoPanel';

const meta = {
  title: 'Components/InfoPanel',
  component: InfoPanel,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    imageSrc: {
      control: 'text',
      description: 'Background image URL',
    },
    label: {
      control: 'text',
      description: 'Label text above heading',
    },
    heading: {
      control: 'text',
      description: 'Main heading',
    },
    info: {
      control: 'text',
      description: 'Descriptive text',
    },
  },
} satisfies Meta<typeof InfoPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=1024&h=768&fit=crop',
    imageAlt: 'Background image',
    label: 'Info Panel',
    heading: 'module',
    info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    link: {
      label: 'learn more',
      href: '#',
    },
  },
};

export const ShortContent: Story = {
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1024&h=768&fit=crop',
    imageAlt: 'Background image',
    label: 'Featured',
    heading: 'Content',
    info: 'Brief description of the content.',
    link: {
      label: 'Read more',
      href: '#',
    },
  },
};
