# Migration Guide: Gulp to React + Storybook

This guide will help you understand the changes made during the modernization of the pattern library.

## Overview of Changes

### Technology Stack

**Before:**
- Gulp for build system
- Nunjucks templates
- jQuery
- Plain JavaScript
- SCSS compilation via Gulp

**After:**
- Vite for build system
- React components with TypeScript
- Modern JavaScript (ES2020+)
- SCSS Modules
- Storybook for component development

## Key Differences

### 1. Component Structure

**Before (Nunjucks):**
```html
<!-- src/templates/modules/banner.njk -->
{% extends "layout.njk" %}
{% block content %}
<div class="banner">
  <img class="banner__image" src="...">
  <div class="banner__caption">
    <h2 class="banner__heading">Banner Module</h2>
  </div>
</div>
{% endblock %}
```

**After (React):**
```tsx
// src/components/Banner/Banner.tsx
export const Banner: React.FC<BannerProps> = ({ imageSrc, heading }) => {
  return (
    <div className={styles.banner}>
      <img className={styles.banner__image} src={imageSrc} />
      <div className={styles.banner__caption}>
        <h2 className={styles.banner__heading}>{heading}</h2>
      </div>
    </div>
  );
};
```

### 2. Styling

**Before:**
```scss
// src/styles/modules/_banner.scss
.banner {
  &__image { ... }
  &__caption { ... }
}
```

**After:**
```scss
// src/components/Banner/Banner.module.scss
.banner {
  &__image { ... }
  &__caption { ... }
}
```

Styles are now co-located with components using SCSS Modules for better encapsulation.

### 3. Build System

**Before:**
```bash
gulp        # Start development
gulp build  # Build for production
```

**After:**
```bash
npm run dev            # Start Storybook
npm run build          # Build library
npm run build-storybook # Build Storybook
```

### 4. Development Workflow

**Before:**
- Edit Nunjucks templates in `src/templates/modules/`
- Edit styles in `src/styles/modules/`
- Run `gulp` to compile and preview
- View in browser at localhost

**After:**
- Create/edit React components in `src/components/`
- Write stories in `*.stories.tsx` files
- Run `npm run dev` to start Storybook
- View and test components in Storybook UI

## Component Conversions

### Banner Component

**Props:**
- `imageSrc`: Image URL
- `imageAlt`: Alt text for accessibility
- `heading`: Heading text

### Hero Component

**Props:**
- `imageSrcMobile`: Mobile image URL
- `imageSrcDesktop`: Desktop image URL
- `imageAlt`: Alt text
- `heading`: Heading text

### Tile Component

**Props:**
- `content`: Image or text content
  - Image: `{ type: 'image', src: string, alt?: string }`
  - Text: `{ type: 'text', number?: string, title: string, info: string }`
- `variant`: 'default' | 'grey' | 'pink' | 'blue'
- `ctaLink`: Optional CTA button

### NavBar Component

**Props:**
- `logoSrc`: Logo image URL
- `logoAlt`: Logo alt text
- `logoHref`: Logo link URL
- `links`: Array of navigation links
- `onLinkClick`: Click handler

## File Structure Changes

```
Before:
src/
├── templates/
│   └── modules/
├── styles/
│   └── modules/
├── scripts/
└── images/

After:
src/
├── components/
│   ├── Banner/
│   │   ├── Banner.tsx
│   │   ├── Banner.module.scss
│   │   ├── Banner.stories.tsx
│   │   ├── Banner.types.ts
│   │   └── index.ts
│   └── ...
├── styles/
│   ├── _variables.scss
│   └── global.scss
└── index.ts
```

## Installing and Using the New Library

### As a Package Consumer

1. Install the package:
```bash
npm install @j-cam/pattern-library
```

2. Import components:
```tsx
import { Banner, Hero } from '@j-cam/pattern-library';
import '@j-cam/pattern-library/styles';
```

3. Use in your React app:
```tsx
function App() {
  return (
    <div>
      <Banner imageSrc="..." heading="Welcome" />
    </div>
  );
}
```

### As a Library Developer

1. Clone and install:
```bash
git clone https://github.com/j-cam/pattern-library.git
cd pattern-library
npm install
```

2. Start Storybook:
```bash
npm run dev
```

3. Make changes to components

4. Build the library:
```bash
npm run build
```

## Breaking Changes

1. **No jQuery**: All jQuery dependencies removed. Use React state and refs instead.
2. **No Global Styles**: Component styles are scoped via CSS Modules
3. **TypeScript Required**: Consumers should use TypeScript for best experience
4. **React Peer Dependency**: React 18+ is required
5. **Module System**: Now uses ES modules by default

## Benefits of the New Architecture

1. **Type Safety**: Full TypeScript support catches errors at compile time
2. **Component Isolation**: Each component is self-contained and reusable
3. **Modern Tooling**: Vite provides fast HMR and optimized builds
4. **Interactive Documentation**: Storybook allows testing all component variants
5. **Better DX**: Auto-completion, type hints, and better error messages
6. **Tree Shaking**: Only import what you need
7. **Modern JavaScript**: Use latest ES features
8. **Better Testing**: Components can be easily unit tested

## Next Steps

1. Install dependencies: `npm install`
2. Start Storybook: `npm run dev`
3. Explore components in the Storybook UI
4. Read component documentation and try different props
5. Build the library: `npm run build`
6. Integrate into your React application

## Support

For questions or issues, please visit:
- [GitHub Issues](https://github.com/j-cam/pattern-library/issues)
- [Documentation](https://github.com/j-cam/pattern-library#readme)
