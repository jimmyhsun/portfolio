# Jimmy's Portfolio Website

> 🌐 **Live Demo**: [https://jimmyhsun.github.io/portfolio/](https://jimmyhsun.github.io/portfolio/)

<p align="right">
  <a href="./README.md">中文版</a>
</p>

---

## 🎯 Overview

A modern, responsive portfolio website built with cutting-edge technologies to showcase my expertise as a **Senior Full-Stack Architect**. This project demonstrates my ability to build production-ready, scalable web applications with a focus on performance, accessibility, and user experience.

![Portfolio Preview](./public/preview.png)

## ✨ Features

### 🎨 Design & UX

- **Neo-Modernist Bento Design** - Modern UI with glassmorphism effects and smooth animations
- **Dark Mode First** - Elegant dark theme with carefully crafted color palette
- **Responsive Layout** - Fully optimized for desktop, tablet, and mobile devices
- **Micro-interactions** - Subtle hover effects and transitions for enhanced engagement

### 🌍 Internationalization

- **Multi-language Support** - Full i18n implementation with English and Traditional Chinese
- **Dynamic Content** - All content including projects and skills are fully translatable

### ⚡ Performance

- **SSR/SSG Ready** - Server-side rendering for optimal SEO and initial load performance
- **Code Splitting** - Automatic route-based code splitting for faster navigation
- **Optimized Assets** - Custom SVG icons and optimized images

### 🛠️ Technical Excellence

- **Type Safety** - Full TypeScript implementation with strict type checking
- **State Management** - Pinia store for centralized, reactive state management
- **Component Architecture** - Modular, reusable Vue 3 Composition API components
- **Modern CSS** - Tailwind CSS with custom design tokens and utility classes

## 🏗️ Tech Stack

| Category            | Technologies                |
| ------------------- | --------------------------- |
| **Framework**       | Nuxt 3, Vue 3               |
| **Language**        | TypeScript                  |
| **Styling**         | Tailwind CSS, CSS Variables |
| **State**           | Pinia                       |
| **i18n**            | @nuxtjs/i18n                |
| **Icons**           | Custom SVG Components       |
| **Build**           | Vite                        |
| **Package Manager** | pnpm                        |

## 📁 Project Structure

```
self_introduction_web/
├── app/
│   ├── components/          # Reusable Vue components
│   │   ├── icons/           # Custom SVG icon components
│   │   ├── HeroSection.vue
│   │   ├── SkillsGrid.vue
│   │   ├── ProjectCard.vue
│   │   └── ContactSection.vue
│   ├── layouts/             # Layout components
│   ├── pages/               # Route pages
│   └── stores/              # Pinia stores
├── i18n/
│   └── locales/             # Translation files (en, zh-TW)
├── assets/
│   └── css/                 # Global styles
├── public/                  # Static assets
└── nuxt.config.ts           # Nuxt configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Generate static site
pnpm generate

# Or build for SSR
pnpm build
```

## 💼 Skills Demonstrated

This project showcases proficiency in:

### Frontend Development

- **Vue 3** - Composition API, Reactivity System, Custom Directives
- **Nuxt 3** - SSR, SSG, Hybrid Rendering, SEO Optimization
- **TypeScript** - Type Safety, Generics, Interface Design
- **CSS Architecture** - Design Systems, CSS Variables, Responsive Design

### Architecture & Design

- **Component Design** - Atomic design principles, reusable patterns
- **State Management** - Centralized store with computed properties
- **Code Organization** - Clean, maintainable, scalable structure

### Best Practices

- **Performance Optimization** - Code splitting, lazy loading, optimized assets
- **Accessibility** - Semantic HTML, ARIA attributes, keyboard navigation
- **SEO** - Meta tags, structured data, semantic markup
- **i18n** - Internationalization patterns, translation management

## 📬 Contact

Feel free to reach out for collaboration or opportunities:

- 📧 Email: jimmywu0916@gmail.com
- 🐙 GitHub: [github.com/jimmyhsun/portfolio](https://github.com/jimmyhsun/portfolio)
- 📍 Location: Taiwan, Taipei

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ using Nuxt 3 + Vue 3 + TypeScript
</p>
