---
title: "Google Sheets for MIS Reporting: The Four-Tab Setup"
description: "A monthly MIS pack that recalculates itself: raw data, a QUERY layer, a summary model and a one-page report, with the formulas and the performance limits."
category: "Google Sheets"
date: "2026-11-24"
readMinutes: 10
keywords:
  - google sheets mis report
  - query function google sheets
  - arrayformula
  - google sheets dashboard
  - monthly reporting
---

Most Sheets reports are one tab: data at the top, formulas below, sent as a PDF. It works until someone changes a row and the layout shifts by one.

Four tabs fix it, and each one has a single job.

## Tab 1: raw

Whatever the source gives you. Pasted, imported, or pulled with `IMPORTRANGE`. No formulas, no formatting, no deleted rows.

One rule: never edit it. Every check downstream compares against this tab, and it is the only thing that proves the report is complete.

If the data arrives as a CSV link, `IMPORTRANGE` in a dedicated tab keeps it live. Keep the number of `IMPORTRANGE` calls low; each one costs load time and they are the usual cause of a sheet that takes thirty seconds to open.

## Tab 2: clean

One `QUERY` that does the filtering and aggregation the report needs:

```excel
=QUERY(Raw!A:G,
  "select A, B, sum(F), count(A)
   where A is not null and F is not null
   group by A, B
   label sum(F) 'Value', count(A) 'Lines'", 1)
```

Reasons to use `QUERY` rather than a pivot table:

- It is a formula, so it cannot be forgotten or left unrefreshed.
- The output is a normal range that other formulas can read.
- The logic is written in one place and visible.

Reasons not to: `QUERY` does not like mixed data types in a column, treats a text-looking number as text, and its error messages are unhelpful. When it misbehaves, clean the types in tab 1 or use `FILTER` with `SUMIFS` instead.

## Tab 3: model

Where the business logic lives. Actual, budget, variance, month to date.

```excel
=SUMIFS(Clean!C:C, Clean!A:A, $A4, Clean!B:B, B$3)
```

and

```excel
=IFERROR(C4/D4-1, "")
```

Keep this tab free of presentation. No merged headers, no colours. If a number is wrong, you should be able to point at one cell and one formula.

For a whole-column calculation, use one `ARRAYFORMULA` instead of dragging:

```excel
=ARRAYFORMULA(IF(B2:B="", "", B2:B*C2:C))
```

One formula, and new rows are covered.

## Tab 4: report

The page a manager reads. Four KPI cells, one table, one paragraph of commentary typed by a person.

Reference the model with `SUMIFS`, never with pasted values. A pasted number is a claim you cannot defend in a month.

## The performance rules

Sheets slows down for specific reasons. Most are avoidable.

- Volatile functions in thousands of cells. `TODAY()`, `NOW()`, `RAND()` recalculate on every edit. One `TODAY()` in a settings cell, referenced everywhere, costs nothing.
- Whole-column `ARRAYFORMULA` over 50,000 rows. Fine if it is one column, painful if it is twenty.
- Many `VLOOKUP`s. Replace with `XLOOKUP` or an indexed `MATCH`, or precompute a key column.
- `IMPORTRANGE` chains: A pulls B, B pulls C. Refresh order becomes unpredictable.
- Formatting on entire columns, which makes the sheet re-render far more than it needs to.

Practical limits: a spreadsheet holds about ten million cells, but a report stays fast below roughly 100,000 data rows. Past that, move the raw layer to BigQuery or a database and keep the report in Sheets.

## Sharing and trust

A reporting sheet that people can break is a reporting sheet people stop trusting.

- Protect the model and report tabs. Editors edit data only.
- Publish the report tab as read-only, or send it through Looker Studio, rather than sharing the workbook.
- Use version history as the audit trail. Name versions at month end: File, Version history, Name current version.
- Put the as-of date in a settings cell and print it on the report. Half of all "these numbers are wrong" conversations end when both people realise they are looking at different months.

## When Sheets is the wrong tool

Move when any of these is true: the source is more than 200,000 rows, the report needs joins across four or more tables, several people need to slice data on their own, or refresh takes minutes.

The usual path is Sheets for the working report, BigQuery or SQL Server for the raw layer, and Power BI or Looker Studio for distribution. The formula work transfers; the structure transfers. Nothing is wasted by starting simple.
