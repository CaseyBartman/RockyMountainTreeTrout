# Rocky Mountain Tree Trout (Eleventy)

A satirical conservation site inspired by the "Pacific Northwest Tree Octopus", focused on the elusive arboreal trout of the Rockies. Built with Eleventy.

## Quick Start

- Prerequisites: Node.js 18+
- Install dependencies:

```bash
npm install
```

- Build the site:

```bash
npx eleventy
```

- Run a local dev server:

```bash
npx eleventy --serve
```

The output is written to `_site/`. The dev server will watch for changes.

## Project Structure

- `_includes/layouts/base.njk` — base HTML layout
- `_data/site.json` — site metadata and navigation
- `assets/css/styles.css` — palette and global styles
- `index.njk` — homepage
- `news/` — collection index + posts
- `sightings/` — sightings page
- `donate/` — donate/get involved page
- `faqs/` — FAQs page

## Color Palette

- Sky: `#b4ccd8`
- Sun: `#ffaa1c`
- Amber: `#b57400`
- Slate: `#44525f`
- Pine: `#022b19`

Defined as CSS variables in `assets/css/styles.css` for easy theming.

## Editing Content

- Homepage sections live in `index.njk`.
- News posts are Markdown files in `news/` with front matter `tags: [news]`.
- Update navigation via `_data/site.json`.
- Adjust styles or layout in `assets/css/` and `_includes/layouts/`.

## Notes

This project is intentionally playful—use it to spark curiosity about canopy ecology and forest stewardship.