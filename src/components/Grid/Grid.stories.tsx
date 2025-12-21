import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Card } from '../Card';

const meta = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCards = [
  <Card
    key="1"
    imageSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop"
    title="First Item"
    description="Description for the first item"
    href="#"
  />,
  <Card
    key="2"
    imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    title="Second Item"
    description="Description for the second item"
    href="#"
  />,
  <Card
    key="3"
    imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    title="Third Item"
    description="Description for the third item"
    href="#"
  />,
  <Card
    key="4"
    imageSrc="https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop"
    title="Fourth Item"
    description="Description for the fourth item"
    href="#"
  />,
  <Card
    key="5"
    imageSrc="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=400&h=300&fit=crop"
    title="Fifth Item"
    description="Description for the fifth item"
    href="#"
  />,
  <Card
    key="6"
    imageSrc="https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=400&h=300&fit=crop"
    title="Sixth Item"
    description="Description for the sixth item"
    href="#"
  />,
];

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    gap: 'md',
    children: sampleCards,
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: 'lg',
    children: sampleCards.slice(0, 4),
  },
};

export const WithHeading: Story = {
  args: {
    columns: 3,
    gap: 'md',
    heading: 'Featured Collection',
    children: sampleCards,
  },
};
