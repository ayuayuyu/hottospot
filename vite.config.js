import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'HottoSpot',
        short_name: 'HottoSpot',
        description: 'Vite + React の PWA アプリ',
        theme_color: '#F84F90',
        background_color: '#ED4B4B',
        display: 'standalone',
        icons: [
          {
            src: '/img/icon.svg',
            sizes: '192x192',
            type: 'image/svg',
          },
          {
            src: '/img/icon.svg',
            sizes: '512x512',
            type: 'image/svg',
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30日
              },
            },
          },
        ],
      },
    }),
  ],
});
