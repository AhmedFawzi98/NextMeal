# NextMeal

## Live Demo

---

## About NextMeal

A landing page that showcases a clean, component-driven UI for NextMeal app (food planning and delivery app). The project emphasizes semantic HTML, modular CSS, and a lightweight design system that scales across screen sizes.

---

## Sections & Components

- Header and Navigation
- Hero
- Featured-in
- How app works
- Meals and Diets
- Testimonials
- Gallery
- Pricing + Features
- CTA (call to action)
- Footer

---

## Technical Implementation

### Approach

- Built without frameworks to demonstrate core frontend fundamentals.
- Focused on native CSS capabilities instead of abstraction layers.
- Emphasis on understanding layout systems rather than relying on UI libraries.

### Layout & Structure

- Layout architecture: A combination of reusable container classes and lightweight layout utilities ensures consistent sizing and spacing and style theme, while Flexbox and Grid power responsive, scalable, and maintainable layout structures.

- Semantic HTML: The markup uses semantic elements such as `header`, `nav`, `main`, `section`, `article`, `figure`, and `footer` to improve accessibility and document structure. Headings follow a logical hierarchy for screen readers and SEO.

### Design System

- a lightweight design system implemented with CSS variables (tokens) and modular reusable styles. The goals are consistency, reusability, and easy theming.

- Design tokens (CSS variables): Colors, spacing scale, type sizes, borders, and shadows are exposed as variables in the global scope.

- Spacing & Type Scale: Spacing and typography use a consistent scale defined by tokens so components align visually without ad-hoc values. All sizes are declared in `rem` units so they scale with the root font-size and respect user preferences.

- Reusable classes and utilities: A small set of reusable utility classes improve modularity and enforce consistency.

### Responsiveness

- Media queries: Styles are enhanced with media queries at logical breakpoints. Breakpoints are defined using rem-based token values to keep scaling consistent.
- Flexible layout techniques: The design relies on Flexbox and grid for fluid layouts, enabling graceful reflow across viewport sizes.
- responsiveness unites: All spacing and typography and lengths use `rem` unit, media queries use `em` unit, image sizes use `rem` and `%` unit, so the UI responds to changes in viewport size, the root font-size, and user browser settings.

### Accessibility

- HTML elements use clear focus states and ARIA attributes where required. Color contrast and semantic markup were considered during design also to enhance accessibility

### Micro-Interactions

- Subtle hover states for cards and buttons (shadows, elevation).
- Image zoom effects with overflow clipping.
- Smooth transition timing for improved perceived responsiveness.

### Performance & Optimization

- Optimized images and responsive image sizing.
- Lazy loading applied to below-the-fold images.
- Minimal JavaScript usage to keep bundle size small.
- No external UI libraries, ensuring fast load times and reduced dependencies.
- Hardware-accelerated transitions for smooth micro-interactions.

### JavaScript

JavaScript is used only for a few small interface enhancements: smooth scrolling for anchor links, a password visibility toggle for the form input, basic hamburger menu interactions on smaller screens, and automatic updating of the footer copyright year.