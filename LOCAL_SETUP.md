# Local Development Setup

Complete guide to run the DigitalTeam portfolio website locally on your machine.

## Prerequisites

### Required Software
- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **PostgreSQL** - [Download here](https://postgresql.org/download/) OR use cloud database

### Verify Installation
```bash
node --version    # Should show v18+ 
npm --version     # Should show 8+
git --version     # Should show 2.x+
psql --version    # Should show 12+ (if using local PostgreSQL)
```

## Step-by-Step Setup

### 1. Clone the Repository
```bash
# Clone your repository
git clone <your-github-repo-url>
cd digitalteam-portfolio

# Or if you have the project folder already
cd digitalteam-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Setup

**Option A: Local PostgreSQL (Recommended for development)**

1. **Install PostgreSQL** (if not already installed)
   ```bash
   # macOS (using Homebrew)
   brew install postgresql
   brew services start postgresql
   
   # Ubuntu/Debian
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo systemctl start postgresql
   
   # Windows - Use PostgreSQL installer from website
   ```

2. **Create Database and User**
   ```bash
   # Connect to PostgreSQL
   sudo -u postgres psql
   
   # Create database and user
   CREATE DATABASE digitalteam_db;
   CREATE USER digitalteam_user WITH ENCRYPTED PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE digitalteam_db TO digitalteam_user;
   \q
   ```

**Option B: Cloud Database (Neon, Supabase, etc.)**
1. Create account at [Neon.tech](https://neon.tech) or [Supabase.com](https://supabase.com)
2. Create new project/database
3. Copy the connection string

### 4. Environment Configuration
```bash
# Copy environment template
cp .env.example .env
```

Edit `.env` file with your database details:
```env
# For local PostgreSQL
DATABASE_URL=postgresql://digitalteam_user:your_password@localhost:5432/digitalteam_db

# For cloud database (example with Neon)
DATABASE_URL=postgresql://username:password@ep-xyz.us-east-2.aws.neon.tech/digitalteam

# Application settings
NODE_ENV=development
PORT=5000
```

### 5. Initialize Database
```bash
# Push schema to database (creates tables)
npm run db:push
```

### 6. Start Development Server
```bash
npm run dev
```

**Your application will be available at:** `http://localhost:5000`

## What You'll See

When the server starts successfully, you'll see:
```
🌱 Seeding database...
✅ Services seeded
✅ Team members seeded  
✅ Projects seeded
✅ Testimonials seeded
🎉 Database seeding completed successfully!
[timestamp] [express] serving on port 5000
```

### Team Members Data
Your website will show:
- **Prince Mehta** - CEO & Director
- **Somadeep Roy** - Marketing Head
- **Rahul Prasad** - Creative Video Editor

## Development Commands

### Essential Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run check

# Database operations
npm run db:push    # Push schema changes to database
```

### Development Workflow
1. **Make changes** to code
2. **Save files** - Hot reload will update automatically
3. **Check browser** - Changes appear instantly
4. **Check terminal** - For any errors or API logs

## Project Structure

```
digitalteam-portfolio/
├── client/                 # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components  
│   │   ├── lib/           # Utilities
│   │   └── index.css      # Global styles
│   └── index.html
├── server/                 # Backend (Express + TypeScript)
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database operations
│   └── seed.ts            # Database seeding
├── shared/                 # Shared types
│   └── schema.ts          # Database schema
├── .env                   # Environment variables
└── package.json           # Dependencies
```

## Accessing Different Parts

### Frontend (React App)
- **URL**: `http://localhost:5000`
- **Hot Reload**: Automatic on file changes
- **Dev Tools**: React DevTools browser extension recommended

### Backend API
- **Services**: `http://localhost:5000/api/services`
- **Team**: `http://localhost:5000/api/team`  
- **Projects**: `http://localhost:5000/api/projects`
- **Testimonials**: `http://localhost:5000/api/testimonials`

### Database
```bash
# Connect to local database
psql -U digitalteam_user -d digitalteam_db

# View tables
\dt

# View team members
SELECT name, role FROM team_members;

# Exit
\q
```

## Common Issues & Solutions

### 1. Port Already in Use
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>

# Or use different port
PORT=3001 npm run dev
```

### 2. Database Connection Failed
**Symptoms**: 
- "Database connection failed" error
- Tables not created

**Solutions**:
```bash
# Check PostgreSQL is running
# macOS
brew services list | grep postgresql

# Ubuntu/Linux  
sudo systemctl status postgresql

# Verify database exists
psql -U digitalteam_user -d digitalteam_db -c "SELECT version();"

# Recreate database if needed
npm run db:push
```

### 3. Module Not Found Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 4. Build Errors
```bash
# Check TypeScript errors
npm run check

# Clear build cache
rm -rf dist
npm run build
```

### 5. Hot Reload Not Working
- **Check**: File is saved properly
- **Try**: Refresh browser manually
- **Restart**: Stop server (Ctrl+C) and run `npm run dev` again

## IDE Setup

### VS Code (Recommended)
1. **Open project**: `code .`
2. **Install extensions**: VS Code will suggest recommended extensions
3. **Debugging**: Press F5 to start debugging mode
4. **Tasks**: Ctrl+Shift+P → "Tasks: Run Task"

### Other IDEs
- **WebStorm**: Import project, Node.js configuration will be detected
- **Vim/Neovim**: Use TypeScript language server
- **Atom**: Install TypeScript and React packages

## Environment Modes

### Development Mode
```bash
NODE_ENV=development npm run dev
```
- Hot reload enabled
- Detailed error messages
- Development tools available

### Production Mode
```bash
npm run build
NODE_ENV=production npm start
```
- Optimized builds
- Compressed assets
- Production-ready

## Database Management

### View Data
```bash
# Connect to database
psql $DATABASE_URL

# Useful queries
SELECT * FROM services;
SELECT * FROM team_members;
SELECT * FROM projects;
SELECT * FROM testimonials;
```

### Reset Database
```bash
# Drop and recreate tables
npm run db:push

# Server will automatically reseed data on next restart
npm run dev
```

### Backup Database
```bash
# Create backup
pg_dump $DATABASE_URL > backup.sql

# Restore backup
psql $DATABASE_URL < backup.sql
```

## Performance Tips

### Development
- **Use SSD**: Faster file operations
- **Close unused apps**: More RAM for Node.js
- **Use latest Node.js**: Better performance

### Database
- **Use local PostgreSQL**: Faster than cloud during development
- **Limit database connections**: Default settings are optimized
- **Monitor logs**: Check for slow queries

## Testing Your Changes

### Frontend Changes
1. Edit files in `client/src/`
2. Save and check browser
3. Verify responsive design on different screen sizes

### Backend Changes  
1. Edit files in `server/`
2. Check API responses: `curl http://localhost:5000/api/services`
3. Verify database operations

### Database Changes
1. Edit `shared/schema.ts`
2. Run `npm run db:push`
3. Restart server to reseed data

## Production Build Testing

```bash
# Build and test production version
npm run build
npm start

# Check production build works correctly
curl http://localhost:5000/api/services
```

## Next Steps

Once everything is running locally:
1. **Customize team information** if needed
2. **Modify colors/styling** in Tailwind classes
3. **Add new features** to components
4. **Test thoroughly** before deployment
5. **Push to GitHub** for Render deployment

## Getting Help

### Logs and Debugging
```bash
# View all logs
npm run dev

# Check specific API endpoint
curl -v http://localhost:5000/api/team

# Database logs
tail -f /usr/local/var/log/postgresql.log  # macOS
sudo journalctl -u postgresql -f           # Linux
```

### Common Log Messages
- ✅ **"Database seeding completed"** - Everything working
- ❌ **"Database connection failed"** - Check DATABASE_URL
- ❌ **"Port 5000 already in use"** - Kill existing process or use different port

Your local development environment is now ready! The website should be running with your team data and modern light theme.