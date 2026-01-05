# React Portfolio Project

This project has been converted from a static HTML portfolio to a modern React application using Vite and Tailwind CSS.

## Features

- ⚡ Built with Vite for fast development
- ⚛️ React 18 with modern hooks
- 🎨 Tailwind CSS for styling
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🎭 Smooth animations and transitions
- 🎯 Component-based architecture

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section with intro
│   ├── About.jsx        # About section
│   ├── Footer.jsx       # Footer component
│   └── ThemeToggle.jsx  # Dark/light mode toggle
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Material Icons** - Icon library
- **Font Awesome** - Additional icons

## Customization

- Update personal information in the components
- Modify colors in `tailwind.config.js`
- Add new sections by creating components in `src/components/`
- Customize animations in `src/index.css`

## Deployment

The project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages after running `npm run build`.
