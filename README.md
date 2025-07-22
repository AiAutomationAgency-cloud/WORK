# DigitalTeam Portfolio Website

A modern, full-stack portfolio website for DigitalTeam - a digital agency specializing in web development, video editing, image editing, and branding services.

## Features

- 🚀 Modern React frontend with TypeScript
- 🎨 Beautiful UI with Tailwind CSS and Framer Motion animations
- 🌙 Dark/light theme support
- 📱 Fully responsive design
- 🗄️ PostgreSQL database with Drizzle ORM
- 🔄 Real-time data with React Query
- 🎯 SEO optimized

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Query** for data fetching
- **Wouter** for routing
- **Radix UI** components

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** database
- **Zod** for validation

## Quick Start

### Prerequisites
- Node.js 18+ 
- Supabase account and database
- Git

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd digitalteam-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Supabase database URL:
   ```env
   DATABASE_URL=postgresql://postgres:your_password@your_project.supabase.co:5432/postgres
   NODE_ENV=development
   ```

4. **Database Setup**
   ```bash
   # Push schema to database
   npm run db:push
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5000`

### Build for Production

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

## Deployment

This application is configured for deployment on **Render** with **Supabase** database.

Follow the `RENDER_DEPLOYMENT.md` guide for complete step-by-step deployment instructions.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configuration
│   │   └── index.css      # Global styles
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database layer
│   └── seed.ts            # Database seeding
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema and types
├── package.json
├── vercel.json            # Vercel deployment configuration
└── README.md
```

## API Endpoints

- `GET /api/services` - Get all services
- `GET /api/team` - Get team members  
- `GET /api/projects` - Get portfolio projects
- `GET /api/testimonials` - Get client testimonials

## Database Schema

The application uses four main entities:
- **Services** - Digital services offered
- **Team Members** - Staff profiles with skills
- **Projects** - Portfolio items with categories
- **Testimonials** - Client feedback with ratings

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push schema changes to database

### Code Style

- TypeScript strict mode enabled
- ESLint for code quality
- Prettier for formatting
- Tailwind CSS for styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support, email [your-email] or create an issue in the repository.

## License

MIT License - see LICENSE file for details.