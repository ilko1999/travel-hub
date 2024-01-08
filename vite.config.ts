import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unfonts from 'unplugin-fonts/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: ['Inter', 'Open Sans', 'Material+Icons'],
      },
    }),
  ],
});
