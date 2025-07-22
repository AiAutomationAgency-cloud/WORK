# DigitalTeam Portfolio Website

## Overview

This is a modern portfolio website for DigitalTeam, a digital agency specializing in web development, video editing, image editing, and branding services. The application is built with a full-stack TypeScript architecture using React on the frontend and Express.js on the backend, with PostgreSQL for data persistence via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state, React hooks for local state
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite for development and production builds
- **Theme System**: Dark/light mode support with system preference detection

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API with JSON responses
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Data Seeding**: Automatic database initialization with portfolio content
- **Development**: Hot module replacement via Vite integration
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Key Components

### Data Models
The application manages four main entities:
- **Services**: Digital services offered (web dev, video editing, etc.)
- **Team Members**: Staff profiles with skills and social links
- **Projects**: Portfolio items with categories and technologies
- **Testimonials**: Client feedback with ratings

### Frontend Structure
- **Layout Components**: Header with navigation, Footer with links
- **Section Components**: Hero, About, Services, Team, Portfolio, Testimonials, Contact
- **Theme Provider**: Manages dark/light/system theme preferences
- **API Integration**: React Query hooks for data fetching with loading states

### Backend Structure
- **Route Handlers**: RESTful endpoints for CRUD operations
- **Storage Layer**: DatabaseStorage implementation using PostgreSQL with Drizzle ORM
- **Database Integration**: PostgreSQL database with automated seeding on startup
- **Database Schema**: PostgreSQL tables with proper relationships and constraints

## Data Flow

1. **Client Requests**: Frontend components trigger API calls via React Query
2. **API Processing**: Express routes handle requests and delegate to storage layer
3. **Data Access**: Storage implementation (memory or database) returns typed data
4. **Response Handling**: API responses are cached and managed by React Query
5. **UI Updates**: Components automatically re-render when data changes

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL for production data storage
- **Animation**: Framer Motion for smooth animations and transitions
- **Icons**: Lucide React for consistent iconography
- **Utilities**: date-fns for date handling, clsx for conditional classes

### Development Tools
- **Type Safety**: Full TypeScript coverage with strict mode
- **Code Quality**: ESBuild for production builds
- **Development**: Replit-specific plugins for enhanced development experience

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Assets**: Static assets served from build output directory

### Environment Configuration
- **Development**: Uses Vite dev server with HMR and API proxy
- **Production**: Serves static files and API from single Express server
- **Database**: Environment variable configuration for database connection

### Scaling Considerations
- **Database**: Uses connection pooling via Neon serverless
- **Caching**: React Query provides client-side caching
- **Performance**: Optimized builds with code splitting and lazy loading
- **SEO**: Server-side rendering capability for better search indexing

The application follows modern web development best practices with a clear separation of concerns, type safety throughout the stack, and a responsive design that works across all device sizes.