# Database Setup Guide

## Current Status
You're currently using a Neon PostgreSQL database, but the project is configured for Supabase. Here are your options:

## Option 1: Continue with Neon (Recommended for now)

### Local Development Setup:
1. **Use your existing Neon database** (already working)
   ```bash
   # Your current DATABASE_URL is already set:
   # postgresql://neondb_owner:npg_tBGydbjmv35w@ep-soft-base-aexi1ydo.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

2. **Create .env file for local development:**
   ```bash
   cp .env.example .env
   ```
   
3. **Update .env with your Neon URL:**
   ```
   DATABASE_URL=postgresql://neondb_owner:npg_tBGydbjmv35w@ep-soft-base-aexi1ydo.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
   NODE_ENV=development
   ```

### Deployment Setup (Render):
1. **In Render Dashboard → Environment Variables:**
   ```
   NODE_ENV=production
   DATABASE_URL=postgresql://neondb_owner:npg_tBGydbjmv35w@ep-soft-base-aexi1ydo.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

2. **Deploy your application:**
   - Render will use the same Neon database
   - No additional database setup needed

## Option 2: Switch to Supabase

### Why Supabase?
- Better free tier (500MB vs 512MB)
- Built-in authentication (if needed later)
- Real-time features
- Better dashboard and monitoring

### Setup Steps:

#### 1. Create Supabase Project:
1. Go to [supabase.com](https://supabase.com)
2. Sign up/login
3. Click "New Project"
4. Choose organization and project name: `digitalteam-portfolio`
5. Select region closest to you
6. Set a strong password (save it!)

#### 2. Get Connection String:
1. In Supabase Dashboard → Settings → Database
2. Copy "Connection string" from "Connection pooling"
3. Replace `[YOUR-PASSWORD]` with your actual password
4. URL format: `postgresql://postgres.xxx:password@xxx.pooler.supabase.com:6543/postgres`

#### 3. Update Local Environment:
```bash
# Create .env file
DATABASE_URL=postgresql://postgres.your_ref:your_password@your_ref.pooler.supabase.com:6543/postgres
NODE_ENV=development
```

#### 4. Update Deployment:
- In Render Dashboard → Environment Variables
- Set DATABASE_URL to your Supabase connection string

## Option 3: Use Local PostgreSQL

### For Local Development Only:
```bash
# Install PostgreSQL locally
# Ubuntu/Debian:
sudo apt update && sudo apt install postgresql

# macOS:
brew install postgresql

# Start PostgreSQL service
sudo systemctl start postgresql  # Linux
brew services start postgresql   # macOS

# Create database
createdb digitalteam_portfolio

# Update .env
DATABASE_URL=postgresql://postgres:password@localhost:5432/digitalteam_portfolio
```

## Database Schema Management

### Push Schema Changes:
```bash
npm run db:push
```

### If you get schema conflicts:
```bash
# Option 1: Drop and recreate (loses data)
npm run db:push -- --force

# Option 2: Manual fix via SQL
# Use the SQL tool in Replit to fix conflicts
```

## Troubleshooting Common Issues

### 1. "DATABASE_URL must be set" Error:
```bash
# Create .env file if missing
echo "DATABASE_URL=your_database_url_here" > .env
echo "NODE_ENV=development" >> .env
```

### 2. Connection Timeout:
- Check if database is sleeping (common with free tiers)
- Verify connection string is correct
- Test with: `npm run db:push`

### 3. Schema Conflicts:
- Delete conflicting tables manually
- Use `npm run db:push --force` (loses data)
- Check migration files for conflicts

### 4. Deployment Database Issues:
- Ensure DATABASE_URL is set in Render environment variables
- Check database allows external connections
- Verify SSL mode if required

## Recommended Next Steps

1. **For immediate fix:** Keep using Neon, just create the .env file
2. **For production:** Consider switching to Supabase for better features
3. **For testing:** Use the database setup script I'll create

## Database Setup Script

I'll create a setup script that automatically:
- Detects your current database
- Creates necessary tables
- Seeds with sample data
- Verifies everything works

Would you like me to create this automated setup script?