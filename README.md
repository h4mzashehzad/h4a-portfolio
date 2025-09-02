# H4A Portfolio - React + TypeScript + Vite + Tailwind CSS

A modern portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS. This project demonstrates best practices for setting up a fast, responsive, and maintainable web application.

## 🚀 Tech Stack

- **React 19** - Latest React with improved performance and new features
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Lightning-fast build tool with instant HMR
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **SWC** - Super-fast TypeScript/JavaScript compiler

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd h4a-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🎨 Tailwind CSS Setup

This project uses Tailwind CSS v4 with the dedicated Vite plugin for optimal performance:

### Configuration Files

- **`vite.config.ts`** - Vite configuration with Tailwind plugin
- **`tailwind.config.js`** - Tailwind configuration with custom theme
- **`src/index.css`** - Main CSS file with Tailwind imports
- **`.prettierrc`** - Prettier configuration with Tailwind class sorting

### Key Features

✅ **Utility-First Approach** - Build designs directly in your markup
✅ **Responsive Design** - Mobile-first responsive utilities
✅ **Dark Mode Support** - Built-in dark mode utilities
✅ **Custom Theme** - Extended color palette and animations
✅ **Class Sorting** - Automatic class organization with Prettier
✅ **Performance Optimized** - Purged CSS for production builds

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

### Tailwind CSS Best Practices

1. **Use Semantic Class Names**: Combine utilities for reusable components
2. **Mobile-First Design**: Start with mobile styles, then add larger breakpoints
3. **Consistent Spacing**: Use Tailwind's spacing scale (4, 8, 16, etc.)
4. **Color System**: Leverage the extended color palette in `tailwind.config.js`
5. **Component Extraction**: Extract repeated utility combinations into components

### Responsive Breakpoints

```css
/* Tailwind CSS Breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
```

### Custom Utilities

The project includes custom utilities defined in `tailwind.config.js`:

- **Custom Colors**: Primary color palette
- **Custom Animations**: Fade-in and slide-up animations
- **Custom Fonts**: Inter font family

## 🎯 Project Structure

```
src/
├── components/     # Reusable UI components
├── assets/        # Static assets (images, icons)
├── App.tsx        # Main application component
├── main.tsx       # Application entry point
└── index.css      # Global styles with Tailwind imports
```

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production-ready files

3. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
