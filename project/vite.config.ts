import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages'; // NEW LINE

export default defineConfig({
  plugins: [react(), ghPages()], // UPDATED LINE
  base: '/Halo-Hire-BO/', // ADD THIS LINE
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
