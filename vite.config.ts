import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import inject from '@rollup/plugin-inject';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    inject({
      process: 'process', // Use 'process' directly
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      process: 'process', // Ensure Vite uses the 'process' package
    },
  },
  optimizeDeps: {
    include: ['process'],
  },
});
