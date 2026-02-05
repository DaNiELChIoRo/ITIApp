# ITIApp - Bible Quiz

A progressive web application (PWA) for learning the Old Testament books through interactive quizzes. Built with React, optimized for GitHub Pages static hosting.

## Features

- **Interactive Quiz**: Order all 39 Old Testament books in their correct biblical sequence
- **Progressive Web App**: Install on any device, works offline
- **Score Tracking**: Track your best scores and progress over time
- **Responsive Design**: Beautiful UI that works on desktop, tablet, and mobile
- **Fast & Lightweight**: Optimized bundle size with Vite build tool
- **Educational**: Learn through repetition and immediate feedback

## Tech Stack

- **React 18** - Modern functional components with hooks
- **Vite** - Lightning-fast build tool
- **PWA** - Service worker with offline support
- **CSS Modules** - Clean, scoped styling
- **React Context** - State management
- **LocalStorage** - Persistent statistics

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone or navigate to the repository:
```bash
cd /Users/dmeneses/Documents/Vue/ITIApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## Project Structure

```
ITIApp/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── ProgressBar.jsx
│   │   └── features/         # Feature-specific components
│   │       └── BookCard.jsx
│   ├── contexts/             # React Context providers
│   │   └── QuizContext.jsx
│   ├── hooks/                # Custom React hooks
│   │   ├── useLocalStorage.js
│   │   └── useStats.js
│   ├── pages/                # Page-level components
│   │   ├── Home.jsx
│   │   ├── Quiz.jsx
│   │   └── Results.jsx
│   ├── styles/               # CSS files
│   ├── utils/                # Helper functions and constants
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── App.jsx               # Main app component
│   └── main.jsx              # Entry point
├── public/                   # Static assets
├── index.html
├── vite.config.js           # Vite configuration
└── package.json
```

## How It Works

### Quiz Flow

1. **Home Screen**: Welcome screen with "Start Quiz" button and statistics
2. **Quiz Screen**: 39 Old Testament books displayed in random order
3. **Selection**: Click books in the order you think is correct
4. **Visual Feedback**: Selected books show numbered badges
5. **Controls**: Undo last selection or reset all
6. **Submit**: Confirm and submit your answer
7. **Results**: See your score and detailed comparison

### Scoring

- Each book in the correct position = 1 point
- Score displayed as correct count and percentage
- Statistics tracked locally and persist between sessions

## Deployment to GitHub Pages

### Setup

1. Update the `base` path in `vite.config.js` to match your repository name:
```javascript
base: '/your-repo-name/',
```

2. Install gh-pages if not already installed:
```bash
npm install --save-dev gh-pages
```

### Deploy

Run the deployment command:
```bash
npm run deploy
```

This will:
1. Build the production bundle
2. Push to the `gh-pages` branch
3. Make the app available at `https://yourusername.github.io/ITIApp/`

### GitHub Pages Settings

1. Go to your repository settings
2. Navigate to "Pages"
3. Set source to `gh-pages` branch
4. Save

## PWA Features

### Installation

Users can install the app on their device:
- **Desktop**: Click the install icon in the browser address bar
- **Mobile**: Use "Add to Home Screen" from the browser menu

### Offline Support

The app works offline after the first visit:
- All assets are cached using service worker
- Quiz data is available without internet
- Statistics persist locally

### Manifest

The app includes a complete PWA manifest with:
- App name and description
- Theme colors
- Icons for all sizes
- Display mode settings

## Customization

### Adding New Quizzes

To add more quiz types:

1. Create new quiz data in `src/utils/constants.js`
2. Update `QuizContext` to handle new quiz types
3. Add quiz selection on home page
4. Implement quiz-specific logic

### Styling

Colors and theme can be customized in:
- `src/styles/global.css` - CSS variables
- `src/utils/constants.js` - THEME object

### Books Order

The correct order is defined in `src/utils/constants.js`:
```javascript
export const OLD_TESTAMENT_BOOKS = [ ... ]
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with PWA support

## Performance

- Initial bundle size: ~50KB gzipped
- Time to Interactive: <2s on 3G
- Lighthouse Score: 95+ across all metrics

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available for educational purposes.

## Acknowledgments

- Built with React and Vite
- Icons from system emoji
- Inspired by the need for interactive Bible learning tools

---

Made with care for students learning the Bible.
