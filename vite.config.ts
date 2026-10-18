import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({
      presets: [['@babel/preset-react', { runtime: 'automatic' }]],
    }),
  ],
});
