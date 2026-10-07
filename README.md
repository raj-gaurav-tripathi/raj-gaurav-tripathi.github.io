# raj-gaurav-tripathi.github.io

Plain HTML and CSS, no build step. Push to `main` and GitHub Pages serves the repository root.

## Pages
`index.html` (home), `research.html`, `notes.html`, `cv.html`, `blog.html` (draft). Shared styles live in `styles.css`; each page also has a small inline `<style>` block for its own components.

## Adding things
- **Research project:** copy one `<article class="rp-proj">` block in `research.html`, change its `id`, and add a jump link in `.rp-jump`. Two blocks still have a commented-out "What I did" paragraph to fill in.
- **Home "Recent" item:** copy one `<article class="news-item">` in `index.html`.
- **Images:** put them in `assets/` with lowercase-hyphen names (no spaces or commas). Export as WebP, about 1600 px wide, quality around 80, to keep pages fast.
- **Banners:** each page sets its banner on its `<div class="hero">`; the home page banner is set in `styles.css`.
- Update the "Last updated" lines on Research and CV when you change them.

## Before the Blog goes public
`blog.html` still has sample posts, and its video points to `assets/sample-video.mp4`, which does not exist. Replace them, then add the page to `sitemap.xml`.

## Link previews
`assets/og-card.jpg` (1200x630) is the card shown when the site is shared on LinkedIn, WhatsApp and similar.
