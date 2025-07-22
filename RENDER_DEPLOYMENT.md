# Render Deployment Guide

This guide walks you through deploying the DigitalTeam portfolio website to Render.

## Prerequisites

1. **GitHub/GitLab account** with your project repository
2. **Render account** (free tier available)
3. **Project built and ready** (which you already have!)

## Step-by-Step Deployment

### 1. Prepare Your Repository

Ensure your repository has all the deployment files (already done):
- ✅ `render.yaml` - Render configuration
- ✅ `package.json` - Node.js dependencies and scripts
- ✅ `.env.example` - Environment variables template
- ✅ Built and tested application

### 2. Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with GitHub/GitLab
3. Authorize Render to access your repositories

### 3. Connect Your Repository

**Option A: Using render.yaml (Recommended)**
1. In Render Dashboard, click **"New +"**
2. Select **"Blueprint"**
3. Connect your GitHub/GitLab repository
4. Render will automatically detect the `render.yaml` file
5. Click **"Apply"**

**Option B: Manual Setup**
1. In Render Dashboard, click **"New +"**
2. Select **"Web Service"**
3. Connect your repository
4. Configure manually (see configuration below)

### 4. Service Configuration

If setting up manually, use these settings:

**Web Service Settings:**
- **Name**: `digitalteam-portfolio`
- **Environment**: `Node`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Plan**: `Free` (or `Starter` for better performance)

**Advanced Settings:**
- **Health Check Path**: `/api/services`
- **Auto-Deploy**: `Yes` (deploys on git push)

### 5. Database Setup

**Option A: Using render.yaml (Automatic)**
The database will be created automatically when using the blueprint.

**Option B: Manual Database Creation**
1. Click **"New +"** → **"PostgreSQL"**
2. **Name**: `digitalteam-db`
3. **Database**: `digitalteam`
4. **User**: `digitalteam_user`
5. **Plan**: `Free` (100MB storage)
6. Click **"Create Database"**

### 6. Environment Variables

Add these environment variables in your web service:

**Required Variables:**
```
NODE_ENV=production
DATABASE_URL=[Auto-filled from database connection]
```

**If using external database:**
```
DATABASE_URL=postgresql://username:password@host:5432/database_name
```

### 7. Deploy

1. Click **"Create Web Service"** or **"Apply Blueprint"**
2. Render will:
   - Clone your repository
   - Install dependencies
   - Build your application
   - Start the server
3. Wait for deployment (usually 3-5 minutes)

### 8. Database Initialization

After first deployment:
1. **Connect to your database** (see Database Management section)
2. **Run migrations** to create tables:
   ```bash
   # In Render Shell or locally with production DATABASE_URL
   npm run db:push
   ```
3. The application will automatically seed initial data on startup

### 9. Custom Domain (Optional)

1. Go to your web service settings
2. Scroll to **"Custom Domains"**
3. Add your domain (e.g., `digitalteam.com`)
4. Update your DNS records as instructed
5. Render will automatically provision SSL certificate

## Database Management

### Connect to Database

**Option 1: Render Dashboard**
1. Go to your PostgreSQL service
2. Click **"Connect"** → **"External Connection"**
3. Use provided connection details

**Option 2: Local Connection**
```bash
# Get connection string from Render dashboard
export DATABASE_URL="postgresql://..."

# Run database commands
npm run db:push
```

### View Database

**Using Render Dashboard:**
1. Go to PostgreSQL service
2. Click **"Connect"**
3. Use web-based psql interface

**Using local tools:**
```bash
# Install PostgreSQL client
psql $DATABASE_URL

# Or use GUI tools like pgAdmin, TablePlus, etc.
```

## Render Configuration Files

### render.yaml (Blueprint)
```yaml
services:
  - type: web
    name: digitalteam-portfolio
    env: node
    plan: starter
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: digitalteam-db
          property: connectionString
    healthCheckPath: /api/services

databases:
  - name: digitalteam-db
    databaseName: digitalteam
    user: digitalteam_user
    plan: starter
```

### Manual Service Configuration
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment**: `Node`
- **Plan**: `Free` or `Starter`

## Monitoring and Logs

### View Logs
1. Go to your web service in Render dashboard
2. Click **"Logs"** tab
3. Real-time logs showing server activity

### Service Health
1. **Health Check**: Configured to check `/api/services`
2. **Metrics**: CPU, memory usage in dashboard
3. **Uptime**: Automatic restarts on failures

### Performance Monitoring
```bash
# Check service status
curl https://your-app.onrender.com/api/services

# Monitor response times
curl -w "@curl-format.txt" -o /dev/null -s https://your-app.onrender.com
```

## Common Issues and Solutions

### 1. Build Failures

**Symptom**: Build fails during npm install or build
**Solutions**:
- Check Node.js version compatibility
- Verify all dependencies in package.json
- Check build logs for specific errors
- Ensure build command is: `npm install && npm run build`

### 2. Database Connection Issues

**Symptom**: "Database connection failed" errors
**Solutions**:
- Verify DATABASE_URL environment variable
- Check database service is running
- Ensure database user has correct permissions
- Run `npm run db:push` to create tables

### 3. Service Won't Start

**Symptom**: Service fails to start or crashes immediately
**Solutions**:
- Check start command: `npm start`
- Verify PORT environment variable usage
- Review logs for specific error messages
- Ensure all environment variables are set

### 4. Slow Cold Starts

**Symptom**: First request after inactivity is slow
**Solutions**:
- Upgrade to paid plan (keeps service warm)
- Implement service keep-alive pings
- Optimize application startup time

### 5. Memory Issues

**Symptom**: Service crashes with memory errors
**Solutions**:
- Upgrade to higher memory plan
- Optimize application memory usage
- Check for memory leaks

## Render-Specific Features

### Auto-Deploy
- Automatically deploys when you push to main branch
- Can be disabled in service settings
- Supports deploy previews for pull requests

### Environment Branches
- Different environments for staging/production
- Branch-based deployments
- Environment-specific variables

### Zero-Downtime Deploys
- New version deployed before old one is terminated
- Health checks ensure service readiness
- Automatic rollback on deployment failures

### Free Tier Limitations
- Service spins down after 15 minutes of inactivity
- 750 hours per month (about 31 days)
- Shared resources (slower performance)

### Paid Plan Benefits
- Always-on services (no spin down)
- Dedicated resources
- Priority support
- Custom domains with SSL

## Security Best Practices

### Environment Variables
- Never commit secrets to repository
- Use Render's environment variable system
- Rotate database passwords regularly

### Database Security
- Database is private by default
- Use strong passwords
- Regular backups (automatic in paid plans)

### Application Security
- HTTPS enforced automatically
- Keep dependencies updated
- Input validation implemented

## Performance Optimization

### Application Level
- Enable gzip compression (already configured)
- Optimize database queries
- Use database connection pooling (already implemented)

### Render Level
- Choose appropriate instance size
- Use CDN for static assets
- Monitor service metrics

## Backup and Recovery

### Database Backups
**Free Plan**: No automatic backups
**Paid Plans**: Daily automatic backups

**Manual Backup**:
```bash
# Export database
pg_dump $DATABASE_URL > backup.sql

# Restore database
psql $DATABASE_URL < backup.sql
```

### Code Backup
- Code is automatically backed up in your Git repository
- Render keeps deployment history
- Can rollback to previous deployments

## Cost Estimation

### Free Tier
- **Web Service**: Free (with limitations)
- **PostgreSQL**: Free (100MB storage)
- **Total**: $0/month

### Starter Tier
- **Web Service**: $7/month
- **PostgreSQL**: $7/month  
- **Total**: $14/month

### Pro Tier
- **Web Service**: $25/month
- **PostgreSQL**: $20/month
- **Total**: $45/month

## Next Steps After Deployment

1. **Test your live application** thoroughly
2. **Set up monitoring** for uptime and performance
3. **Configure custom domain** if needed
4. **Set up automated backups** (paid plans)
5. **Monitor logs** for any issues
6. **Scale resources** as traffic grows

Your DigitalTeam portfolio is now live on Render! 🚀

## Support

- **Render Documentation**: [render.com/docs](https://render.com/docs)
- **Community Forum**: [community.render.com](https://community.render.com)
- **Support**: Available through dashboard (paid plans get priority)