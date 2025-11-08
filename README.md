Internship Task 2: KeshavSoft Website (Vite + Nunjucks)

This project is a recreation of the Task 1 (KeshavSoft 3-page website) deliverables, built using a modern Vite and Nunjucks stack as required by the task.

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
├── package.json <-- Project dependencies & scripts
├── package-lock.json
└── vite.config.js <-- Vite & Nunjucks configuration

How to Install and Run

Prerequisites

Node.js (LTS version)

npm (comes with Node.js)

1. Installation

Clone the repository and install the dependencies.

git clone <https://github.com/Sivaram-Naidu/kesavsoft_vite>
cd <kesavsoft_vite>
npm install

2. Running the Development Server

This command starts the Vite dev server. It will watch all your files for changes and instantly update the browser.

npm run dev

The server will be running at http://localhost:5173/.

3. Building for Production

This command bundles and optimizes all assets into the dist/ folder, ready for deployment.

npm run build
