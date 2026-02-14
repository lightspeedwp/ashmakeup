import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./"),
      "@/components": resolve(__dirname, "./components"),
      "@/styles": resolve(__dirname, "./styles"),
      "@/utils": resolve(__dirname, "./utils"),
      "@/data": resolve(__dirname, "./data"),
      "@/hooks": resolve(__dirname, "./hooks"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    assetsDir: "assets",
    
    // Performance Optimizations
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        // Optimize chunk naming
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Organize assets by type
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[ext]/[name]-[hash][extname]';
        },
      },
    },
    
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000, // 1MB warning threshold
    
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
      format: {
        comments: false, // Remove all comments
      },
    },
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Asset inlining threshold (8kb)
    assetsInlineLimit: 8192,
  },
  
  // Optimizations for development
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
    ],
    exclude: [],
  },
  
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 3000,
    host: true,
  },
});
