import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // output folder ที่จะใช้สำหรับการ build
    target: 'esnext', // รองรับ ES modules ในเบราว์เซอร์
  },
});
