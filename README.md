# Sai Venkatesh Varun M.M. — Portfolio

Live site: https://varun-2103.github.io/

Static site with no build step and no frameworks: plain HTML, CSS and JavaScript.

## Project structure
```
.
├── index.html                  # the page (must stay at the repo root for GitHub Pages)
├── css/
│   └── style.css               # all styles, colour tokens at the top (:root)
├── js/
│   ├── theme.js                # applies saved light/dark theme before first paint
│   └── main.js                 # content data + all interactivity
├── assets/
│   ├── images/
│   │   ├── favicon.svg
│   │   └── varun.jpg           # hero photo (revealed on hover)
│   └── docs/
│       └── Resume_2026_updated.pdf
└── README.md
```

## Editing content
Most text for experience, education, projects, papers, skills and stats lives in the data arrays at the top of `js/main.js` (`ITEMS`, `SKILLS`, `STATS`, `ANSWERS`). Hero, about and contact copy is in `index.html`.

## Deploy on GitHub Pages
1. Create a public repo named `Varun-2103.github.io`.
2. Upload the contents of this folder to the repo root, keeping the folder structure.
3. Settings → Pages → Deploy from a branch → `main` / `(root)` → Save.
4. Visit https://varun-2103.github.io/ after a minute or two.

## Updating
Edit a file and commit; Pages redeploys automatically. To swap the résumé or photo, replace the file in `assets/` with the same name.

## Run locally
Open `index.html` directly, or serve the folder:
```
python -m http.server 8000
```
then visit http://localhost:8000.
