# Heather Frank - QA Portfolio Site

A professional portfolio website showcasing quality assurance expertise, testing philosophy, and project case studies.

## About This Project

This portfolio demonstrates my approach to quality assurance engineering—one that puts people first. As a QA professional, I believe that testing isn't just about finding bugs; it's about ensuring technology genuinely improves the human experience.

The site features:
- **My Testing Philosophy** - Ethical, human-centered QA principles
- **The Method** - A 5-step process for comprehensive quality assurance
- **Case Studies** - Real-world examples of testing frameworks and automation
- **Toolkit** - Technologies and patterns I use to deliver quality

---

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sjcswank/qa-portfolio-site.git
cd qa-portfolio-site

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check for code issues |

## Project Structure

```
qa-portfolio-site/
├── public/
│   ├── favicon-logo.svg
│   ├── og-image.png                              # Social media preview image
│   └── Heather_Frank_Automation_Engineer_Resume.pdf
├── src/
│   ├── components/                               # Reusable UI components
│   │   ├── CaseStudyCard.jsx
│   │   ├── HoverButton.jsx
│   │   ├── PhilosophyCard.jsx
│   │   ├── Section.jsx
│   │   ├── SocialLink.jsx
│   │   ├── TechTag.jsx
│   │   └── ToolCard.jsx
│   ├── sections/                                 # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── PhilosophySection.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── CaseStudiesSection.jsx
│   │   ├── ToolsSection.jsx
│   │   └── ContactSection.jsx
│   ├── data/                                     # Content data files
│   │   ├── sections.js                           # Section metadata & colors
│   │   ├── caseStudies.js
│   │   ├── processSteps.js
│   │   ├── tools.js
│   │   └── philosophyPillars.js
│   ├── QAPortfolio.jsx                           # Main portfolio component
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                                 # Tailwind imports
├── index.html
├── tailwind.config.js
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Features

### Interactive Navigation
- Smooth scroll navigation between sections
- Fixed top navbar with active section highlighting
- Side dot navigation with section indicators
- Scroll-to-top button

### Visual Design
- Dynamic color theming that changes with each section
- Animated edge glow effect
- Fade-in animations as sections come into view
- Hover effects on buttons, cards, and navigation elements

### Accessibility
- Skip-to-main-content link for screen readers
- ARIA labels on interactive elements
- Keyboard navigation support
- Visible focus indicators
- Semantic HTML structure

### Responsive Design
- Mobile-first approach
- Stacked layouts on small screens
- Adjusted typography and spacing for different breakpoints

## Customization

### Updating Content

Content is separated from components for easy updates:

- **Case Studies**: Edit `src/data/caseStudies.js`
- **Process Steps**: Edit `src/data/processSteps.js`
- **Tools & Skills**: Edit `src/data/tools.js`
- **Philosophy Cards**: Edit `src/data/philosophyPillars.js`
- **Section Colors**: Edit `src/data/sections.js`

### Changing Colors

Each section has a unique color defined in `src/data/sections.js`:

```javascript
const sections = [
  { id: 'hero', color: '#EF4444', name: 'Home', icon: Target },
  { id: 'philosophy', color: '#F97316', name: 'Philosophy', icon: Lightbulb },
  // ... etc
];
```

## Deployment

Build the production bundle:

```bash
npm run build
```

The `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

This project is for personal portfolio use.

## Contact

- **Email**: heatherlynn.frank@gmail.com
- **LinkedIn**: [linkedin.com/in/heatherlynnfrank](https://linkedin.com/in/heatherlynnfrank)
- **GitHub**: [github.com/sjcswank](https://github.com/sjcswank)
