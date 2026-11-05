# Jansen — Front-End Developer Portfolio

Personal portfolio website built with **React**, **Vite**, and **SCSS (Sass)** to showcase my front-end development projects across **Angular**, **React**, and **React Native (Expo)**, along with my professional experience, education, and downloadable CV.

---

## ✨ Key Features

- **Hero & Quick Introduction:** Overview of my 3+ years of Front-End experience, core technical stack, and direct **one-click CV download (`Jansen_CV.pdf`)**.
- **Framework-Filtered Project Showcase:** Interactive filter tabs (`All Projects`, `🅰️ Angular`, `⚛️ React`, `📱 React Native • Expo`) with a responsive 2-column grid.
- **Smart Action Links:** Dynamically displays **Live Demo**, **Video Demo (YouTube)**, **Expo Build / APK**, and **GitHub Repository** links based on each project's metadata.
- **Experience & Education Timeline:** Highlights my career history at **Aigens** and **PT. Harapan Energie Indonesia**, plus my **Bachelor of Information Technology** from **Universitas Mikroskil**.
- **Direct Recruiter Contact:** Quick-action cards for Email (`jansen.zix@gmail.com`), WhatsApp (`+62 877-6872-7770`), and CV download.
- **Data-Driven Content:** All profile details, projects, experience, and contact info are managed in a single local configuration file (`src/data/mockData.js`) for easy updates without modifying component code.
- **Automated CI/CD:** Configured with **GitHub Actions** (`.github/workflows/deploy.yml`) for automatic deployment to **GitHub Pages** on every push to `main`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Modular SCSS (`sass`) with custom design tokens (`src/_variables.scss`) & responsive mobile breakpoints
- **CI/CD & Hosting:** GitHub Actions + GitHub Pages

---

## 📂 Project Structure

```text
portofolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions CI/CD workflow for GitHub Pages
├── src/
│   ├── assets/
│   │   ├── documents/
│   │   │   └── Jansen_CV.pdf      # Downloadable ATS-friendly CV
│   │   └── images/
│   │       └── Jansen.jpg         # Profile portrait photo
│   ├── components/
│   │   ├── Navbar/                # Sticky navigation bar & CV download button
│   │   ├── Profile/               # Hero introduction, core stack & quick stats
│   │   ├── Projects/              # Framework tabs & 2-column project cards grid
│   │   ├── Experience/            # Career timeline, education & technical skills
│   │   └── Contact/               # Email, WhatsApp & CV download cards
│   ├── data/
│   │   └── mockData.js            # Centralized data for profile, projects & experience
│   ├── _variables.scss            # Light-mode color palette & framework accent tokens
│   ├── App.jsx                    # Main application layout
│   ├── App.css                    # Global layout & shared button styles
│   └── index.css                  # Base typography & root reset
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jansensu19/portofolio-website.git
   cd portofolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📝 Updating Portfolio Data

To add a new project or update existing links, edit [`src/data/mockData.js`](./src/data/mockData.js) and add an entry to `projectsData`:

```js
{
  id: "your-project-id",
  title: "Project Title",
  framework: "react", // "angular" | "react" | "reactNative"
  frameworkLabel: "⚛️ React",
  statusBadge: "Live + GitHub",
  previewLabel: "⚡ Project Preview Label",
  previewMeta: "React App",
  description: "Short summary of the project and its technical highlights.",
  tags: ["React", "TypeScript", "SCSS"],
  links: {
    live: "https://your-live-demo.com",
    github: "https://github.com/jansensu19/your-repo",
    youtube: null,
    apk: null,
    expo: null,
  },
}
```

---

## 📬 Contact

- **Name:** Jansen
- **Role:** Front-End Developer
- **Email:** [jansen.zix@gmail.com](mailto:jansen.zix@gmail.com)
- **WhatsApp:** [+62 877-6872-7770](https://wa.me/6287768727770)
- **GitHub:** [@jansensu19](https://github.com/jansensu19)
