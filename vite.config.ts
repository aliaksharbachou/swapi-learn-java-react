import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      containers: path.resolve(__dirname, 'src/containers'),
      common: path.resolve(__dirname, 'src/common'),
      fields: path.resolve(__dirname, 'src/containers/main-page/cv-form/components/fields'),

      authConfig: path.resolve(__dirname, 'src/authConfig'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.svg'],
  },
});
