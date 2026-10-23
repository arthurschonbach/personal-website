---
title: Docs to Answers
description: RAG over your own documents with pgvector, inline [n] citations to the exact passage, and an explicit abstention path graded by a judge-free eval suite.
date: 2026-10-13
draft: false
tags: [typescript, nextjs, rag, embeddings, evals]
role: Solo Developer
year: 2026
url: https://docs-to-answers.vercel.app
featured: true
---

## Overview

Drop in a company handbook, ask *"What is the refund policy?"*, and get a short streamed answer where every claim carries an `[n]` marker linked to the passage it came from.

The other half of the job is knowing when to say no. Ask *"Who won the 1998 World Cup?"* and the model replies with a fixed `NOT_IN_DOCS` token, which the app turns into a proper "not covered by these documents" answer instead of an error or a made-up one.

## Try it

Open the [live demo](https://docs-to-answers.vercel.app) and click **Load sample handbook**. No account or setup needed: a small fictional handbook is included so you can try both kinds of questions right away.

## How it's built

**Ingestion.** PDFs go through `pdfjs-dist` (with `[page n]` markers), URLs through `cheerio`: page chrome and reference lists are stripped, and headings are rewritten as markdown `#` so sections survive. A paragraph-aware chunker then greedily packs ~200-token passages with ~30 tokens of overlap, starting a new chunk at every heading and falling back to sentence splits only for oversized paragraphs. Each chunk is embedded with the document title prepended, so a passage saying "they" still knows who "they" is.

**Storage and retrieval.** Embeddings (1024 dims, through OpenRouter) live in Postgres with pgvector on Neon, written in a single transaction so a failed ingest leaves nothing behind. A question is embedded the same way and ranked with the `<=>` cosine operator: top 6, with a deliberately low 0.1 similarity floor that only drops clearly unrelated passages. Deciding whether the excerpts actually answer is left to the model.

**Answering.** The prompt numbers the excerpts and restates the rules at the end (small models follow the end of the prompt best). The answer streams over NDJSON; afterwards `[n]` markers are mapped back to chunks and any out-of-range number is dropped. The free-tier embedding provider fails often with fast 502s, so embeddings get their own retry loop, and chat calls also retry on errors that OpenRouter returns inside a 200 body.

**Evals.** 15 fixed questions graded without an LLM judge: answerable ones must contain the expected keywords *and* cite the expected document, unanswerable ones must abstain. Runs are stored per model so regressions are visible. Last recorded run: 15/15.

The code is open source: [github.com/arthurschonbach/docs-to-answers](https://github.com/arthurschonbach/docs-to-answers).
