# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Magic Portfolio - A modern portfolio website built with Next.js 15, React 19, TypeScript, and Once UI design system. Features MDX-based content management for blog posts and projects.

## Essential Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run Next.js linting
npm run export   # Export static site
```

## Architecture Overview

### Technology Stack
- **Next.js 15.3.1** with App Router
- **React 19.0.0** 
- **TypeScript** with strict mode
- **Once UI System** (v1.2.4) - Component library and design system
- **MDX** for content authoring
- **SCSS/Sass** with CSS modules

### Project Structure
- `/src/app/` - Next.js App Router pages and API routes
- `/src/components/` - Reusable React components organized by feature
- `/src/app/resources/` - Configuration files (content.js, once-ui.config.js)
- `/src/utils/` - Utility functions
- `/public/images/` - Static images organized by section (blog, gallery, work, etc.)

### Key Configuration Files
- `src/app/resources/config.js` - Main site configuration
- `src/app/resources/content.js` - Content and sections configuration
- `src/app/resources/once-ui.config.js` - UI theme configuration

### Content Management
- Blog posts: `/src/app/blog/posts/*.mdx`
- Projects: `/src/app/work/projects/*.mdx`
- MDX files support frontmatter for metadata and React components

### Code Style
- Biome for formatting and linting
- 2-space indentation
- Double quotes for JavaScript/TypeScript
- 100 character line width
- Path alias: `@/*` maps to `./src/*`

### Environment Variables
- `PAGE_ACCESS_PASSWORD` - Password protection for routes (optional)

### SEO Features
- Automatic Open Graph image generation via `/api/og` route
- Schema.org metadata generation
- Sitemap and robots.txt support

### Deployment
Optimized for Vercel deployment with zero configuration needed.