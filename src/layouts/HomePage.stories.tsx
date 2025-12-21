import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { Tile } from '../components/Tile';
import { InfoPanel } from '../components/InfoPanel';
import { Banner } from '../components/Banner';

const meta = {
  title: 'Layouts/HomePage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const HomePageLayout = () => {
  return (
    <div>
      <NavBar
        logoAlt="Pattern Library"
        links={[
          { label: 'Home', href: '/' },
          { label: 'Features', href: '#features' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
      
            <Hero
        imageSrcMobile="https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=600&fit=crop"
        imageSrcDesktop="https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&h=600&fit=crop"
        heading="Welcome to Our Store"
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <Tile
            content={{
              type: 'image',
              src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop',
              alt: 'Analytics',
            }}
          />
          <Tile
            content={{
              type: 'text',
              number: '#1',
              title: 'Built for Developers',
              info: 'Create beautiful, responsive UIs with our comprehensive collection of React components. Fully typed with TypeScript and ready to use.',
            }}
            variant="grey"
          />
          <Tile
            content={{
              type: 'text',
              number: '#2',
              title: 'Design System Ready',
              info: 'Consistent design tokens, SCSS variables, and modular components make it easy to maintain your design system.',
            }}
            variant="pink"
          />
          <Tile
            content={{
              type: 'image',
              src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop',
              alt: 'Design',
            }}
          />
        </div>

        <Banner
          imageSrc="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&h=400&fit=crop"
          heading="Start Building Today"
        />

        <div style={{ marginTop: '3rem' }}>
          <InfoPanel
            imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop"
            label="Getting Started"
            heading="Documentation"
            info="Explore our comprehensive documentation and interactive examples in Storybook. Every component is fully documented with TypeScript types and usage examples."
            link={{ label: 'View Docs', href: '#' }}
          />
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <HomePageLayout />,
};
