# Rohan Rana - Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=github)](https://rohan7351.github.io)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A modern, responsive, and animated personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. This portfolio showcases my professional experience, projects, skills, education, and certifications as a Java Backend Developer.

![Portfolio Preview](./src/Assets/rohan-rana-pic.png)

## Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better search visibility
- **Lazy Loading**: Components load on demand for better performance
- **Typewriter Effect**: Animated typing effect for professional titles
- **Contact Form**: Functional contact section for potential employers/clients
- **GitHub Actions CI/CD**: Automated deployment to GitHub Pages

## Tech Stack

### Frontend
- **React 18** - Modern React with functional components and hooks
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Animation library for smooth transitions
- **Radix UI** - Accessible UI primitives (Accordion, Dialog, Tabs, etc.)
- **Lucide React** - Beautiful icon library
- **React Typed** - Typewriter animation effect

### Backend & Tools
- **React Helmet Async** - SEO management
- **React Scroll** - Smooth scrolling navigation
- **React Toastify** - Toast notifications

### Build & Deploy
- **Create React App** - React project scaffolding
- **GitHub Actions** - Automated CI/CD pipeline
- **GitHub Pages** - Free hosting for the portfolio

## Project Structure

```
rohan7351.github.io/
├── .github/workflows/      # CI/CD configuration
│   └── deploy.yml          # GitHub Actions workflow
├── public/                 # Static assets
├── src/
│   ├── Assets/             # Images and logos
│   ├── components/         # React components
│   │   ├── theme/          # Dark/light mode toggle & provider
│   │   ├── ui/             # Reusable UI components (skeleton)
│   │   ├── About.js        # Hero section with intro
│   │   ├── Header.js       # Navigation header
│   │   ├── Experience.js   # Work experience timeline
│   │   ├── Projects.js     # Project showcase
│   │   ├── Skills.js       # Skills grid with icons
│   │   ├── Education.js    # Education history
│   │   ├── Certifications.js # Certifications display
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer section
│   ├── data/               # Data files (JSON-like exports)
│   │   ├── profile.js      # Personal info & social links
│   │   ├── experience.js   # Work experience data
│   │   ├── projects.js     # Projects data
│   │   ├── skills.js       # Skills data
│   │   ├── education.js    # Education data
│   │   └── certifications.js # Certifications data
│   ├── lib/                # Utility functions
│   ├── App.js              # Main app component
│   ├── index.js            # Entry point
│   └── styles.css          # Global styles
├── package.json            # Dependencies & scripts
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rohan7351/rohan7351.github.io.git
   cd rohan7351.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

### Deployment

The project is configured with GitHub Actions for automatic deployment:

- **Automatic**: Pushes to `main` branch trigger automatic deployment to GitHub Pages
- **Manual**: You can also trigger deployment manually from the Actions tab

To deploy manually:
```bash
npm run deploy
```

## Customization

### Updating Personal Information

All personal data is stored in the `src/data/` directory:

| File | Description |
|------|-------------|
| `profile.js` | Name, title, bio, social links, profile image |
| `experience.js` | Work history and achievements |
| `projects.js` | Project details with links and tags |
| `skills.js` | Technical skills with Devicon icons |
| `education.js` | Educational background |
| `certifications.js` | Certifications with images |

### Updating Profile Image

Replace `src/Assets/rohan-rana-pic.png` with your own image and update the import in `profile.js`.

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  // ... other colors
}
```

### Dark/Light Mode Colors

Update CSS variables in `src/index.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other variables */
}
```

## Sections Overview

### About (Hero)
- Animated background with gradient orbs
- Typewriter effect for professional titles
- Profile image with glow effect
- Social media links with hover animations

### Experience
- Timeline of work history
- Company details and achievements
- Animated entry on scroll

### Projects
- Project cards with tags
- Links to code and live demos
- Hover animations and effects

### Skills
- Categorized skill display
- Devicon icons for each technology
- Grid layout with responsive design

### Education
- Academic background
- Institution details and CGPA

### Certifications
- Certification cards with issuer logos
- Links to verify credentials
- Issue dates

### Contact
- Contact form for inquiries
- Social links
- Email and phone information

## Performance Optimizations

- **Lazy Loading**: Components below the fold are loaded on demand
- **Image Optimization**: Images use lazy loading and proper sizing
- **Skeleton Loading**: Loading states for better perceived performance
- **CSS Optimization**: Tailwind purges unused styles in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Rohan Rana** - Java Backend Developer

- Email: [rohan.rana.7351@gmail.com](mailto:rohan.rana.7351@gmail.com)
- LinkedIn: [linkedin.com/in/rohan-rana-228a2b227](https://www.linkedin.com/in/rohan-rana-228a2b227/)
- GitHub: [github.com/Rohan7351](https://github.com/Rohan7351)
- Portfolio: [rohan7351.github.io](https://rohan7351.github.io)

---

<p align="center">Built with passion and lots of coffee ☕</p>
