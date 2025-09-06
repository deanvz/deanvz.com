# deanvz.com

Personal website and blog for Dean van Zyl - Cloud Native Director of Platform

🌐 **Live Site**: [deanvz.com](https://deanvz.com)

## About

This is my personal website showcasing my experience in cloud-native platforms, observability, and building scalable systems. The site features an interactive background animation, skills visualization, and a blog where I share thoughts on platform engineering and technical leadership.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Background**: Vanta.js NET effect
- **Icons**: React Icons, Lucide Icons
- **Deployment**: Cloudflare Pages via GitHub Actions
- **Build Tools**: npm, PostCSS

## Features

- ⚡ **Static Site Generation** - Optimized for performance
- 🎨 **Interactive Background** - Vanta.js NET animation with mouse controls
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Smooth Animations** - Framer Motion for engaging user experience
- 📝 **Blog System** - Static blog with Markdown-like components
- 🔗 **Social Integration** - Links to professional profiles
- 🎯 **Skills Visualization** - Animated progress bars showing expertise levels
- 🏆 **Certifications** - Direct link to Credly badge portfolio

## Skills Highlighted

- **Kubernetes** (90%) - Container orchestration and cluster management
- **AWS** (90%) - Cloud architecture and services
- **Observability** (85%) - Monitoring, logging, and tracing systems
- **Leadership** (95%) - Technical team leadership and mentoring
- **Cloud Architecture** (90%) - Designing scalable cloud-native solutions
- **Infrastructure as Code** (85%) - Terraform, automation, and GitOps

## Development

```bash
# Install dependencies
cd site
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## Deployment

The site automatically deploys to Cloudflare Pages via GitHub Actions on every push to the main branch. The workflow:

1. Builds the Next.js application
2. Exports static files
3. Deploys to Cloudflare Pages using Wrangler

## Project Structure

```
site/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── blog/           # Blog posts and listing
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable React components
│   ├── images/            # Static images and assets
│   └── static/            # Static data files (blog posts)
├── public/                # Public assets
└── package.json          # Dependencies and scripts
```

## Connect

- **LinkedIn**: [linkedin.com/in/deanvz](https://www.linkedin.com/in/deanvz)
- **GitHub**: [github.com/deanvz](https://github.com/deanvz)
- **Certifications**: [Credly Profile](https://www.credly.com/users/dean-van-zyl/badges)

---

Built with ❤️ using modern web technologies and deployed on Cloudflare's edge network for optimal performance worldwide.
