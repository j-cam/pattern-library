import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';
import { SectionNav } from '../components/SectionNav';
import { InfoPanel } from '../components/InfoPanel';

const meta = {
  title: 'Layouts/ShopPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ShopPageLayout = () => {
  const products = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop',
      title: 'Essential Cardigan',
      metadata: '$48',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
      title: 'Classic T-Shirt',
      metadata: '$24',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1620799140188-3b2a7f5fc42e?w=400&h=400&fit=crop',
      title: 'Cozy Sweater',
      metadata: '$68',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
      title: 'Denim Jacket',
      metadata: '$92',
      href: '#',
    },
  ];

  const accessories = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      title: 'Leather Bag',
      metadata: '$156',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1509941943102-10c232535736?w=400&h=400&fit=crop',
      title: 'Canvas Tote',
      metadata: '$32',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
      title: 'Sunglasses',
      metadata: '$78',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1611923134239-4b664f3c648d?w=400&h=400&fit=crop',
      title: 'Watch',
      metadata: '$245',
      href: '#',
    },
  ];

  return (
    <div>
      <NavBar
        logoAlt="Shop"
        links={[
          { label: 'Shop', href: '/shop' },
          { label: 'Collections', href: '/collections' },
          { label: 'About', href: '/about' },
          { label: 'Cart', href: '/cart' },
        ]}
      />
      
      <Banner
        imageSrc="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
        heading="Spring Collection"
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <SectionNav
          links={[
            { label: 'All Products', href: '#', active: true },
            { label: 'Clothing', href: '#' },
            { label: 'Accessories', href: '#' },
            { label: 'Sale', href: '#' },
          ]}
        />

        <Grid columns={4} gap="md" heading="Clothing">
          {products.map((product, index) => (
            <Card
              key={index}
              {...product}
              variant="product"
            />
          ))}
        </Grid>

        <InfoPanel
          imageSrc="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop"
          label="New Arrivals"
          heading="Summer 2025"
          info="Discover our latest collection featuring sustainable materials and timeless designs. Shop now and enjoy free shipping on orders over $100."
          link={{ label: 'Shop New Arrivals', href: '#' }}
        />

        <Grid columns={4} gap="md" heading="Accessories">
          {accessories.map((product, index) => (
            <Card
              key={index}
              {...product}
              variant="product"
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <ShopPageLayout />,
};
