# Getting Started with the Modernized Pattern Library

## ✅ What's Been Done

Your pattern library has been fully modernized from Gulp/Nunjucks to React/TypeScript/Storybook!

### Changes Summary:

1. **New Technology Stack:**
   - ✅ React 18 with TypeScript
   - ✅ Vite for blazing-fast builds
   - ✅ Storybook 8 for component development
   - ✅ SCSS Modules for scoped styling

2. **Converted Components:**
   - ✅ Banner - Full-width image banner with text overlay
   - ✅ Hero - Responsive hero with picture element
   - ✅ Tile - Square tiles with image/text content
   - ✅ NavBar - Responsive navigation bar

3. **Configuration Files:**
   - ✅ `package.json` - Updated with modern dependencies
   - ✅ `tsconfig.json` - TypeScript configuration
   - ✅ `vite.config.ts` - Build configuration
   - ✅ `.storybook/` - Storybook 8 configuration
   - ✅ `eslint.config.js` - Modern ESLint setup

4. **Documentation:**
   - ✅ `README.md` - Complete usage guide
   - ✅ `MIGRATION.md` - Migration guide from old structure

## 🚀 Next Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all the modern dependencies including React, TypeScript, Vite, and Storybook.

### 2. Start Storybook

```bash
npm run dev
```

This will start Storybook on `http://localhost:6006` where you can:
- View all your components
- Test different props and states
- See component documentation
- Interact with live examples

### 3. Build the Library

```bash
npm run build
```

This creates a production build in the `dist/` folder that can be:
- Published to npm
- Imported into other projects
- Deployed to a CDN

### 4. Build Storybook (Static Site)

```bash
npm run build-storybook
```

This creates a static Storybook site in `storybook-static/` that you can deploy to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## 📁 New Project Structure

```
pattern-library/
├── .storybook/          # Storybook configuration
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/      # React components
│   │   ├── Banner/
│   │   │   ├── Banner.tsx
│   │   │   ├── Banner.types.ts
│   │   │   ├── Banner.module.scss
│   │   │   ├── Banner.stories.tsx
│   │   │   └── index.ts
│   │   ├── Hero/
│   │   ├── Tile/
│   │   └── NavBar/
│   ├── styles/          # Global styles
│   │   ├── global.scss
│   │   └── _variables.scss
│   └── index.ts         # Main library export
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── MIGRATION.md
```

## 🎨 Using the Components

### In Your React App:

```tsx
import { Banner, Hero, Tile, NavBar } from '@j-cam/pattern-library';
import '@j-cam/pattern-library/styles';

function App() {
  return (
    <>
      <NavBar
        logoAlt="My Company"
        links={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]}
      />
      <Hero
        imageSrc="hero.jpg"
        heading="Welcome"
      />
      <Banner
        imageSrc="banner.jpg"
        heading="Featured Content"
      />
    </>
  );
}
```

## 🔧 Development Workflow

1. **Make Changes:** Edit components in `src/components/`
2. **See Live Updates:** Storybook hot-reloads automatically
3. **Test:** Use Storybook's interaction testing
4. **Build:** Run `npm run build` to create distribution files
5. **Publish:** Publish to npm or use locally

## 📚 Additional Resources

- **Storybook Docs:** https://storybook.js.org/
- **Vite Guide:** https://vitejs.dev/guide/
- **React Docs:** https://react.dev/
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/

## 💡 Tips

1. **Viewing Stories:** Each component has multiple stories showing different use cases
2. **Props Table:** Storybook auto-generates prop documentation from TypeScript types
3. **Responsive Testing:** Use Storybook's viewport addon to test mobile/tablet/desktop
4. **Accessibility:** Check the A11y addon in Storybook for accessibility issues

## 🎯 What to Explore

1. Open Storybook and browse the Banner component stories
2. Try changing props using the Controls panel
3. Check the Docs tab for component documentation
4. Use the viewport toolbar to test responsiveness
5. Review the code in the "Show code" panel

## ⚡ Quick Commands

```bash
npm run dev              # Start Storybook
npm run build            # Build library for production
npm run build-storybook  # Build Storybook static site
npm run lint             # Run ESLint
npm run type-check       # Check TypeScript types
```

---

**Congratulations!** Your pattern library is now modernized and ready for React development! 🎉
