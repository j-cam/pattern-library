import type { Meta, StoryObj } from '@storybook/react';
import { OptionSelector } from './OptionSelector';
import { useState } from 'react';

const meta = {
  title: 'Components/OptionSelector',
  component: OptionSelector,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OptionSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledExample = (args: any) => {
  const [selected, setSelected] = useState(args.value || args.options[0]?.value);
  
  return (
    <div>
      <OptionSelector {...args} value={selected} onChange={setSelected} />
      <p style={{ marginTop: '1rem' }}>Selected: {selected}</p>
    </div>
  );
};

export const ColorOptions: Story = {
  render: (args) => <ControlledExample {...args} />,
  args: {
    name: 'color',
    type: 'color',
    options: [
      { value: 'grey', label: 'Grey Heather', imageSrc: 'https://images.unsplash.com/photo-1620799140188-3b2a7f5fc42e?w=100&h=100&fit=crop' },
      { value: 'navy', label: 'Navy', imageSrc: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=100&h=100&fit=crop' },
      { value: 'black', label: 'Black', imageSrc: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop' },
      { value: 'pink', label: 'Pink', imageSrc: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=100&h=100&fit=crop' },
      { value: 'white', label: 'White', imageSrc: 'https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=100&h=100&fit=crop', available: false },
    ],
  },
};

export const SizeOptions: Story = {
  render: (args) => <ControlledExample {...args} />,
  args: {
    name: 'size',
    type: 'size',
    options: [
      { value: '1-2', label: '1/2' },
      { value: '3-4', label: '3/4' },
      { value: '4-5', label: '4/5' },
      { value: '5-6', label: '5/6' },
      { value: '7-8', label: '7/8' },
      { value: '9-10', label: '9/10', available: false },
    ],
  },
};

export const DefaultOptions: Story = {
  render: (args) => <ControlledExample {...args} />,
  args: {
    name: 'material',
    type: 'default',
    options: [
      { value: 'cotton', label: 'Cotton' },
      { value: 'wool', label: 'Wool' },
      { value: 'silk', label: 'Silk' },
      { value: 'linen', label: 'Linen' },
    ],
  },
};
