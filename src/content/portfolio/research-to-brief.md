---
title: Research to Brief
description: Ask a research question and get a short brief with sources, with the full research trail visible.
date: 2026-10-14
draft: false
tags: [typescript, nextjs, agents, grounded-research]
role: Solo Developer
year: 2026
url: https://research-to-brief.vercel.app
featured: true
---

## Overview

You ask a question, and the app does the legwork: it plans a few web searches, reads the most promising pages, and writes up a short brief with sources for every claim. The whole process is visible step by step, so you can see what was searched, what was read, and what was skipped.

It also behaves responsibly with your time and trust: the research stays within fixed limits, you can exclude sites you don't want, and you can stop the run at any point and keep what was found so far. When a page can't be read properly, it moves on to another source rather than guessing.

## Try it

Open the [live demo](https://research-to-brief.vercel.app) and click **Load sample run** to see a complete, real example. No account or setup needed.

## How it's built

Behind the scenes, an AI assistant carries out the plan, ie searching, reading, then writing, using only tools that read pages (nothing that changes anything). Every statement in the brief is checked against the sources, and anything that can't be backed up is flagged rather than presented as fact.

The code is open source: [github.com/arthurschonbach/research-to-brief](https://github.com/arthurschonbach/research-to-brief).
