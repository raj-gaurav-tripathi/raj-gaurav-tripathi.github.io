# Personal academic website

A clean, responsive website template designed for GitHub Pages. Its layout uses almost the full browser width, with controlled side padding instead of large empty side margins.

## Edit your content

Open **`content.js`**. Everything you normally need to personalise is in that single file:

- Name, organisation, email, and intro text
- Research themes and their links
- News items
- Selected publications
- Social/profile links

The page design lives in `styles.css`. You can leave `index.html` and `script.js` alone unless you want to change the layout itself.

## Publish it on GitHub Pages

1. Create a new GitHub repository, for example `my-website`.
2. Upload all five files from this folder: `index.html`, `content.js`, `script.js`, `styles.css`, and `README.md`.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. GitHub will show your live address in the Pages settings after it finishes publishing.

For a personal address like `yourusername.github.io`, name the repository exactly `yourusername.github.io`.

## Add a photograph later

This version intentionally uses a subtle designed backdrop rather than a stock photograph. It makes the site immediately publishable without needing image licences or a personal photo. If you later want a portrait or a wide landscape in the hero, put the image in an `assets` folder and add it as a CSS background in `styles.css`.
