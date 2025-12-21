# Pattern Library

A modern React component library built with TypeScript, Vite, and Storybook. This library provides a collection of reusable UI components for building web applications.

## Features

- 🚀 Built with **React 18** and **TypeScript**
- 📦 **Vite** for fast development and optimized builds
- 📚 **Storybook 8** for component documentation and testing
- 💅 **SCSS Modules** for scoped styling
- 🎨 Responsive and accessible components
- 📱 Mobile-first design approach
- 🔧 Fully typed with TypeScript

## Components

### Layout Components
- **Banner** - Full-width image banner with centered text overlay
- **Hero** - Responsive hero image with picture element support
- **Tile** - Square tiles that display images or text content with multiple color variants
- **NavBar** - Responsive navigation bar with logo and links
- **InfoPanel** - Panel with image background, heading, description and CTA link

### Navigation Components
- **Pagination** - Navigation controls for paginated content
- **SectionNav** - Horizontal navigation for filtering/categorizing content

### Content Components
- **Card** - Reusable card for blog posts, products, or general content
- **Grid** - Responsive grid layout for displaying collections

### Utility Components
- **BrowserUpgrade** - Warning message for outdated browsers

## Composed Layouts

The library includes example layouts in Storybook showing how to compose components:
- **HomePage** - Landing page with hero, tiles, and info panel
- **BlogPage** - Blog listing with grid, cards, and pagination
- **ShopPage** - E-commerce page with product grids and categories

## Installation

```bash
npm install @j-cam/pattern-library
```

Or with yarn:

```bash
yarn add @j-cam/pattern-library
```

## Usage

### Importing Components

```tsx
import { Banner, Hero, Tile, NavBar } from '@j-cam/pattern-library';
import '@j-cam/pattern-library/styles';
```

### Banner Example

```tsx
<Banner
  imageSrc="https://example.com/banner.jpg"
  imageAlt="Beautiful landscape"
  heading="Welcome to Our Site"
/>
```

### Hero Example

```tsx
<Hero
  imageSrcMobile="https://example.com/hero-mobile.jpg"
  imageSrcDesktop="https://example.com/hero-desktop.jpg"
  imageAlt="Hero background"
  heading="Hero Module"
/>
```

### Tile Example

```tsx
<Tile
  content={{
    type: 'text',
    number: '#1',
    title: 'Tile Title',
    info: 'Tile description text goes here.'
  }}
  variant="grey"
/>
```

### NavBar Example

```tsx
<NavBar
  logoAlt="Company Name"
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]}
/>
```

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/j-cam/pattern-library.git
cd pattern-library
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook for development:
```bash
npm run dev
```

This will start Storybook at `http://localhost:6006`

### Available Scripts

- `npm run dev` - Start Storybook development server
- `npm run build` - Build the library for production
- `npm run build-storybook` - Build Storybook for deployment
- `npm run lint` - Lint the codebase
- `npm run type-check` - Run TypeScript type checking

### Building the Library

To build the library for production:

```bash
npm run build
```

This will create optimized files in the `dist` directory:
- `dist/index.js` - ES module build
- `dist/index.cjs` - CommonJS build
- `dist/index.d.ts` - TypeScript definitions
- `dist/style.css` - Bundled styles

## Project Structure

```
pattern-library/
├── .storybook/          # Storybook configuration
├── src/
│   ├── components/      # React components
│   │   ├── Banner/
│   │   ├── Hero/
│   │   ├── Tile/
│   │   └── NavBar/
│   ├── styles/          # Global styles and variables
│   │   ├── _variables.scss
│   │   └── global.scss
│   └── index.ts         # Main export file
├── package.json
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md
```

## TypeScript

All components are fully typed with TypeScript. Import types alongside components:

```tsx
import { Banner, type BannerProps } from '@j-cam/pattern-library';

const MyBanner: React.FC<BannerProps> = (props) => {
  return <Banner {...props} />;
};
```

## Styling

Components use SCSS modules for styling. Global styles and design tokens are available in `src/styles/`.

To customize styles, you can override CSS custom properties:

```css
:root {
  --color-primary: #your-color;
  --font-sans: 'Your Font', sans-serif;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

GPL-2.0

## Author

Jamie Campbell

## Links

- [GitHub Repository](https://github.com/j-cam/pattern-library)
- [Issue Tracker](https://github.com/j-cam/pattern-library/issues)

