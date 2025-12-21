import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current page number',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    showBackToTop: {
      control: 'boolean',
      description: 'Show back to top link',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 2,
    totalPages: 6,
    showBackToTop: true,
    onPrevious: () => console.log('Previous clicked'),
    onNext: () => console.log('Next clicked'),
    onBackToTop: () => console.log('Back to top clicked'),
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    showBackToTop: true,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    showBackToTop: true,
  },
};

export const WithoutBackToTop: Story = {
  args: {
    currentPage: 3,
    totalPages: 8,
    showBackToTop: false,
  },
};
