Internship Task 2: KeshavSoft Website (Vite + Nunjucks)

Live Demo: https://keshavsoftware.netlify.app/

Technology Stack

Bundler: Vite

Why: Chosen for its extremely fast development server (using native ESM) and simple configuration for CSS/JS bundling. It provides an excellent developer experience.

Templating Engine: Nunjucks

Why: Chosen for its powerful and easy-to-use templating features, such as layout inheritance ({% extends %}), partials ({% include %}), and variables ({{ pageTitle }}). This makes managing a multi-page site much cleaner and avoids duplicating code (like navbars and footers).

Project Structure

/
├── dist/ <-- Compiled output (for deployment)
├── src/
│ ├── templates/
│ │ ├── partials/
│ │ │ ├── \_footer.njk <-- Footer partial
│ │ │ └── \_navbar.njk <-- Navbar partial
│ │ └── \_layout.njk <-- Main site layout
│ ├── main.js <-- Main entry (imports CSS)
│ └── style.css <-- Custom styles
├── .gitignore
├── about.html <-- Nunjucks template for About page
├── contact.html <-- Nunjucks template for Contact page
├── index.html <-- Nunjucks template for Home page
├── thank-you.html <-- Form success page
├── package.json <-- Project dependencies & scripts
├── package-lock.json
└── vite.config.js <-- Vite & Nunjucks configuration

How to Install and Run

Prerequisites

Node.js (LTS version)

npm (comes with Node.js)

1. Installation

Clone the repository and install the dependencies.

git clone [https://github.com/Sivaram-Naidu/kesavsoft_vite.git](https://github.com/Sivaram-Naidu/kesavsoft_vite.git)
cd kesavsoft_vite
npm install

2. Running the Development Server

This command starts the Vite dev server. It will watch all your files for changes and instantly update the browser.

npm run dev

The server will be running at http://localhost:5173/.

3. Building for Production

To create an optimized production build (which Netlify does automatically):

npm run build
