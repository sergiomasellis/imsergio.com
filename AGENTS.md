# Agent Instructions for imsergio.com

## Build/Lint/Test Commands

### Development
- `npm start` - Start development server with Parcel
- `npm run build` - Build production bundle with Parcel
- `npm run dev` - Alternative development command
- `npm run lint` - Run ESLint for code quality
- `npm run format` - Format code with Prettier

### Testing
- `npm test` - Run tests with Jest (when implemented)
- No test framework currently configured - plan to add Jest + React Testing Library

### Linting & Formatting
- ESLint with React and modern JavaScript rules
- Prettier for consistent code formatting
- Husky for pre-commit hooks

## Code Style Guidelines

### TypeScript/React (Modern Standard)
- **Components**: Use functional components with hooks (preferred)
- **Legacy Support**: Class components still supported during migration
- **Imports**: Use ES6 import syntax, group by: React, third-party, local
- **Naming**:
  - Components: PascalCase (e.g., `HomeComponent`)
  - Functions: camelCase (e.g., `calculateRotation`)
  - Variables: camelCase (e.g., `firstName`)
  - Hooks: camelCase with `use` prefix (e.g., `useMousePosition`)
  - Types: PascalCase with `Type` suffix (e.g., `UserType`)
- **Structure**: Hooks first, helper functions, then JSX return
- **State**: Use `useState` hook for local state
- **Props**: Use TypeScript interfaces for prop types
- **Event handlers**: Use arrow functions or `useCallback` for optimization
- **Refs**: Use `useRef` hook
- **Indentation**: 2 spaces (Prettier default)
- **Semicolons**: Use semicolons (Prettier default)

### CSS/SCSS (Modern)
- **Naming**: BEM-like methodology (e.g., `home__firstName`, `navigation__top`)
- **Variables**: Use CSS custom properties (e.g., `--color-primary`)
- **Mixins**: Use SCSS mixins for responsive breakpoints and utilities
- **Structure**: Variables first, mixins, then component styles
- **Breakpoints**: Mobile-first responsive design
- **Modern Features**: CSS Grid, Flexbox, custom properties
- **Indentation**: 2 spaces (Prettier default)
- **Comments**: Use `/* */` for documentation

### General Best Practices
- **Error handling**: Use try-catch blocks and error boundaries
- **Performance**: Use React.memo, useMemo, useCallback for optimization
- **Accessibility**: Follow WCAG guidelines, semantic HTML, ARIA labels
- **Security**: Sanitize user inputs, use HTTPS, secure headers
- **SEO**: Proper meta tags, structured data, performance optimization

### File Organization
- **Source**: `/src/` directory (modern standard)
- **Components**: `/src/components/` with index.ts files
- **Pages**: `/src/pages/` for route components
- **Hooks**: `/src/hooks/` for custom React hooks
- **Utils**: `/src/utils/` for helper functions
- **Types**: `/src/types/` for TypeScript definitions
- **Styles**: `/src/styles/` with CSS modules or styled-components
- **Assets**: `/src/assets/` for images, fonts, etc.

### Dependencies (Modern Stack)
- **Build tool**: Vite (faster than Parcel) or Next.js
- **Language**: TypeScript (primary), JavaScript (legacy)
- **Styling**: Tailwind CSS or styled-components
- **State**: Zustand or Redux Toolkit
- **Testing**: Jest + React Testing Library + Playwright
- **Linting**: ESLint + Prettier
- **Git hooks**: Husky + lint-staged

### Migration Strategy
1. **Phase 1**: Add TypeScript, ESLint, Prettier
2. **Phase 2**: Convert components to functional with hooks
3. **Phase 3**: Update build tools and dependencies
4. **Phase 4**: Implement modern styling and testing
5. **Phase 5**: Performance optimization and accessibility

### AI/ML Focus Areas
- **Current Role**: AI-Driven Innovation at JPMorgan Chase & Co.
- **Technologies**: Python, LangGraph, VeRL, RAG, Azure AI, Cloud-native architectures
- **Specializations**: Machine Learning, Cloud Architecture, Global Team Leadership