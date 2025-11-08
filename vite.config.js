// FILENAME: vite.config.js
import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    nunjucks({
      // Define the directory to search for Nunjucks templates
      templates: [resolve(__dirname, "src/templates")],
      // Define global variables accessible in all Nunjucks templates
      variables: {
        "index.html": {
          pageTitle: "Home",
        },
        "about.html": {
          pageTitle: "About & Services",
        },
        "contact.html": {
          pageTitle: "Contact",
        },
        "thank-you.html": {
          pageTitle: "Success",
        },
      },
    }),
  ],
  // Define the project's root directory
  root: ".",
  // Configure the build process for a Multi-Page App (MPA)
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        thankyou: resolve(__dirname, "thank-you.html"), // THIS IS THE FIX
      },
    },
  },
  // Configure the development server
  server: {
    open: "/", // Automatically open the browser
  },
});
