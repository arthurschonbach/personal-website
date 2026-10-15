---
title: Keeping a personal site simple
description: Notes on choosing a minimal setup that's easy to maintain.
date: 2026-02-02
draft: false
tags: [writing, web]
---

A personal site doesn't need much. A few pages, a way to add writing, and
content stored as plain text so it outlives whatever framework is fashionable
this year.

This site is built with Astro and Markdown. There's no database, no CMS, and no
build magic beyond rendering Markdown to HTML.

## Why files over a CMS

- Everything is versioned in git.
- Writing is just editing a `.md` file.
- Nothing to migrate when I change hosting.

The trade-off is that publishing requires a commit and a push. For a personal
site, that's fine.
