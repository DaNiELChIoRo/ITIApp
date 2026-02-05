# Setup Guide for ITIApp

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open your browser to `http://localhost:5173`

## Creating PWA Icons

The app needs icon files to function as a complete PWA. You have two options:

### Option A: Generate Icons with a Tool

Use an online tool like [PWA Asset Generator](https://www.pwabuilder.com/imageGenerator) or [RealFaviconGenerator](https://realfavicongenerator.net/):

1. Create or choose a 512x512px image for your app icon (Bible book icon recommended)
2. Upload to the generator
3. Download the generated icons
4. Place these files in `/public/icons/`:
   - `icon-192x192.png`
   - `icon-512x512.png`
5. Replace `/public/favicon.ico` with the generated favicon

### Option B: Create Simple Placeholder Icons

For testing purposes, you can create simple colored squares:

```bash
# On macOS with ImageMagick installed:
convert -size 192x192 xc:#4A90E2 -font Arial-Bold -pointsize 72 -fill white -gravity center -annotate +0+0 "ITI" public/icons/icon-192x192.png
convert -size 512x512 xc:#4A90E2 -font Arial-Bold -pointsize 200 -fill white -gravity center -annotate +0+0 "ITI" public/icons/icon-512x512.png
```

Or manually create PNG files with any image editor.

## Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Setup Steps:

1. **Create a GitHub repository** for this project
2. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ITIApp.git
   git push -u origin main
   ```

3. **Update base path** in `vite.config.js`:
   ```javascript
   base: '/ITIApp/',  // Change to match your repo name
   ```

4. **Deploy using npm script**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**:
   - Go to repository Settings > Pages
   - Set source to `gh-pages` branch
   - Wait 1-2 minutes for deployment

6. **Visit your app**:
   `https://YOUR_USERNAME.github.io/ITIApp/`

#### Automatic Deployment with GitHub Actions:

The included workflow at `.github/workflows/deploy.yml` will automatically deploy on every push to main:

1. Ensure GitHub Actions are enabled in your repository
2. Push changes to main branch
3. GitHub Actions will build and deploy automatically

### Option 2: Other Static Hosts

The built app (`npm run build`) can be deployed to:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your git repository
- **Cloudflare Pages**: Connect repository or upload dist
- **GitHub Codespaces**: Use the preview feature

## Environment Configuration

### Local Development

The app runs on `http://localhost:5173` by default. Vite will show the URL in the terminal.

### Production Build

Test the production build locally:

```bash
npm run build
npm run preview
```

This will build and serve the app at `http://localhost:4173`

## Troubleshooting

### Icons Not Showing

- Ensure icon files exist in `/public/icons/`
- Check browser console for 404 errors
- Clear cache and hard reload (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### PWA Not Installing

- Use HTTPS or localhost (HTTP won't work)
- Check that manifest.json is loading correctly
- Verify service worker is registered (DevTools > Application > Service Workers)

### 404 on GitHub Pages

- Verify the `base` path in `vite.config.js` matches your repo name exactly
- Ensure gh-pages branch has the built files
- Check GitHub Pages settings in repository

### Build Errors

- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node version (16+ required)

## Browser DevTools Tips

### Testing PWA Features:

1. Open DevTools (F12)
2. Go to "Application" tab
3. Check:
   - Manifest: Should load without errors
   - Service Workers: Should show "activated and running"
   - Cache Storage: Should show cached assets after first load

### Testing Offline:

1. Open DevTools > Network tab
2. Check "Offline" checkbox
3. Reload the page - app should still work

## File Structure Reference

```
ITIApp/
├── .github/workflows/     # GitHub Actions
├── public/               # Static assets
│   ├── icons/           # PWA icons (you need to add these)
│   ├── favicon.ico      # Browser favicon (you need to add this)
│   └── robots.txt
├── src/
│   ├── components/      # React components
│   ├── contexts/        # State management
│   ├── hooks/           # Custom hooks
│   ├── pages/           # Main screens
│   ├── styles/          # CSS files
│   ├── utils/           # Helper functions
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js       # Build configuration
├── package.json
└── README.md
```

## Next Steps

1. Add actual icon files
2. Customize colors in `/src/styles/global.css`
3. Test the quiz functionality
4. Deploy to GitHub Pages
5. Share with students!

## Support

For issues or questions:
- Check the README.md for detailed documentation
- Review Vite documentation: https://vitejs.dev
- Review React documentation: https://react.dev

---

Happy coding!
