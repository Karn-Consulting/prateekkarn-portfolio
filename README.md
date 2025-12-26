# Prateek Karn Portfolio

A professional portfolio website for Prateek Karn - AI Business Architect & Growth Strategist.

## Live Site

**Production URL**: [https://prateekkarn.com](https://prateekkarn.com)

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Vercel
- **Email Service**: Resend API

## Features

- Responsive, mobile-first design
- Newsletter subscription with Resend integration
- Blog/Insights section
- Career timeline
- Portfolio showcase
- Testimonials with LinkedIn integration

## Development

### Prerequisites

- Node.js 18+ (recommended: use nvm)
- pnpm package manager

### Local Setup

```bash
# Clone the repository
git clone https://github.com/Karn-Consulting/prateekkarn-portfolio.git

# Navigate to project directory
cd prateekkarn-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Build for Production

```bash
pnpm run build
```

### Environment Variables

For the newsletter subscription to work, set the following environment variable in Vercel:

- `RESEND_API_KEY` - Your Resend API key

## Project Structure

```
├── api/                    # Vercel serverless functions
│   └── subscribe.ts        # Newsletter subscription endpoint
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── pages/              # Page components
│   └── App.tsx             # Main application
├── package.json
├── tailwind.config.js
└── vercel.json             # Vercel configuration
```

## Deployment

The site is deployed on Vercel with automatic deployments on push to the `main` branch.

### Custom Domain

The site is configured with:
- Primary: prateekkarn.com
- WWW redirect: www.prateekkarn.com

## License

© 2025 Prateek Karn. All rights reserved.
