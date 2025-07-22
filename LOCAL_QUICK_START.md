# Quick Local Setup

## 3-Minute Setup

### 1. Install Requirements
```bash
# Check if you have Node.js 18+
node --version

# If not, download from: https://nodejs.org/
```

### 2. Setup Project
```bash
# Clone and enter project
git clone <your-repo-url>
cd digitalteam-portfolio

# Install dependencies
npm install

# Setup environment
cp .env.example .env
```

### 3. Database Setup

**Option A: Use Cloud Database (Easiest)**
1. Create free account at [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string to `.env`:
   ```env
   DATABASE_URL=postgresql://username:password@ep-xyz.us-east-2.aws.neon.tech/digitalteam
   ```

**Option B: Local PostgreSQL**
```bash
# Install PostgreSQL
# macOS: brew install postgresql
# Ubuntu: sudo apt install postgresql

# Create database
sudo -u postgres createdb digitalteam_db
```

### 4. Start Development
```bash
# Initialize database
npm run db:push

# Start server
npm run dev
```

### 5. Open Browser
Visit: `http://localhost:5000`

**You should see:**
- Your DigitalTeam portfolio website
- Modern light theme
- Team: Prince Mehta, Somadeep Roy, Rahul Prasad
- All sections working (Services, Team, Projects, Testimonials)

## Troubleshooting

**Database Issues?**
```bash
# Check environment
cat .env

# Reset database
npm run db:push
```

**Port Issues?**
```bash
# Use different port
PORT=3001 npm run dev
```

**Module Issues?**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

For detailed setup instructions, see [LOCAL_SETUP.md](./LOCAL_SETUP.md)