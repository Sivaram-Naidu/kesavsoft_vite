// FILENAME: vite.config.js
import { resolve } from "path";
import nunjucks from "vite-plugin-nunjucks";

export default {
  plugins: [
    nunjucks({
      templates: [resolve(__dirname, "src/templates")],
      variables: {
        "index.html": { pageTitle: "Home" },
        "about.html": { pageTitle: "About" },
        "contact.html": { pageTitle: "Contact" },
        "thank-you.html": { pageTitle: "Success" },
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        thankyou: resolve(__dirname, "thank-you.html"),
      },
    },
  },
};
