# Deployment Guide

This guide covers how to deploy the DigitalTeam portfolio website to various platforms.

## Prerequisites

1. **Node.js 18+** installed locally
2. **PostgreSQL database** (local or cloud)
3. **Git** for version control

## Environment Variables

Create a `.env` file in the root directory with these variables:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@host:5432/database_name

# Application Configuration
NODE_ENV=production
PORT=5000
```

## Local Development Setup

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo-url>
   cd digitalteam-portfolio
   npm install
   ```

2. **Setup environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

3. **Initialize database:**
   ```bash
   npm run db:push
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## Production Build

To build for production:

```bash
# Build both frontend and backend
npm run build

# Start production server
npm start
```

## Vercel Deployment

### Automatic Deployment (Recommended)

1. **Push to GitHub/GitLab/Bitbucket**

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables:**
   In Vercel dashboard → Project → Settings → Environment Variables:
   ```
   DATABASE_URL = your_postgresql_connection_string
   NODE_ENV = production
   ```

4. **Database Providers for Vercel:**
   - **Neon** (Recommended): [neon.tech](https://neon.tech)
   - **PlanetScale**: [planetscale.com](https://planetscale.com)
   - **Supabase**: [supabase.com](https://supabase.com)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables
vercel env add DATABASE_URL
vercel env add NODE_ENV
```

## Railway Deployment

1. **Connect Repository:**
   - Go to [railway.app](https://railway.app)
   - Click "Deploy from GitHub repo"
   - Select your repository

2. **Environment Variables:**
   ```
   DATABASE_URL = your_postgresql_connection_string
   NODE_ENV = production
   PORT = ${{ PORT }}
   ```

3. **Build Settings:**
   - Build Command: `npm run build`
   - Start Command: `npm start`

## Render Deployment

1. **Create Web Service:**
   - Go to [render.com](https://render.com)
   - Click "New Web Service"
   - Connect your repository

2. **Configuration:**
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment Variables:
     ```
     DATABASE_URL = your_postgresql_connection_string
     NODE_ENV = production
     ```

## Netlify Deployment

Note: Netlify is primarily for static sites. For full-stack apps, use Netlify Functions:

1. **Build Settings:**
   - Build command: `npm run build:client`
   - Publish directory: `dist/public`

2. **Netlify Functions:**
   Create `netlify/functions/` directory and convert Express routes to Netlify Functions.

## Heroku Deployment

1. **Install Heroku CLI**

2. **Create Heroku App:**
   ```bash
   heroku create your-app-name
   ```

3. **Set Environment Variables:**
   ```bash
   heroku config:set DATABASE_URL=your_postgresql_url
   heroku config:set NODE_ENV=production
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

## DigitalOcean App Platform

1. **Create App:**
   - Go to DigitalOcean App Platform
   - Connect your repository

2. **Configuration:**
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Environment Variables: Same as above

## AWS Deployment

### Using AWS Amplify

1. **Connect Repository:**
   - Go to AWS Amplify Console
   - Connect your Git repository

2. **Build Settings:**
   ```yaml
   version: 1
   applications:
     - frontend:
         phases:
           preBuild:
             commands:
               - npm install
           build:
             commands:
               - npm run build
         artifacts:
           baseDirectory: dist/public
           files:
             - '**/*'
   ```

### Using AWS EC2

1. **Launch EC2 Instance** (Ubuntu 20.04 LTS)

2. **Install Dependencies:**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs

   # Install PM2
   sudo npm install -g pm2
   ```

3. **Deploy Application:**
   ```bash
   # Clone repository
   git clone <your-repo-url>
   cd digitalteam-portfolio

   # Install dependencies
   npm install

   # Build application
   npm run build

   # Start with PM2
   pm2 start dist/index.js --name "digitalteam"
   pm2 startup
   pm2 save
   ```

## Database Setup

### Neon (Recommended for Vercel)

1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Run migrations: `npm run db:push`

### Local PostgreSQL

1. **Install PostgreSQL:**
   ```bash
   # Ubuntu/Debian
   sudo apt install postgresql postgresql-contrib

   # macOS
   brew install postgresql
   ```

2. **Create Database:**
   ```bash
   sudo -u postgres psql
   CREATE DATABASE digitalteam_db;
   CREATE USER your_username WITH ENCRYPTED PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE digitalteam_db TO your_username;
   ```

## Troubleshooting

### Common Issues

1. **Build Failures:**
   - Check Node.js version (18+ required)
   - Verify all dependencies are installed
   - Check TypeScript errors: `npm run check`

2. **Database Connection:**
   - Verify DATABASE_URL format
   - Check database server is running
   - Ensure database exists and user has permissions

3. **Environment Variables:**
   - Make sure all required variables are set
   - Check variable names match exactly
   - Restart service after changing variables

### Performance Optimization

1. **Enable Gzip Compression** (Express middleware)
2. **Use CDN** for static assets
3. **Database Connection Pooling** (already configured)
4. **Image Optimization** for better loading times

## Security Checklist

- [ ] Environment variables properly secured
- [ ] Database credentials not in code
- [ ] HTTPS enabled in production
- [ ] CORS configured appropriately
- [ ] Rate limiting implemented (if needed)
- [ ] Input validation on all endpoints

## Monitoring

Consider adding these monitoring tools:
- **Vercel Analytics** (if using Vercel)
- **Sentry** for error tracking
- **LogRocket** for user sessions
- **Google Analytics** for website analytics