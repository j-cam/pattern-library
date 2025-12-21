import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from './Tile';

const meta = {
  title: 'Components/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageTile: Story = {
  args: {
    content: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=600&fit=crop',
      alt: 'Abstract pattern',
    },
    variant: 'default',
  },
};

export const TextTileGrey: Story = {
  args: {
    content: {
      type: 'text',
      number: '#1',
      title: 'Tile Title',
      info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    variant: 'grey',
  },
};

export const TextTilePink: Story = {
  args: {
    content: {
      type: 'text',
      number: '#2',
      title: 'Another One',
      info: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    },
    variant: 'pink',
  },
};

export const TextTileBlue: Story = {
  args: {
    content: {
      type: 'text',
      number: '#3',
      title: 'Blue Tile',
      info: 'This is a blue variant tile with some descriptive text.',
    },
    variant: 'blue',
  },
};

export const WithCTA: Story = {
  args: {
    content: {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=600&fit=crop',
      alt: 'Abstract pattern',
    },
    ctaLink: {
      href: '#',
      label: 'CTA LINK',
    },
  },
};

// Grid example
export const TileGrid: Story = {
  decorators: [
    () => (
      <div style={{ width: '800px', display: 'flex', flexWrap: 'wrap' }}>
        <Tile 
          content={{
            type: 'image',
            src: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=600&fit=crop',
          }} 
        />
        <Tile 
          content={{
            type: 'text',
            number: '#1',
            title: 'Tile Title',
            info: 'Far far away, behind the word mountains.',
          }}
          variant="grey"
        />
        <Tile 
          content={{
            type: 'text',
            number: '#2',
            title: 'Another One',
            info: 'Separated they live in Bookmarksgrove.',
          }}
          variant="pink"
        />
        <Tile 
          content={{
            type: 'image',
            src: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=600&h=600&fit=crop',
          }}
          ctaLink={{ href: '#', label: 'CTA LINK' }}
        />
      </div>
    ),
  ],
  args: {
    content: {
      type: 'text',
      title: 'Sample',
      info: 'Grid layout',
    },
  },
};
