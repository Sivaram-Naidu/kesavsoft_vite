// FILENAME: vite.config.js
import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    nunjucks({
      // Define the directories to search for Nunjucks templates
      templates: [
        'src/templates',
        'index.html',
        'about.html',
        'contact.html'
      ],
      // Define global variables accessible in all Nunjucks templates
      variables: {
        'index.html': {
          pageTitle: 'Home',
          pageUrl: 'index.html'
        },
        'about.html': {
          pageTitle: 'About & Services',
          pageUrl: 'about.html'
        },
        'contact.html': {
          pageTitle: 'Contact',
          pageUrl: 'contact.html'
        }
      },
    }),
  ],
  // Define the project's root directory
  root: '.',
  // Configure the build process for a Multi-Page App (MPA)
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  // Configure the development server
  server: {
    open: '/', // Automatically open the browser
  },
});