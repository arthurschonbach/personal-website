# Personal website

A minimal personal site built with [Astro](https://astro.build). Content lives as
plain Markdown files, so adding posts and projects is just creating a file.

## Sections

- **Profile** — `/` — intro, featured projects, recent posts.
- **Projects** — `/projects` — list + detail pages.
- **Posts** — `/posts` — list + detail pages.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview the build
```

## Editing your profile

All personal details live in one file: [`src/site.config.ts`](src/site.config.ts).
Update your name, email, social links, and navigation there.

## Adding a post

Create a file in `src/content/posts/`, e.g. `src/content/posts/my-post.md`:

```md
---
title: My post
description: A one-line summary shown in lists.
date: 2026-03-01
draft: false
tags: [notes]
---

Your content here.
```

The filename becomes the URL: `/posts/my-post/`. Set `draft: true` to hide it.

## Adding a project

Create a file in `src/content/projects/`, e.g. `src/content/projects/my-project.md`:

```md
---
title: My project
description: A one-line summary.
date: 2026-03-01
draft: false
tags: [typescript]
repo: https://github.com/you/my-project
demo: https://my-project.example.com
featured: true
---

Details about the project.
```

`repo`, `demo`, and `featured` are optional. `featured: true` shows it on the
homepage (up to 3).

## Structure

```
src/
  content/
    posts/          # Markdown posts
    projects/       # Markdown projects
  components/       # Header, Footer
  layouts/          # BaseLayout
  pages/            # routes
  styles/           # global.css
  content.config.ts # content schemas
  site.config.ts    # your personal details
```

## Deploying

`npm run build` produces a static site in `dist/`, deployable to Netlify,
Vercel, GitHub Pages, or any static host.
