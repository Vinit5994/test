# Vinit Pithadiya - Portfolio

A modern, minimal portfolio website with horizontal scrolling and stunning animations for a Full Stack Web3 Developer.

## Features

- 🎨 **Horizontal Scrolling**: Smooth horizontal scroll experience inspired by modern web design
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- 🎯 **Custom Cursor**: Unique cursor design with interactive hover effects
- ✨ **Smooth Animations**: Powered by Framer Motion and GSAP
- 📱 **Responsive Design**: Optimized for all screen sizes
- 🚀 **Performance Optimized**: Built with Next.js 15 and React 18
- 🎭 **Minimal Design**: Clean, professional design that doesn't look AI-generated

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd test
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with horizontal scroll
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── CustomCursor.tsx    # Custom cursor component
│   ├── HorizontalScroll.tsx # GSAP-powered horizontal scroll
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── sections/
│       ├── HeroSection.tsx      # Hero/intro section
│       ├── AboutSection.tsx     # About me with skills
│       ├── EducationSection.tsx # Education timeline
│       ├── ExperienceSection.tsx # Work experience
│       ├── ProjectsSection.tsx  # Featured projects
│       └── ContactSection.tsx   # Contact information
└── public/                 # Static assets
```

## Customization

### Adding Your Photo

Replace the placeholder in `AboutSection.tsx` with your photo:

```tsx
<img
  src="/your-photo.jpg"
  alt="Vinit Pithadiya"
  className="w-full h-full object-cover"
/>
```

### Updating Content

All content is in the respective section components under `components/sections/`. Update the data objects in each file to customize your information.

### Color Scheme

Customize colors in `app/globals.css` by modifying the CSS variables:

```css
:root {
  --accent: #6366f1;  /* Primary accent color */
  --accent-hover: #4f46e5;
  /* ... other colors */
}
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- Email: vinitpithadiya@gmail.com
- Phone: +91-6354669654

---

Built with ❤️ using Next.js, TypeScript, and Framer Motion
