// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss(),],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // ✅ Important: Optimize for Vercel
  optimizeDeps: {
    exclude: ["three"], // safe even if you don't use it
  },

  build: {
    sourcemap: false,        // reduce memory
    minify: "esbuild",       // faster build
    target: "esnext",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
  },
});
