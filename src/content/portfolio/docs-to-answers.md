---
title: Docs to Answers
description: Ask questions about your own documents and get answers that point to the exact source.
date: 2026-10-13
draft: false
tags: [typescript, nextjs, rag, embeddings, evals]
role: Solo Developer
year: 2026
url: https://docs-to-answers.vercel.app
featured: true
---

## Overview

Imagine dropping in your company handbook, then simply asking: *"What is the refund policy?"* This app answers from your documents and shows you exactly where each answer comes from, so you can trust andcheck it.

Just as important is what it does when the answer isn't there. Ask something unrelated, like *"Who won the 1998 World Cup?"*, and it will honestly tell you that's not covered, instead of making something up.

## Try it

Open the [live demo](https://docs-to-answers.vercel.app) and click **Load sample handbook**. No account or setup needed, a small fictional handbook is included so you can try both kinds of questions right away.

## How it's built

Your documents are split into short passages that can be searched by meaning, not just keywords. When you ask a question, the app finds the most relevant passages and writes the answer strictly from those, with links back to each source. I also bundled a small test suite (15 questions) that checks the app answers correctly and admits when it doesn't know: it currently scores 14 out of 15.

The code is open source: [github.com/arthurschonbach/docs-to-answers](https://github.com/arthurschonbach/docs-to-answers).
