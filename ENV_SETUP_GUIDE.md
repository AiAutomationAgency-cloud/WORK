# Environment Variables Setup Guide

Understanding how environment variables work in this full-stack application.

## Architecture Overview

This project has **two separate environments**:

1. **Server (Node.js)** - Runs on the backend
2. **Client (Browser/Vite)** - Runs in the user's browser

## Environment Variable Locations

### Server Environment Variables
- **File**: `.env` (in project root)
- **Access**: `process.env.VARIABLE_NAME`
- **Used by**: Node.js server, database connections, API routes
- **Security**: Private - never exposed to browser

### Client Environment Variables  
- **File**: `.env` (same file, but only `VITE_` prefixed variables)
- **Access**: `import.meta.env.VITE_VARIABLE_NAME`
- **Used by**: React components, frontend logic
- **Security**: Public - exposed to browser (never put secrets here)

## Current Project Setup

### Server Variables (Required)
```env
# .env file in project root
DATABASE_URL=postgresql://username:password@localhost:5432/digitalteam_db
NODE_ENV=development
PORT=5000
```

### Client Variables (None Required)
This project doesn't need client environment variables because:
- Client makes API calls to the same server (relative URLs)
- No client-side API keys needed
- No external services called from browser

## File Structure

```
digitalteam-portfolio/
├── .env                    # Server environment variables
├── .env.example           # Template file
├── package.json
├── server/                # Server code (uses process.env)
│   ├── index.ts          # Imports 'dotenv/config'
│   ├── db.ts             # Uses process.env.DATABASE_URL
│   └── ...
└── client/               # Client code (uses import.meta.env.VITE_*)
    ├── src/
    └── ...
```

## How It Works

### Server Side
```typescript
// server/index.ts
import 'dotenv/config';  // Loads .env file

// server/db.ts
const dbUrl = process.env.DATABASE_URL;  // Reads from .env
```

### Client Side
```typescript
// client/src/lib/queryClient.ts
const baseURL = "";  // Empty = same server (no env needed)

// If we needed a client variable:
// const apiUrl = import.meta.env.VITE_API_URL;
```

## Common Mistakes

❌ **Wrong**: Trying to access server variables in client
```javascript
// This won't work in browser
const dbUrl = process.env.DATABASE_URL;  // undefined in browser
```

❌ **Wrong**: Client .env file
```
client/.env  // Don't create this
```

✅ **Correct**: Single .env in project root
```
.env  // Put in project root (same level as package.json)
```

## Setup Steps

1. **Create .env file in project root**
   ```bash
   cp .env.example .env
   ```

2. **Edit .env with your database details**
   ```env
   DATABASE_URL=postgresql://your_details_here
   ```

3. **Start server** (automatically loads .env)
   ```bash
   npm run dev
   ```

## Troubleshooting

### "Cannot find package 'dotenv'"
**Solution**: Install dotenv
```bash
npm install dotenv
```

### "DATABASE_URL must be set"
**Solution**: Check .env file exists and has DATABASE_URL
```bash
# Check file exists
ls -la .env

# Check contents
cat .env
```

### Environment variables not loading
**Solutions**:
1. Ensure .env is in project root (same level as package.json)
2. Restart server after changing .env
3. Check for syntax errors in .env (no spaces around =)

### Client can't access server variables
**This is correct behavior**:
- Server variables are private for security
- Client should make API calls to get data
- Only VITE_ variables are available in client

## Security Best Practices

### Server Variables (.env)
- ✅ Database credentials
- ✅ API keys for server-side services
- ✅ Secrets and passwords
- ❌ Never commit .env to git

### Client Variables (VITE_*)
- ✅ Public API endpoints
- ✅ Public configuration
- ❌ Never put secrets here (visible to users)

## Deployment Considerations

### Local Development
- Use .env file in project root
- Install dotenv package
- Keep .env in .gitignore

### Production Deployment
- Set environment variables in hosting platform
- Don't upload .env file to server
- Use platform's environment variable system

### Example: Render Deployment
- Set DATABASE_URL in Render dashboard
- No .env file needed on server
- Environment variables set through UI

This separation ensures security and proper environment isolation!