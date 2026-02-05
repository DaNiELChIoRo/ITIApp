# Quick Start Guide

Get ITIApp running in 3 simple steps!

## Step 1: Install Dependencies

```bash
npm install
```

This will install React, Vite, and all necessary packages (~2 minutes).

## Step 2: Start Development Server

```bash
npm run dev
```

The app will start at `http://localhost:5173`

## Step 3: Open in Browser

Click the link in the terminal or open your browser to:
```
http://localhost:5173
```

## What You'll See

1. **Home Screen** - Welcome page with "Start Quiz" button
2. Click "Start Quiz" to begin
3. **Quiz Screen** - 39 Old Testament books shuffled randomly
4. Click books in order (1st to 39th)
5. Use "Undo" or "Reset" if you make mistakes
6. Click "Submit Answer" when done
7. **Results Screen** - See your score and detailed answers

## Testing the Quiz

Try clicking the books in this order for a perfect score:
1. Genesis, Exodus, Leviticus, Numbers, Deuteronomy
2. Joshua, Judges, Ruth
3. 1 Samuel, 2 Samuel, 1 Kings, 2 Kings
4. 1 Chronicles, 2 Chronicles, Ezra, Nehemiah, Esther
5. Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon
6. Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel
7. Hosea, Joel, Amos, Obadiah, Jonah, Micah
8. Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi

## Building for Production

```bash
npm run build
```

Creates an optimized build in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

Test the production build locally at `http://localhost:4173`

## Deploy to GitHub Pages

```bash
npm run deploy
```

Builds and deploys to GitHub Pages (requires git setup).

## Common Issues

### Port already in use?
Change the port in the terminal:
```bash
npm run dev -- --port 3000
```

### Icons not loading?
The app works fine with placeholder icons for development. See SETUP.md for adding real icons.

## File Overview

- `/src/pages/` - Main screens (Home, Quiz, Results)
- `/src/components/` - Reusable UI components
- `/src/styles/` - CSS styling
- `/src/contexts/QuizContext.jsx` - Quiz state management
- `/src/utils/constants.js` - Old Testament books list

## Customization Ideas

1. **Change colors**: Edit `/src/styles/global.css`
2. **Add more quizzes**: Update `/src/utils/constants.js`
3. **Modify UI**: Edit components in `/src/components/`
4. **Change app name**: Update `index.html` and `package.json`

## Need Help?

- Check README.md for full documentation
- See SETUP.md for deployment instructions
- Review code comments for implementation details

---

Enjoy learning the Old Testament books!
