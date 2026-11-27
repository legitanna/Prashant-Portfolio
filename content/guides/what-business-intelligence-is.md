---
title: "What Business Intelligence Actually Is, and When You Need It"
description: "BI is not dashboards. It is the agreement about which numbers are true. The four stages a business passes through, the signs you have outgrown spreadsheets, and what it costs."
category: "BI"
date: "2026-11-27"
readMinutes: 9
keywords:
  - business intelligence
  - what is BI
  - BI for small business
  - reporting maturity
---

Business intelligence is not a dashboard. A dashboard is what BI looks like from outside.

BI is the arrangement that makes one number authoritative: one definition of revenue, one source, one refresh, one place to look. The tool is the least interesting part, which is why buying a tool rarely fixes anything.

## The four stages

Almost every business moves through the same sequence, whether or not anyone plans it.

**Stage one, the file.** One person owns the spreadsheet. It is correct because that person is careful. When they are on leave, nobody can produce the number.

**Stage two, the argument.** The business grows, two people build the report, and the totals differ. Meetings start with "which file are you looking at". This is the expensive stage, and it is where most firms sit for years.

**Stage three, the pipeline.** Data is pulled once, cleaned once, and modelled in one place. Reports read from that model. The definition of revenue is written down. People stop asking whose file is right.

**Stage four, governed self-service.** Others build their own views on the trusted model, with guardrails: certified datasets, row-level security, a named owner for each report.

Most small firms need stage three. Very few need stage four, and jumping there early produces a governance project nobody asked for.

## The signs you have outgrown stage two

- Two reports of the same metric, produced by different people, do not agree.
- Someone asks for a cut you did not anticipate, twice in one month.
- The monthly close depends on one person's memory of the manual steps.
- Data lives in four systems and the join happens by hand in Excel.
- The report is late, and the meeting is rescheduled around it.

One of these is normal. Three is a system problem, and no amount of effort fixes it.

## What BI is made of

Five parts, in order of importance:

1. **A source of truth.** One database or warehouse the reports read from, not four exports.
2. **A model.** Tables related properly, measures defined once, a calendar table. This is where most of the value sits.
3. **A refresh.** Automatic, on a schedule, with a failure alert.
4. **A distribution layer.** A workspace, an app, or an embedded report, with permissions that match seniority.
5. **A tool.** Power BI, Looker Studio, Tableau, Metabase: all capable, none decisive.

Notice the tool is last. Firms that start with the tool spend a year building something that still disagrees with finance.

## What it costs

Two costs, and the second is the one people forget.

The licence. Power BI Pro is roughly 14 dollars per user per month, and viewers need one too. Five readers is about 840 dollars a year.

The build. A first properly modelled report set is two to six weeks of work for someone who has done it before, including the conversations about definitions. Skipping the conversations is how you get a beautiful dashboard that finance will not use.

## When you do not need it

If one person produces one report for one reader, once a month, and the numbers are agreed, you do not need BI. You need that person to document the steps.

If the business has fewer than about ten regular reports and under 200,000 rows of data, a clean Excel workbook with Power Query is a legitimate answer. It is not a failure to stay there.

## The test that matters

After the project, ask one question: when two people need the same number, do they get it from the same place without asking anyone?

If yes, you have BI. If they still email each other, you have bought a tool.
