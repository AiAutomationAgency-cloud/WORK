# Quick Start: Deploy to Render

## 5-Minute Deployment Guide

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### 2. Deploy on Render
1. Go to [render.com](https://render.com) and sign up
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repository
4. Click **"Apply"** (render.yaml will be auto-detected)
5. Wait 3-5 minutes for deployment

### 3. Your App is Live!
- **URL**: `https://digitalteam-portfolio.onrender.com`
- **Database**: Automatically created and connected
- **SSL**: Automatically configured

## What Happens Automatically
✅ Creates PostgreSQL database  
✅ Builds your application  
✅ Sets up environment variables  
✅ Configures health checks  
✅ Enables auto-deploy on git push  
✅ Seeds database with your team data  

## Important URLs After Deployment
- **Live Website**: Check your Render dashboard for the URL
- **Database Dashboard**: Available in Render PostgreSQL service
- **Logs**: Real-time logs in Render dashboard

## Need Help?
See the complete [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) guide for detailed instructions and troubleshooting.