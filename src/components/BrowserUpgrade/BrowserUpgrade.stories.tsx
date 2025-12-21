import type { Meta, StoryObj } from '@storybook/react';
import { BrowserUpgrade } from './BrowserUpgrade';

const meta = {
  title: 'Components/BrowserUpgrade',
  component: BrowserUpgrade,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Warning message text',
    },
    upgradeUrl: {
      control: 'text',
      description: 'URL for browser upgrade',
    },
  },
} satisfies Meta<typeof BrowserUpgrade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomMessage: Story = {
  args: {
    message: 'Your browser is out of date!',
    upgradeUrl: 'https://browsehappy.com/',
  },
};
