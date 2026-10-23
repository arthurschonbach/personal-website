---
title: Meeting to Actions
description: Meeting transcript to a zod-validated recap, streamed section by section over NDJSON, with the follow-up email and project update built in code rather than generated.
date: 2026-10-11
draft: false
tags: [typescript, nextjs, llm, structured-output, streaming]
role: Solo Developer
year: 2026
url: https://meeting-to-actions.vercel.app
featured: true
---

## Overview

Paste a meeting transcript and get back a short summary, the decisions, the open questions and a list of who does what by when, plus a draft follow-up email and a project update.

Everything stays editable: tick off actions, rewrite any field, or regenerate. Owners and due dates are tagged `explicit`, `inferred` or `unknown`, so a guess is never presented as something that was said.

## Try it

Open the [live demo](https://meeting-to-actions.vercel.app) and click **Load sample meeting**. No account or setup needed.

## How it's built

**A small, strict schema.** The model only produces a *core* recap (minutes, decisions, open questions, action items), defined in zod with hard length caps and converted to JSON Schema for the prompt. Topics, the email and the project update used to be generated too; they were the main source of repetition and wasted tokens, so I cut them from the model's output.

**Streaming structured output.** Rather than waiting for one big JSON object, the model writes one JSON line per section, action items first. The server splits the token stream on newlines, validates each line against its own section schema and forwards it to the client as soon as it parses. If the stream ends with sections missing or invalid, a non-streaming call in JSON mode fills only the gaps, with a repair prompt that lists the zod issues.

**Derived, not generated.** The follow-up email and the project update are assembled in TypeScript from the validated recap (decisions become progress, open questions become blockers, actions become next steps). They cost zero tokens and can never contradict the recap.

**Series and persistence.** Meetings can be grouped into a series: open action items and earlier decisions are passed as context, used to interpret references but not repeated as new items. Saves are transactional upserts in Postgres (Neon), and manual edits keep the original model and timestamp. Retries only happen before the first token reaches the client, so a section is never shown twice.

The code is open source: [github.com/arthurschonbach/meeting-to-actions](https://github.com/arthurschonbach/meeting-to-actions).
