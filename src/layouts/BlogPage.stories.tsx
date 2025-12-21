import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { Grid } from '../components/Grid';
import { Card } from '../components/Card';
import { Pagination } from '../components/Pagination';
import { SectionNav } from '../components/SectionNav';

const meta = {
  title: 'Layouts/BlogPage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const BlogPageLayout = () => {
  const blogPosts = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
      title: 'Getting Started with React Components',
      description: 'Learn how to build reusable React components with TypeScript and modern best practices. This comprehensive guide will take you through...',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      title: 'Design Systems and Pattern Libraries',
      description: 'Discover how to create and maintain a design system that scales with your organization. We cover everything from components to documentation...',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      title: 'Modern CSS with SCSS Modules',
      description: 'Explore the power of SCSS modules for scoped styling in React applications. Learn about BEM naming conventions and responsive design...',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop',
      title: 'TypeScript Best Practices',
      description: 'Master TypeScript with these proven best practices. From type definitions to generic constraints, improve your code quality...',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=400&h=300&fit=crop',
      title: 'Storybook for Component Development',
      description: 'Build and document your components in isolation with Storybook. Learn how to create interactive stories and test edge cases...',
      href: '#',
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1526666923127-b2970f64b422?w=400&h=300&fit=crop',
      title: 'Responsive Web Design Techniques',
      description: 'Create websites that look great on any device. Explore mobile-first design, breakpoints, and fluid layouts...',
      href: '#',
    },
  ];

  return (
    <div>
      <NavBar
        logoAlt="My Blog"
        links={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ]}
      />
      
      <Hero
        imageSrcMobile="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop"
        imageSrcDesktop="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=400&fit=crop"
        heading="Our Blog"
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <SectionNav
          links={[
            { label: 'All Posts', href: '#', active: true },
            { label: 'Technology', href: '#' },
            { label: 'Design', href: '#' },
            { label: 'Development', href: '#' },
          ]}
        />

        <Grid columns={3} gap="lg">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              {...post}
              variant="blog"
            />
          ))}
        </Grid>

        <Pagination
          currentPage={1}
          totalPages={5}
          showBackToTop={true}
        />
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <BlogPageLayout />,
};
