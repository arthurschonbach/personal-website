---
title: Meeting to Actions
description: Turn a meeting transcript into clear minutes, decisions, and a to-do list. In a few seconds.
date: 2026-10-11
draft: false
tags: [typescript, nextjs, llm, structured-output, streaming]
role: Solo Developer
year: 2026
url: https://meeting-to-actions.vercel.app
featured: true
---

## Overview

Meetings are easy to have and hard to remember. This app takes a meeting transcript and turns it into something useful: a short summary, the decisions that were made, and a clear list of who does what next. It also drafts the follow-up email and a project update for you.

Everything is editable, so you stay in control: tick off tasks as they're done, tweak the wording, or regenerate anything you're not happy with.

## Try it

The easiest way to understand it is to see it: open the [live demo](https://meeting-to-actions.vercel.app) and click **Load sample meeting**. No account or setup needed.

## How it's built

A language model reads the transcript and pulls out the essentials; the email and project update are then composed from those essentials so they always agree with each other. When something is a guess rather than stated in the meeting (like who owns a task) the app says so instead of pretending otherwise.

The code is open source: [github.com/arthurschonbach/meeting-to-actions](https://github.com/arthurschonbach/meeting-to-actions).
