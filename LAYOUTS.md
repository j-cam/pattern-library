# Layout Examples

This pattern library includes example layouts demonstrating how to compose components together to create complete page designs.

## 🏗️ Component Composition

The library follows a **composition-based** approach where simple components can be combined to create complex layouts:

```
Simple Components → Composed Layouts → Complete Pages
```

## 📦 Available Components

### Building Blocks
- **Card** - Reusable content card
- **Grid** - Responsive grid container
- **Banner** - Full-width image with text
- **Hero** - Large header section
- **Tile** - Square content blocks
- **InfoPanel** - Feature showcase panel
- **NavBar** - Site navigation
- **Pagination** - Page navigation
- **SectionNav** - Category navigation
- **BrowserUpgrade** - Browser warning

## 🎨 Example Layouts

### 1. HomePage Layout

**Components Used:**
- `NavBar` - Site navigation
- `Hero` - Main header
- `Tile` (x4) - Feature showcase
- `Banner` - Call-to-action
- `InfoPanel` - Additional information

**Use Case:** Marketing pages, landing pages, portfolio homepages

**Code Example:**
```tsx
import { NavBar, Hero, Tile, Banner, InfoPanel } from '@j-cam/pattern-library';

function HomePage() {
  return (
    <>
      <NavBar logoAlt="Brand" links={[...]} />
      <Hero imageSrc="hero.jpg" heading="Welcome" />
      
      <Grid columns={2}>
        <Tile content={{ type: 'image', src: 'feature1.jpg' }} />
        <Tile content={{ type: 'text', title: 'Feature 1', info: '...' }} variant="grey" />
        <Tile content={{ type: 'text', title: 'Feature 2', info: '...' }} variant="pink" />
        <Tile content={{ type: 'image', src: 'feature2.jpg' }} />
      </Grid>
      
      <Banner imageSrc="cta.jpg" heading="Get Started" />
      <InfoPanel {...infoProps} />
    </>
  );
}
```

### 2. BlogPage Layout

**Components Used:**
- `NavBar` - Site navigation
- `Hero` - Page header
- `SectionNav` - Category filters
- `Grid` + `Card` - Blog post listing
- `Pagination` - Navigate between pages

**Use Case:** Blog, news sites, article listings

**Code Example:**
```tsx
import { NavBar, Hero, SectionNav, Grid, Card, Pagination } from '@j-cam/pattern-library';

function BlogPage() {
  const posts = [...]; // Your blog posts data
  
  return (
    <>
      <NavBar logoAlt="Blog" links={[...]} />
      <Hero imageSrc="blog-hero.jpg" heading="Our Blog" />
      
      <SectionNav 
        links={[
          { label: 'All Posts', href: '#', active: true },
          { label: 'Technology', href: '#' },
          { label: 'Design', href: '#' },
        ]}
      />
      
      <Grid columns={3}>
        {posts.map(post => (
          <Card
            key={post.id}
            imageSrc={post.image}
            title={post.title}
            description={post.excerpt}
            href={post.url}
            variant="blog"
          />
        ))}
      </Grid>
      
      <Pagination currentPage={1} totalPages={5} />
    </>
  );
}
```

### 3. ShopPage Layout

**Components Used:**
- `NavBar` - Site navigation
- `Banner` - Campaign header
- `SectionNav` - Product categories
- `Grid` + `Card` - Product listings (multiple sections)
- `InfoPanel` - Featured collection

**Use Case:** E-commerce, product catalogs, online stores

**Code Example:**
```tsx
import { NavBar, Banner, SectionNav, Grid, Card, InfoPanel } from '@j-cam/pattern-library';

function ShopPage() {
  const clothing = [...]; // Product data
  const accessories = [...]; // Product data
  
  return (
    <>
      <NavBar logoAlt="Shop" links={[...]} />
      <Banner imageSrc="sale.jpg" heading="Spring Sale" />
      
      <SectionNav 
        links={[
          { label: 'All', href: '#', active: true },
          { label: 'Clothing', href: '#' },
          { label: 'Accessories', href: '#' },
        ]}
      />
      
      <Grid columns={4} heading="Clothing">
        {clothing.map(product => (
          <Card
            key={product.id}
            imageSrc={product.image}
            title={product.name}
            metadata={product.price}
            href={product.url}
            variant="product"
          />
        ))}
      </Grid>
      
      <InfoPanel {...featuredCollection} />
      
      <Grid columns={4} heading="Accessories">
        {accessories.map(product => (
          <Card {...product} variant="product" />
        ))}
      </Grid>
    </>
  );
}
```

## 🎯 Composition Patterns

### Pattern 1: Card Grid
Combine `Grid` + `Card` for any collection of items:

```tsx
<Grid columns={3} gap="lg">
  {items.map(item => (
    <Card {...item} variant="blog" />
  ))}
</Grid>
```

### Pattern 2: Tile Showcase
Use `Tile` components for feature/benefit sections:

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
  <Tile content={{ type: 'image', src: '...' }} />
  <Tile content={{ type: 'text', title: '...', info: '...' }} variant="grey" />
</div>
```

### Pattern 3: Hero + Content
Standard page header pattern:

```tsx
<Hero imageSrc="..." heading="Page Title" />
<SectionNav links={[...]} />
<Grid>{/* content */}</Grid>
```

### Pattern 4: Alternating Content
Mix content types for visual interest:

```tsx
<Hero {...heroProps} />
<Grid>{/* cards */}</Grid>
<InfoPanel {...panelProps} />
<Grid>{/* more cards */}</Grid>
<Banner {...ctaProps} />
```

## 📱 Responsive Behavior

All layouts are **mobile-first** and fully responsive:

- **Grid**: Automatically adjusts columns based on viewport
  - 4 cols → 3 cols → 2 cols → 1 col
- **NavBar**: Collapses to mobile menu on small screens
- **Hero/Banner**: Switches between mobile and desktop images
- **Tiles**: Stack vertically on mobile
- **Cards**: Optimize image sizes for viewport

## 🔧 Customization

### Layout Container
Wrap your layout in a container for consistent max-width:

```tsx
<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
  {/* Your components */}
</div>
```

### Spacing
Add spacing between sections:

```tsx
<div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
  <InfoPanel {...props} />
</div>
```

### Grid Variations
Customize grid layouts:

```tsx
// Different column counts
<Grid columns={2} gap="lg">{/* 2-column layout */}</Grid>
<Grid columns={3} gap="md">{/* 3-column layout */}</Grid>
<Grid columns={4} gap="sm">{/* 4-column layout */}</Grid>

// With headings
<Grid columns={3} heading="Featured Products">{/* ... */}</Grid>
```

## 🚀 Best Practices

1. **Start with NavBar**: Every page should begin with navigation
2. **Use Hero/Banner for headers**: Establish page context immediately
3. **Grid for collections**: Use Grid + Card for any list of items
4. **Break up content**: Alternate between different component types
5. **End with CTA**: Use Banner or InfoPanel to guide users to action
6. **Consider spacing**: Add margins between major sections
7. **Mobile-first**: Design for mobile, enhance for desktop

## 📚 View in Storybook

All layout examples are available in Storybook:

```bash
npm run dev
```

Navigate to:
- **Layouts → HomePage**
- **Layouts → BlogPage**
- **Layouts → ShopPage**

## 💡 Creating Custom Layouts

Mix and match components to create your own layouts:

```tsx
import { 
  NavBar, 
  Hero, 
  Grid, 
  Card, 
  Tile, 
  InfoPanel, 
  Banner,
  Pagination,
  SectionNav 
} from '@j-cam/pattern-library';

function CustomPage() {
  // Compose components however you need!
  return (
    <>
      <NavBar {...} />
      <Hero {...} />
      {/* Your unique combination */}
    </>
  );
}
```

The component library is designed to be **flexible and composable** - create any layout you can imagine!
