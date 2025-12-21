import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    logoSrc: {
      control: 'text',
      description: 'Logo image source',
    },
    logoAlt: {
      control: 'text',
      description: 'Logo alt text',
    },
    logoHref: {
      control: 'text',
      description: 'Logo link URL',
    },
    onLinkClick: { action: 'link clicked' },
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoAlt: 'Pattern Library',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Components', href: '/components' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const WithLogo: Story = {
  args: {
    logoSrc: 'https://via.placeholder.com/150x50/333333/ffffff?text=LOGO',
    logoAlt: 'Company Logo',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Docs', href: '/docs' },
    ],
  },
};

export const MinimalLinks: Story = {
  args: {
    logoAlt: 'Brand',
    links: [
      { label: 'Shop', href: '/shop' },
      { label: 'About', href: '/about' },
    ],
  },
};

export const ManyLinks: Story = {
  args: {
    logoAlt: 'Site Name',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Support', href: '/support' },
    ],
  },
};
