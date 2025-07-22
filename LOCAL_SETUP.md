# Local Development Setup

This guide helps you set up the DigitalTeam portfolio website for local development.

## Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Supabase Account** - [Sign up here](https://supabase.com/)

## Quick Setup (3 Minutes)

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd digitalteam-portfolio

# Install dependencies
npm install
```

### 2. Database Setup

**Option A: Use Supabase (Recommended)**

1. Create a Supabase project at [supabase.com](https://supabase.com/)
2. Go to Settings → Database
3. Copy the Connection String (Transaction pooler)
4. Replace `[YOUR-PASSWORD]` with your database password

**Option B: Local PostgreSQL**

```bash
# Install PostgreSQL locally
# macOS: brew install postgresql
# Ubuntu: sudo apt install postgresql
# Windows: Download from postgresql.org

# Create database
createdb digitalteam_db
```

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env
```

Update `.env` with your database URL:

```env
# For Supabase
DATABASE_URL=postgresql://postgres:your_password@your_project.supabase.co:5432/postgres

# For Local PostgreSQL
# DATABASE_URL=postgresql://username:password@localhost:5432/digitalteam_db

NODE_ENV=development
```

### 4. Database Schema

```bash
# Push database schema
npm run db:push
```

### 5. Start Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5000`

## Development Workflow

### File Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
├── server/                # Express backend
│   ├── db.ts             # Database connection
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data access layer
│   └── seed.ts           # Database seeding
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Database
npm run db:push      # Push schema changes to database

# Production
npm run build        # Build for production
npm start           # Start production server

# Type Checking
npm run check       # Run TypeScript checks
```

### Database Management

**View Data:**
- Use Supabase dashboard for online database
- Use tools like pgAdmin, TablePlus for local PostgreSQL

**Reset Database:**
```bash
# Re-seed with fresh data
npm run dev  # Seeding happens automatically on server start
```

**Schema Changes:**
1. Update `shared/schema.ts`
2. Run `npm run db:push`
3. Restart the development server

### API Testing

Test API endpoints:

```bash
# Services
curl http://localhost:5000/api/services

# Team members
curl http://localhost:5000/api/team

# Projects
curl http://localhost:5000/api/projects

# Testimonials
curl http://localhost:5000/api/testimonials
```

## Troubleshooting

### Common Issues

**Database Connection Failed:**
- Verify DATABASE_URL is correct
- Check database server is running
- Ensure firewall allows connections

**Port Already in Use:**
- Kill process using port 5000: `lsof -ti:5000 | xargs kill`
- Or change port in server configuration

**Dependencies Issues:**
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript Errors:**
```bash
# Check types
npm run check

# Clear TypeScript cache
rm -rf .tsbuild/
```

### IDE Setup

**VS Code Extensions (Recommended):**
- TypeScript and JavaScript Language Features
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter

**Settings:**
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Production Testing

Test production build locally:

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Next Steps

- Review `RENDER_DEPLOYMENT.md` for deployment instructions
- Customize the portfolio content in `server/seed.ts`
- Modify styling in `client/src/index.css`
- Add new features following the existing patterns

## Support

- Check existing code patterns for examples
- Review component structure in `client/src/components/`
- Database schema is defined in `shared/schema.ts`
- API routes are in `server/routes.ts`