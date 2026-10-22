# Nikhilesh Kancherla — AI Generalist Portfolio

A clean, responsive, recruiter-ready portfolio website for an AI Generalist (Design) role.

**Live:** Deploy to GitHub Pages (see instructions below)

---

## Tech Stack

- Pure HTML5, CSS3 (CSS Variables, Grid, Flexbox), Vanilla JS
- Google Fonts: Inter + Space Grotesk
- No build tools required — open `index.html` directly

---

## Project Structure

```
portfolio/
├── index.html      ← Complete single-page portfolio
├── style.css       ← All styles (design tokens, components, responsive)
├── main.js         ← Navbar, scroll animations, mobile menu
└── README.md
```

---

## Local Preview

Simply open `index.html` in any modern browser — no server or build step needed.

```bash
# Option A: File open
open index.html

# Option B: Python simple server
python -m http.server 8080
# then visit http://localhost:8080
```

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `nikhilesh-portfolio`)
2. Push all three files:

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/Nikhilesh-Kancherla/nikhilesh-portfolio.git
git push -u origin main
```

3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Your live URL: `https://nikhilesh-kancherla.github.io/nikhilesh-portfolio/`

---

## Customising

| Section | What to update |
|---|---|
| Hero headline | `index.html` → `.hero-content` |
| Projects | `index.html` → `#projects` section |
| Design/AR screenshots | Replace SVG previews in `#design` with `<img>` tags pointing to your files |
| Certifications | Add verification links to `.cert-card` elements |
| Resume download | Add your PDF as `resume.pdf`, then add `<a href="resume.pdf" download>` button |
| Favicon | Replace inline SVG favicon in `<head>` |
| Colours | Edit CSS variables at the top of `style.css` |

---

## Adding Real Screenshots

To replace SVG placeholders with actual project screenshots:

```html
<!-- Replace the SVG block inside .project-card-visual with: -->
<img 
  src="screenshots/eye-fatigue-demo.png"
  alt="Eye fatigue detection system showing facial landmarks and EAR value"
  loading="lazy"
  style="width:100%;height:100%;object-fit:cover;"
/>
```

---

## Contact

nikhilesh.k3008@gmail.com  
https://github.com/Nikhilesh-Kancherla  
https://www.linkedin.com/in/nikhilesh-kancherla-39ab28304/
