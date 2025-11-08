KeshavSoft - Internship Task 2 🚀

This project is a rebuild of the original Task 1 static website, now implemented with a professional Vite + Nunjucks stack. It features a 3-page static site with reusable templates, a build process, and a functional contact form.

Live Demo: https://keshavsoftware.netlify.app/

🛠️ Tech Stack

Bundler: Vite

Templating: Nunjucks

Styling: Bootstrap 5 & Bootstrap Icons

Form Handling: Formsubmit.co

Hosting: Netlify

📂 Project Structure

Here is the file structure for the development environment. The dist folder is generated only after running the build command.

KESAVSOFT_VITE/
│
├── .gitignore # Tells Git which files to ignore (node_modules, dist)
├── index.html # Entry point for the Home page
├── about.html # Entry point for the About page
├── contact.html # Entry point for the Contact page
├── thank-you.html # Form submission success page
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite configuration file (for Nunjucks & MPA)
├── README.md # You are here!
│
└── src/ # Source files
│
├── templates/ # Nunjucks templates
│ ├── partials/
│ │ ├── \_footer.njk # Reusable footer
│ │ └── \_navbar.njk # Reusable navbar
│ └── \_layout.njk # Main page layout (head, body, etc.)
│
├── main.js # Main JavaScript file (imports CSS)
└── style.css # Custom CSS styles

🏃 How to Run This Project Locally

Clone the repository:

git clone [https://github.com/Sivaram-Naidu/kesavsoft_vite.git](https://github.com/Sivaram-Naidu/kesavsoft_vite.git)

Navigate to the project directory:

cd kesavsoft_vite

Install dependencies:

npm install

Run the development server:

npm run dev

The site will be available at http://localhost:5173/.

📦 Build for Production

To create an optimized production build (which Netlify does automatically):

npm run build

This will compile all files into the /dist folder.
