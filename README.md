# Academic cosmology portfolio

A clean, responsive, static website designed for a master's student applying to PhD programmes in cosmology or theoretical astrophysics. It is ready for **GitHub Pages**: there is no build step, no database, and no account or server required.

## What you received

```text
your-website/
├── index.html             # Page structure: sections, headings, and accessibility labels
├── styles.css             # Design, animations, desktop/mobile layout
├── script.js              # Interactions, active menu, animated star field, content rendering
├── data/
│   └── content.js         # ← Main file for all your personal text, projects, links, etc.
├── assets/
│   └── images/
│       ├── README.md      # Image names, locations, and size guidance
│       └── .gitkeep       # Keeps this empty folder in GitHub until you add images
├── .nojekyll              # Helps GitHub Pages serve the files exactly as written
└── README.md              # This guide
```

## First personalisation — do this in order

1. Open `data/content.js` in a code editor. This is your main control panel.
2. Update the `person` section with your name, initials, email address, and short introduction.
3. Rewrite the `about`, `facts`, and `research` sections to accurately reflect your academic background and interests.
4. Replace the example projects with your own notes, internships, projects, simulations, and coursework. Add a GitHub, PDF, or project link to each item when ready.
5. Update your professional profile links in the `social` list. Set it to `[]` if you do not want social links yet.
6. Add your photo as `assets/images/profile.jpg`. Optionally add a wide background image as `assets/images/hero-cosmos.jpg`.

The page is intentionally written so that these changes do not require touching `index.html`, `styles.css`, or `script.js`.

## Add a project

Inside the `projects` list in `data/content.js`, copy an existing project item and edit it. The card is created automatically:

```js
{
  type: "Research project",
  title: "Constraining dark energy with supernova data",
  description: "A compact summary of the question, method, and what you achieved.",
  link: "https://github.com/your-username/project-name",
  linkLabel: "View on GitHub"
}
```

Use a relative path such as `assets/documents/my-report.pdf` if you keep a PDF inside the repository. Create the `assets/documents` folder when you first need it.

## Add publications later

The Publications section currently uses a dignified “work in progress” message. When you have a publication, replace the `publication-empty` block in `index.html` with a numbered list or a simple citation card. Keep the full citation, DOI / arXiv link, and any author-order details accurate.

## View the site before uploading

Open `index.html` in a browser. The site requires no install command. Some browsers may restrict local fonts, but all core layout and functionality will work.

## Upload to GitHub Pages

1. Sign in to GitHub and create a new **public** repository. A clear name like `your-username.github.io` is ideal if you would like the site at `https://your-username.github.io`; any other repository name also works.
2. Upload every item from this folder—`index.html`, `styles.css`, `script.js`, `data`, and `assets`—to the top level of the repository. Do **not** upload an extra enclosing folder by itself.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and the `/(root)` folder, then save.
6. GitHub will show the live website address after it finishes publishing, usually within a few minutes.

For a repository named `portfolio`, the address will normally be `https://your-github-username.github.io/portfolio/`. For a repository named `your-github-username.github.io`, it will normally be `https://your-github-username.github.io/`.

## Thoughtful customisation notes

- **Hero image:** The hero is already animated with a lightweight canvas star field. A photo at `assets/images/hero-cosmos.jpg` is optional and appears behind that animation.
- **Mobile:** The navigation changes into a clean accessible menu, the cards turn into a single column, and text/spacing reduce for small screens.
- **Motion:** Visitors who prefer reduced motion automatically receive a still version of the page.
- **Contact:** The email button opens the visitor’s email application. It does not expose a backend or require a form service.
- **Quotes:** This design intentionally does not place a quotation in the hero. Your research statement is more distinctive than a generic quote. If you do add one, use an accurate, credited quotation sparingly.

## Before sending this to professors

- Make all placeholder text in square brackets your own.
- Check every project / social / PDF link on a phone and desktop.
- Use a professional portrait with a simple background.
- Ensure your email, university, degree, intended PhD intake, and research interests are current.
- Keep the top projects to work you can discuss confidently in an interview.
- Add a PDF CV to `assets/documents/` and add a clear CV link in the navigation or contact section when ready.

Good academic websites do not need to be crowded. This one is deliberately quiet, readable, and easy to extend as your research record grows.
