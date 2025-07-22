# VS Code Setup Guide

This guide helps you set up the DigitalTeam portfolio project in VS Code for optimal development experience.

## Prerequisites

1. **VS Code** installed
2. **Node.js 18+** installed
3. **Git** installed
4. **PostgreSQL** (local or cloud database)

## Quick Setup

### 1. Clone and Open Project

```bash
# Clone the repository
git clone <your-repo-url>
cd digitalteam-portfolio

# Open in VS Code
code .
```

### 2. Install Recommended Extensions

VS Code will automatically suggest installing recommended extensions. Click "Install All" or install individually:

- **Prettier** - Code formatter
- **Tailwind CSS IntelliSense** - Tailwind CSS autocomplete
- **TypeScript and JavaScript Language Features** - Enhanced TypeScript support
- **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
- **Path Intellisense** - File path autocomplete

### 3. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your database credentials
# Use VS Code: Ctrl+Shift+P → "Open Settings (JSON)"
```

Example `.env` content:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/digitalteam_db
NODE_ENV=development
PORT=5000
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Database Setup

```bash
# Push schema to database
npm run db:push
```

## Development Workflow

### Starting Development Server

**Option 1: VS Code Tasks (Recommended)**
- Press `Ctrl+Shift+P` (Cmd+Shift+P on Mac)
- Type "Tasks: Run Task"
- Select "Start Development Server"

**Option 2: Terminal**
```bash
npm run dev
```

**Option 3: VS Code Debugger**
- Press `F5` to start debugging
- Choose "Launch Full Stack App"

### Available Tasks

Access via `Ctrl+Shift+P` → "Tasks: Run Task":

- **Start Development Server** - Runs `npm run dev`
- **Build Production** - Runs `npm run build`
- **Type Check** - Runs `npm run check`
- **Database Push** - Runs `npm run db:push`

### Debugging

**Debug the Full Application:**
1. Press `F5`
2. Select "Launch Full Stack App"
3. Set breakpoints in server code
4. Application runs at `http://localhost:5000`

**Debug Server Only:**
1. Press `F5`
2. Select "Debug Server Only"
3. Frontend won't be served, but you can debug API endpoints

## VS Code Features

### IntelliSense and Autocomplete

- **TypeScript**: Full type checking and autocomplete
- **Tailwind CSS**: Class name suggestions and previews
- **Path Aliases**: `@/` for client/src, `@shared/` for shared files
- **Import Suggestions**: Automatic import suggestions

### Code Formatting

- **Auto Format on Save**: Enabled by default
- **Prettier Integration**: Consistent code formatting
- **Manual Format**: `Shift+Alt+F` (Windows/Linux) or `Shift+Option+F` (Mac)

### File Navigation

- **Quick Open**: `Ctrl+P` to quickly open files
- **Symbol Search**: `Ctrl+Shift+O` to search functions/variables in file
- **Workspace Search**: `Ctrl+Shift+F` to search across all files

## Project Structure in VS Code

```
digitalteam-portfolio/
├── .vscode/              # VS Code configuration
│   ├── settings.json     # Workspace settings
│   ├── tasks.json        # Build tasks
│   ├── launch.json       # Debug configurations
│   └── extensions.json   # Recommended extensions
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   └── lib/          # Utilities
│   └── index.html
├── server/               # Backend application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database layer
├── shared/               # Shared types
│   └── schema.ts         # Database schema
├── .env.example          # Environment template
└── README.md
```

## Useful VS Code Shortcuts

### General
- `Ctrl+Shift+P` - Command Palette
- `Ctrl+P` - Quick Open File
- `Ctrl+Shift+E` - Explorer
- `Ctrl+Shift+F` - Search Across Files
- `Ctrl+\`` - Toggle Terminal

### Editing
- `Alt+Up/Down` - Move line up/down
- `Shift+Alt+Up/Down` - Copy line up/down
- `Ctrl+/` - Toggle line comment
- `Shift+Alt+F` - Format document
- `F2` - Rename symbol

### Navigation
- `Ctrl+G` - Go to line
- `Ctrl+Shift+O` - Go to symbol in file
- `F12` - Go to definition
- `Alt+F12` - Peek definition
- `Shift+F12` - Find all references

### Debugging
- `F5` - Start debugging
- `F9` - Toggle breakpoint
- `F10` - Step over
- `F11` - Step into
- `Shift+F5` - Stop debugging

## Tips and Tricks

### 1. Multi-Cursor Editing
- `Ctrl+D` - Select next occurrence of current word
- `Ctrl+Shift+L` - Select all occurrences
- `Alt+Click` - Add cursor at click position

### 2. Code Snippets
Type these prefixes and press Tab:
- `rafce` - React Arrow Function Component Export
- `useState` - React useState hook
- `useEffect` - React useEffect hook

### 3. Integrated Terminal
- `Ctrl+\`` - Toggle terminal
- `Ctrl+Shift+\`` - Create new terminal
- Multiple terminals for frontend/backend

### 4. Git Integration
- `Ctrl+Shift+G` - Source Control panel
- Built-in diff viewer
- Commit, push, pull from VS Code

### 5. Extensions Panel
- `Ctrl+Shift+X` - Extensions
- Search and install additional extensions
- Manage enabled/disabled extensions

## Troubleshooting

### Common Issues

**1. TypeScript Errors**
- Ensure TypeScript extension is enabled
- Run `npm run check` to see all errors
- Restart TypeScript service: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

**2. Import Path Issues**
- Check `tsconfig.json` for path aliases
- Ensure files exist at specified paths
- Use relative paths if aliases don't work

**3. Tailwind CSS Not Working**
- Install Tailwind CSS IntelliSense extension
- Check `tailwind.config.ts` configuration
- Ensure PostCSS is configured

**4. Database Connection**
- Verify `.env` file exists and has correct values
- Check database server is running
- Test connection: `npm run db:push`

**5. Port Already in Use**
- Change PORT in `.env` file
- Kill existing process: `pkill -f node`
- Or use different port: `PORT=3001 npm run dev`

### Performance Tips

**1. Exclude Large Folders**
Add to workspace settings:
```json
{
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.cache": true
  }
}
```

**2. Disable Unused Extensions**
- Only enable extensions you actually use
- Some extensions can slow down VS Code

**3. Adjust TypeScript Settings**
```json
{
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always"
}
```

## Customization

### Themes
Popular themes for React/TypeScript development:
- **Dark+** (default dark)
- **One Dark Pro**
- **Material Theme**
- **Dracula**

### Fonts
Recommended programming fonts:
- **Fira Code** (ligatures)
- **JetBrains Mono**
- **Cascadia Code**

### Settings
Customize in `settings.json`:
```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.minimap.enabled": true,
  "workbench.colorTheme": "Default Dark+"
}
```

This setup provides an optimal development environment for the DigitalTeam portfolio project in VS Code!