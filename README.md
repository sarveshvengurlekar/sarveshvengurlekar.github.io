# 🚀 Sarvesh Vengurlekar Portfolio

A modern, responsive portfolio website showcasing professional experience, education, skills, and projects. Built with Vue 3, HTML5, and CSS3.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Structure](#structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Sections](#sections)
- [Deployment](#deployment)
- [License](#license)

## 📖 Overview

This is a fully responsive, dynamic portfolio website that presents professional information in an engaging and interactive manner. The portfolio uses Vue 3 for dynamic content rendering and features smooth scroll animations, section tracking, and a clean, modern design.

**Live Demo:** [sarveshvengurlekar.github.io](https://sarveshvengurlekar.github.io)

## ✨ Features

- **Responsive Design** - Mobile-first approach that works seamlessly on all devices
- **Dynamic Content Rendering** - Vue 3 powered sections for easy content updates
- **Scroll Animations** - Smooth reveal animations as you scroll through sections
- **Section Tracking** - Active section highlighting as you navigate
- **Multi-Section Support** - Education, Skills, Experience, Projects, Certifications, Achievements, and Contact
- **Accessibility** - Semantic HTML and accessible color contrasts
- **Performance Optimized** - Lightweight and fast-loading
- **Easy Customization** - All content managed in `portfolio.js`

## 🛠 Tech Stack

| Technology | Usage 
|-----------|-------|
| **CSS** | Styling & Animations |
| **HTML** | Markup & Structure | 
| **JavaScript** | Vue 3 & Interactivity |

### Dependencies

- **Vue 3** (v3, via CDN) - Progressive JavaScript framework
- **No build tools required** - Runs directly in the browser

## 📁 Structure

```
sarveshvengurlekar.github.io/
├── index.html           # Main HTML file with Vue templates
├── portfolio.js         # Portfolio data and configuration
├── style.css            # Styling and animations
└── README.md            # This file
```

### Key Files

- **`index.html`** - Main entry point containing:
  - Vue 3 CDN script
  - HTML structure with Vue templates
  - Section components (Education, Skills, Experience, Projects, etc.)
  - Inline Vue application logic

- **`portfolio.js`** - Data source containing:
  - Personal information
  - Hero section data
  - All portfolio sections and items
  - Easy to modify for content updates

- **`style.css`** - Stylesheet featuring:
  - Responsive grid layouts
  - Scroll reveal animations
  - Modern color scheme
  - Mobile-optimized styles

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local HTTP server (for development)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sarveshvengurlekar/sarveshvengurlekar.github.io.git
   cd sarveshvengurlekar.github.io
   ```

2. **Run a local server:**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (with http-server)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser:**
   ```
   http://localhost:8000
   ```

## ✏️ Customization

### Updating Your Information

All portfolio content is centralized in `portfolio.js`. Edit the `portfolioData` object to customize:

```javascript
const portfolioData = {
  hero: {
    name: "Your Name",
    title: "Your Title",
    tagline: "Your tagline",
    email: "your.email@example.com",
    location: "Your Location",
    photo: "url-to-photo",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile"
  },
  sections: [
    // Education, Skills, Experience, Projects, etc.
  ]
};
```

### Adding New Content

1. **Add an education entry:**
   ```javascript
   {
     degree: "Bachelor of Science in Computer Science",
     institution: "University Name",
     details: "Relevant coursework",
     period: "2020 - 2024",
     gpa: "3.8/4.0"
   }
   ```

2. **Add a project:**
   ```javascript
   {
     name: "Project Name",
     description: ["Feature 1", "Feature 2"],
     tech: ["React", "Node.js"],
     link: "https://github.com/yourproject"
   }
   ```

3. **Add experience:**
   ```javascript
   {
     role: "Software Engineer",
     company: "Company Name",
     period: "Jan 2023 - Present",
     location: "City, Country",
     highlights: ["Achievement 1", "Achievement 2"]
   }
   ```

### Styling Customization

Modify `style.css` to change:
- Color schemes
- Typography
- Spacing and layouts
- Animation timings
- Responsive breakpoints

## 📑 Sections

The portfolio dynamically renders these sections based on `portfolio.js`:

### 1. **Hero Section**
- Personal greeting and name
- Professional title and tagline
- Contact buttons (Email, LinkedIn)
- Profile photo
- Location and email display

### 2. **Education**
Grid layout displaying:
- Degree and institution
- Study period and GPA
- Relevant details

### 3. **Skills**
Organized subsections featuring:
- Skill categories
- Individual skill tags
- Clean tag-based UI

### 4. **Experience**
Timeline view with:
- Job title and company
- Employment period and location
- Key achievements and highlights

### 5. **Projects**
Project cards showcasing:
- Project name and description
- Technology stack
- Links to live demos or repositories

### 6. **Certifications**
Certification cards including:
- Certificate name and issuer
- Issue date
- Credential ID
- Link to verify/view

### 7. **Achievements**
Achievement cards featuring:
- Year of achievement
- Title and description
- Chronological layout

### 8. **Contact**
Call-to-action section with:
- Contact message
- Quick action buttons (Email, LinkedIn, GitHub)

## 🌐 Deployment

This portfolio is deployed as a **GitHub Pages site** at `https://sarveshvengurlekar.github.io`

### Deploy Your Own

1. Fork this repository
2. Rename to `{your-username}.github.io`
3. Customize `portfolio.js` with your information
4. Update `style.css` if desired
5. Push to GitHub
6. Your site will be live at `https://{your-username}.github.io`

**GitHub Pages Documentation:** https://pages.github.com/

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Features

- **Smooth Animations**: Scroll reveal effects on all sections
- **Staggered Delays**: Elements appear with cascading animations
- **Responsive Grid**: Adapts from mobile single-column to multi-column layouts
- **Intersection Observer**: Efficient scroll tracking and reveal triggering
- **Section Dividers**: Visual breaks between major content sections
- **Modern Typography**: Clean, readable font hierarchy

## 📊 Performance

- **Lightweight**: Minimal dependencies, CDN-loaded Vue 3
- **No Build Step**: Runs directly in browser
- **Optimized Images**: Use compressed photos in `portfolio.js`
- **CSS Optimizations**: Minimal reflows and repaints
- **Fast Loading**: < 2MB total size (excluding images)

## 🔧 Troubleshooting

### Content Not Showing
- Verify `portfolio.js` is in the same directory as `index.html`
- Check browser console for errors (F12)
- Ensure Vue 3 CDN is accessible

### Animations Not Working
- Check if browser supports Intersection Observer API
- Verify CSS file is properly linked
- Check for CSS conflicts with browser extensions

### Images Not Loading
- Verify image URLs are correct and accessible
- Check CORS headers if loading from external sources
- Use relative paths for local images

## 🤝 Contributing

Feel free to fork and modify this portfolio template for your own use. If you create improvements, consider sharing them back!

## 📝 License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio.

---

**Built with ❤️ using Vue 3, HTML5, and CSS3**

For questions or suggestions, reach out via [email](mailto:sarveshvengurlekar@example.com) or connect on [LinkedIn](https://linkedin.com/in/sarveshvengurlekar).
