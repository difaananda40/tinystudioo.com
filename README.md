# Difa Ananda's Personal Website

This is the source code for my personal website, [difaananda.works](https://difaananda.works).

## Tech Stack

- [Astro](https://astro.build/) - The web framework for building this site.
- [Tailwind CSS](https://tailwindcss.com/) - For styling the website.
- [GSAP](https://greensock.com/gsap/) - For animations.
- [TypeScript](https://www.typescriptlang.org/) - For type safety.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/difa-ananda/astro-web-profile.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```

## Project Structure

The project is structured as follows:

```
/
├── public/               # Static assets like images, fonts, and icons
│   ├── icons/
│   ├── images/
│   └── lotties/
├── src/
│   ├── components/       # Reusable Astro components
│   │   ├── common/         # Common components like Header and Button
│   │   └── seo/            # SEO related components
│   ├── config/           # Configuration files (e.g., SEO)
│   ├── content/          # Project data and markdown files
│   │   └── projects/       # Markdown files for each project
│   ├── helpers/          # Helper functions
│   ├── layouts/          # Base layouts for pages
│   └── pages/            # Astro pages
│       ├── api/            # API endpoints
│       └── projects/       # Project pages
└── package.json
```

## Deployment

This project is deployed to GitHub Pages using a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The website is automatically deployed on every push to the `main` branch.
