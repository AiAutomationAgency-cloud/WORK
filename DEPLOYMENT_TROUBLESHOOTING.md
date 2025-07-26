# Deployment Troubleshooting Guide

## Common Issues and Solutions

### 1. "Failed to load team members" Error

This error typically occurs when the frontend cannot reach the backend APIs. Here are the most common causes and solutions:

#### **A. Database Connection Issues**

**Symptoms:**
- "Failed to load team members/services/projects/testimonials"
- API endpoints returning 500 errors
- Database connection errors in logs

**Solutions:**
1. **Verify DATABASE_URL Environment Variable:**
   ```bash
   # In Render dashboard, check Environment Variables
   # DATABASE_URL should be your Supabase connection string
   DATABASE_URL=postgresql://postgres:[password]@[host]:[port]/postgres
   ```

2. **Test Database Connection:**
   - Go to Supabase dashboard → Settings → Database
   - Test connection with provided connection string
   - Ensure password is correct in the connection string

3. **Check Database Permissions:**
   - Verify your Supabase project allows external connections
   - Check if IP restrictions are blocking Render's servers

#### **B. Build/Deploy Issues**

**Symptoms:**
- Application not starting
- 503 Service Unavailable errors
- Build failures

**Solutions:**
1. **Check Build Command:**
   ```yaml
   buildCommand: npm install && npm run build
   ```

2. **Verify Start Command:**
   ```yaml
   startCommand: npm start
   ```

3. **Check Node.js Version:**
   - Ensure you're using Node.js 18+ (compatible with Render)

#### **C. Environment Configuration**

**Symptoms:**
- App starts but APIs fail
- CORS errors
- Environment variable errors

**Solutions:**
1. **Set Required Environment Variables:**
   ```
   NODE_ENV=production
   DATABASE_URL=[your-supabase-url]
   PORT=10000 (Render sets this automatically)
   ```

2. **Verify Health Check:**
   - Health check path: `/api/services`
   - Should return 200 status when working

### 2. Deployment Steps Checklist

#### **Before Deployment:**
- [ ] Build locally: `npm run build`
- [ ] Test production build: `npm start`
- [ ] Verify all APIs work: `curl http://localhost:5000/api/services`
- [ ] Database is accessible and seeded

#### **During Deployment:**
- [ ] Repository connected to Render
- [ ] `render.yaml` configuration is correct
- [ ] Environment variables are set
- [ ] Build completes successfully
- [ ] Health check passes

#### **After Deployment:**
- [ ] Service shows as "Live"
- [ ] Health check endpoint responds
- [ ] Application loads without errors
- [ ] All sections display data correctly

### 3. Quick Fixes

#### **Fix 1: Redeploy**
Sometimes a simple redeploy resolves deployment issues:
1. Go to Render dashboard
2. Find your service
3. Click "Manual Deploy" → "Deploy latest commit"

#### **Fix 2: Check Logs**
1. In Render dashboard → your service → Logs
2. Look for error messages during build/startup
3. Common errors:
   - Database connection failures
   - Missing environment variables
   - Port binding issues

#### **Fix 3: Environment Variables**
1. Render dashboard → your service → Environment
2. Verify DATABASE_URL is set and correct
3. Add any missing variables
4. Trigger redeploy after changes

### 4. Contact Support

If issues persist after trying these solutions:

1. **Check Render Status:**
   - Visit [status.render.com](https://status.render.com)
   - Look for ongoing incidents

2. **Create Support Ticket:**
   - Include deployment logs
   - Mention specific error messages
   - Provide service name and approximate error time

3. **Community Resources:**
   - Render Community Forum
   - Stack Overflow with #render tag

### 5. Alternative Solutions

If deployment continues to fail:

1. **Try Different Platform:**
   - Vercel (requires minor configuration changes)
   - Railway (supports same configuration)
   - Heroku (needs Procfile)

2. **Use Different Database:**
   - Railway PostgreSQL
   - PlanetScale MySQL (requires schema changes)
   - MongoDB Atlas (requires major changes)

Remember: Most deployment issues are resolved by checking environment variables and database connectivity first.