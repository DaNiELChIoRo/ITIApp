import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// German split out into its own repo: https://github.com/DaNiELChIoRo/deutsch
const section = process.env.VITE_APP_SECTION; // 'russian' | undefined

const sectionConfig = {
  russian: {
    base: '/ITIApp/russian/',
    outDir: 'dist/russian',
    name: 'ITIApp Русский',
    short_name: 'Русский',
    description: 'Learn Russian through music and grammar exercises',
    theme_color: '#CC0000',
    background_color: '#4d0000',
    icons: [
      { src: 'icons/russian/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'icons/russian/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      { src: 'icons/russian/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    ],
  },
};

const cfg = section ? sectionConfig[section] : null;

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'icons/**/*.png'],
      manifest: cfg ? {
        name: cfg.name,
        short_name: cfg.short_name,
        description: cfg.description,
        theme_color: cfg.theme_color,
        background_color: cfg.background_color,
        display: 'standalone',
        scope: cfg.base,
        start_url: cfg.base,
        icons: cfg.icons,
      } : {
        name: 'ITIApp - Bible Quiz',
        short_name: 'ITIApp',
        description: 'Learn Old Testament books order through interactive quizzes',
        theme_color: '#4A90E2',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/ITIApp/',
        start_url: '/ITIApp/',
        icons: [
          { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  base: cfg ? cfg.base : '/ITIApp/',
  build: {
    outDir: cfg ? cfg.outDir : 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
