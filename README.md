# Nandu — Developer Portfolio

A responsive single-page portfolio built with plain HTML, CSS and JavaScript.

## Folder structure

```text
Nandu_Portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── resume.pdf   <-- add your real resume here
└── README.md
```

## Run locally

### Option 1
Double-click `index.html`.

### Option 2 — VS Code
Install the Live Server extension, right-click `index.html`, and choose:
`Open with Live Server`

## Before deploying

Open `index.html` and replace:

- `your.email@example.com` with your email
- `https://github.com/` with your GitHub profile
- `https://www.linkedin.com/` with your LinkedIn profile
- Project GitHub links with your actual repositories
- Project Live Demo links when available
- Add your resume as `assets/resume.pdf`
- Add/update CGPA if you want it displayed
- Add real project screenshots/GIFs if available

## Netlify deployment

1. Create a GitHub repository named `portfolio`.
2. Upload all files from this folder.
3. Go to Netlify and choose **Add new project → Import an existing project**.
4. Select GitHub and choose your portfolio repository.
5. Build command: leave empty.
6. Publish directory: `.`
7. Deploy.

This is a static site, so no backend/server is required.
