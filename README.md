# Portfolio

A personal portfolio website built with React, Vite, and Tailwind CSS. The site presents Bhanu Partap's introduction, skills, featured projects, education timeline, and a contact form.

## Overview

This project is a single-page portfolio application with smooth scrolling navigation and responsive sections for:

- About
- Skills
- Projects
- Education
- Contact

The UI uses Tailwind CSS utility classes, custom gradient/background effects, and interactive components like typing text and tilt animations.

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- PostCSS
- ESLint 9
- React Icons
- React Parallax Tilt
- React Typing Effect
- React Toastify
- EmailJS

## Features

- Responsive single-page portfolio layout
- Fixed navigation with smooth scrolling
- Typing animation in the hero section
- Tilt effect for profile and skill cards
- Project cards with modal preview
- Education timeline layout
- Contact form with EmailJS integration
- Toast notifications for form submission status

## Project Structure

```text
.
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- About/
|   |   |-- Contact/
|   |   |-- Education/
|   |   |-- Footer/
|   |   |-- Navbar/
|   |   |-- Skills/
|   |   `-- Work/
|   |-- App.jsx
|   |-- constants.js
|   |-- index.css
|   `-- main.jsx
|-- eslint.config.js
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
`-- package.json
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint the Project

```bash
npm run lint
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production build in `dist/`
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint on the project

## Data and Content

Most portfolio content is maintained in `src/constants.js`, including:

- Skill categories
- Education entries
- Project entries

This makes it easy to update the portfolio without changing every component.

## Contact Form

The contact section uses EmailJS through `@emailjs/browser`.

Current EmailJS identifiers are hardcoded in `src/components/Contact/Contact.jsx`. If you want safer configuration for deployment, move these values to environment variables and load them with Vite.

## Styling

- Tailwind CSS is configured in `tailwind.config.js`
- PostCSS uses `tailwindcss` and `autoprefixer`
- Global styles live in `src/index.css`
- Custom utilities include clip-path helpers and a `blob` animation

## Notes

- The project already contains `node_modules/` and a generated `dist/` folder in the workspace.
- The experience section appears intentionally removed from the current app.
- Some source strings and asset names contain inconsistent casing or encoding artifacts, which may be worth cleaning up later.
