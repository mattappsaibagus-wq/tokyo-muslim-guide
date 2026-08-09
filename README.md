# Tokyo Muslim Guide

A free, community-maintained static website helping Muslims living in and visiting Tokyo find **mosques, prayer spaces, halal restaurants, and halal grocery stores** — plus a practical guide to daily Muslim life in Japan.

**Live site:** https://mattappsaibagus-wq.github.io/tokyo-muslim-guide/

## Project structure

```
tokyo-muslim-guide/
├── index.html          # Homepage
├── mosques.html        # Mosques & prayer spaces
├── halal-food.html     # Restaurants & grocery stores
├── guide.html          # Practical guide (tips, ingredients, phrases)
├── css/
│   └── style.css       # Design system (emerald & gold theme)
├── js/
│   ├── data.js         # ALL CONTENT LIVES HERE — edit this to update listings
│   └── main.js         # Rendering, search, filters, mobile nav
├── netlify.toml        # Optional Netlify deploy config + security headers
└── LICENSE             # CC BY 4.0 (content) + MIT (code)
```

## Updating content

All mosques, restaurants, grocery stores, prayer spaces and tips are plain JavaScript arrays in **js/data.js**. To add or edit a listing, just edit that file — no other changes needed. The `tags` array on each entry powers the filter buttons.

## Local preview

No build step required. From this folder:

```bash
python3 -m http.server 8765
# then open http://localhost:8765
```

## Publishing for free

This is a plain static site — it works on any free static host:

### A. GitHub Pages (current host)

```bash
git init
git add .
git commit -m "Tokyo Muslim Guide"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/tokyo-muslim-guide.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: "Deploy from a branch" → Branch: main / (root) → Save**. Your site appears at `https://YOUR-USERNAME.github.io/tokyo-muslim-guide/` within a few minutes.

### B. Netlify Drop

Drag this entire folder onto https://app.netlify.com/drop — done in 30 seconds, no CLI needed. (A `netlify.toml` with sensible headers is already included.)

### C. Cloudflare Pages

Cloudflare dashboard → **Pages → Create project → Direct upload** → upload this folder.

### D. Vercel

Import the GitHub repo at https://vercel.com/new with the **"Other"** framework preset (no build command, output dir = root).

### Custom domain

All four hosts support free custom domains with HTTPS — see their docs after deploying.

## Disclaimer

Opening hours, halal certifications and prayer-space availability change over time. This guide is maintained in good faith — **always verify with the venue before visiting**.

## License

- **Content** (text, listings): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to share and adapt with attribution.
- **Code** (HTML/CSS/JS): [MIT](https://opensource.org/licenses/MIT) — free to reuse for any purpose.

See [LICENSE](LICENSE) for full text.
