---
title: Research to Brief
description: A fixed-budget research pipeline (plan, search, pick, read, write) driven by zod-validated JSON instead of function calling, streaming a cited brief and its full trace.
date: 2026-10-14
draft: false
tags: [typescript, nextjs, agents, grounded-research]
role: Solo Developer
year: 2026
url: https://research-to-brief.vercel.app
featured: true
---

## Overview

Ask a research question and the app plans a few web searches, reads the most promising pages and writes a short brief where every claim cites a numbered source. The whole trace streams live: what was searched, what was read, what was skipped and why.

You can block domains, and you can stop a run at any point: the server notices the closed connection and saves the partial trace as "stopped".

## Try it

Open the [live demo](https://research-to-brief.vercel.app) and click **Load sample run** to see a complete, real example. No account or setup needed.

## How it's built

**A pipeline, not a loop.** Instead of letting an agent decide when to stop, the route runs five fixed stages: plan → search → pick → read → write. Hard budgets (at most 3 searches and 4 pages per run) mean it can't spin or repeat itself, and every run fits within the serverless time limit.

**JSON instead of function calling.** The free models I use aren't reliable with tool-calling APIs, so the model outputs plain JSON (a search plan, then a list of URLs to read), validated with zod. The parser tolerates code fences and stray prose around the JSON. On failure there is one repair retry quoting the zod issues, then a deterministic fallback: the raw question as the only query, or the top search results as the picks.

**Read-only tools.** Only two tools exist: `web_search` (Tavily, then Brave, then a keyless DuckDuckGo scraper that detects its rate-limit challenge page instead of reporting "no results") and `fetch_page`. Pages are read in parallel: Tavily Extract first for JavaScript-rendered sites, plain fetch + `cheerio` as a fallback per page. URLs are normalised (tracking params, `www.`, trailing slash) to remove duplicates, blocked domains appear in the trace as skips, and pages under 500 characters are marked as thin and only used when nothing better is available.

**Grounded output.** The brief streams token by token from the collected pages only. Its `[n]` markers are then mapped back to sources; if the model dropped them all, one rewrite pass adds them back and the client swaps the text in a single step. Runs, traces and citations are stored in Postgres (Neon), and a run still marked "running" after the function's maximum duration is reported as failed.

The code is open source: [github.com/arthurschonbach/research-to-brief](https://github.com/arthurschonbach/research-to-brief).
