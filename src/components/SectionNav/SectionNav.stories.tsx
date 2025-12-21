import type { Meta, StoryObj } from '@storybook/react';
import { SectionNav } from './SectionNav';

const meta = {
  title: 'Components/SectionNav',
  component: SectionNav,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SectionNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { label: 'full collection', href: '#', active: true },
      { label: 'tops', href: '#' },
      { label: 'bottoms', href: '#' },
      { label: 'dresses', href: '#' },
    ],
  },
};

export const ManyLinks: Story = {
  args: {
    links: [
      { label: 'all', href: '#', active: true },
      { label: 'tops', href: '#' },
      { label: 'bottoms', href: '#' },
      { label: 'dresses', href: '#' },
      { label: 'outerwear', href: '#' },
      { label: 'accessories', href: '#' },
      { label: 'shoes', href: '#' },
    ],
  },
};

export const DifferentActiveLink: Story = {
  args: {
    links: [
      { label: 'full collection', href: '#' },
      { label: 'tops', href: '#' },
      { label: 'bottoms', href: '#', active: true },
      { label: 'dresses', href: '#' },
    ],
  },
};
