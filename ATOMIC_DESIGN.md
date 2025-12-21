# Atomic Design Pattern

This pattern library follows the **Atomic Design** methodology, which breaks down UI components into a hierarchy from smallest to largest:

## Hierarchy

### Atoms
The smallest, indivisible building blocks. These are basic HTML elements styled to match the design system.

**Available Atoms:**
- **Button** - Action triggers with multiple variants (primary, secondary, outline, ghost)
- **OptionSelector** - Radio button groups for selecting product options (colors, sizes, etc.)

### Molecules
Simple groups of atoms functioning together as a unit. These combine multiple atoms to create more complex UI elements.

**Available Molecules:**
- **ProductGallery** - Image carousel combining images and navigation buttons
- **ProductDetails** - Product information display combining typography and pricing atoms
- **ProductOptions** - Product variant selector combining multiple OptionSelector atoms

### Organisms
Complex components composed of molecules and/or atoms. These form distinct sections of an interface.

**Available Organisms:**
- **Banner** - Full-width promotional banner with call-to-action
- **Hero** - Large header section with imagery and content
- **NavBar** - Main navigation with logo and links
- **Card** - Content cards for blog posts, products, or general content
- **InfoPanel** - Information display panel
- **Tile** - Content tile for grid layouts
- **Pagination** - Page navigation controls
- **SectionNav** - Section-level navigation
- **BrowserUpgrade** - Browser compatibility notice

### Templates
Page-level layouts that combine organisms, molecules, and atoms into complete page structures.

**Available Templates:**
- **Grid** - Responsive grid container for organizing cards
- **HomePage** - Landing page composition
- **BlogPage** - Blog listing page composition
- **ShopPage** - Product listing page composition
- **ProductPage** - Product detail page composition

## Component Composition

### Example: Building a Product Page

```tsx
import {
  NavBar,
  ProductGallery,
  ProductDetails,
  ProductOptions,
  Button
} from '@j-cam/pattern-library';

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('m');

  return (
    <>
      {/* Organism */}
      <NavBar
        logoSrc="/logo.png"
        links={[
          { label: 'Shop', href: '/shop' },
          { label: 'About', href: '/about' }
        ]}
      />

      <div className="product-layout">
        {/* Molecule: Image Gallery */}
        <ProductGallery
          images={productImages}
          showThumbnails
        />

        <div className="product-info">
          {/* Molecule: Product Info */}
          <ProductDetails
            title="Classic Leather Jacket"
            price="$249.99"
            compareAtPrice="$349.99"
            description="Premium leather jacket..."
            inStock
          />

          {/* Molecule: Variant Selectors */}
          <ProductOptions
            colorOptions={colorOptions}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
            sizeOptions={sizeOptions}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />

          {/* Atom: Action Button */}
          <Button variant="primary" size="lg" fullWidth>
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};
```

## Benefits of Atomic Design

### 1. **Reusability**
Components can be mixed and matched to create different layouts without duplicating code.

### 2. **Consistency**
Using the same atoms across molecules ensures visual and functional consistency.

### 3. **Scalability**
New pages can be quickly assembled from existing components.

### 4. **Maintainability**
Changes to atoms automatically propagate to all molecules and organisms that use them.

### 5. **Testing**
Smaller components are easier to test in isolation.

### 6. **Documentation**
Storybook provides visual documentation for each component at every level.

## Creating New Components

### When to Create an Atom
- It's a basic UI element (button, input, label)
- It has minimal or no dependencies on other components
- It will be reused across multiple molecules

### When to Create a Molecule
- It combines 2-3 atoms into a functional unit
- It serves a single, focused purpose
- It will be reused in multiple organisms or templates

### When to Create an Organism
- It's a major section of a page
- It combines multiple molecules and atoms
- It represents a distinct feature or functionality

### When to Create a Template
- It defines a complete page layout
- It demonstrates how organisms work together
- It serves as an example for implementers

## Example: Decomposing a Product Card

```
ProductCard (Organism)
├── ProductGallery (Molecule)
│   ├── Image (Atom)
│   └── Button (Atom) - Nav arrows
├── ProductDetails (Molecule)
│   ├── Heading (Atom)
│   ├── Price (Atom)
│   └── Text (Atom)
├── ProductOptions (Molecule)
│   ├── OptionSelector (Atom) - Color
│   └── OptionSelector (Atom) - Size
└── Button (Atom) - Add to Cart
```

## Best Practices

1. **Keep Atoms Simple** - They should be single-purpose and highly reusable
2. **Make Molecules Focused** - Each molecule should do one thing well
3. **Document Variants** - Use Storybook to show all variants and states
4. **Type Everything** - Use TypeScript interfaces for all props
5. **Think Composition** - Design components to work well together
6. **CSS Modules** - Keep styles scoped to prevent conflicts
7. **BEM Naming** - Use Block Element Modifier for class names

## Storybook Organization

Components are organized by their atomic level:

- `Components/Button` - Atom
- `Components/OptionSelector` - Atom
- `Components/ProductGallery` - Molecule
- `Components/ProductDetails` - Molecule
- `Components/ProductOptions` - Molecule
- `Components/NavBar` - Organism
- `Components/Card` - Organism
- `Layouts/ProductPage` - Template

This makes it easy to find components and understand their complexity level.
