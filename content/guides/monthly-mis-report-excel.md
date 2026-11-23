---
title: "How to Build a Monthly MIS Report in Excel, Step by Step"
description: "A repeatable structure for monthly management reports in Excel: the tab layout, the formulas, and the three checks that stop errors reaching your manager."
category: "Excel Reporting"
date: "2026-11-24"
readMinutes: 11
keywords:
  - mis report format in excel
  - monthly mis report template
  - excel mis reporting
  - management information system report
---

Most monthly MIS reports break for one reason: they are rebuilt from scratch every month.

Someone exports the sales file, pastes it into last month's workbook, drags the formulas down, fixes the ones that broke, and sends it at 9pm on the fifth working day. It takes six hours and it is wrong in two places.

A report that survives twelve months is not cleverer. It is built once, in a fixed shape, and only the data tab changes.

Here is that shape.

## What an MIS report is for

An MIS report answers three questions for someone who will not open the workbook:

1. How did we do against plan this month?
2. Where did the gap come from?
3. What do you need to decide?

If a tab does not answer one of those, it is a detail tab and belongs at the back, not on the summary.

## The five tabs

Build the workbook in this order. Each tab only reads from the one before it.

| Tab | Purpose | Changes monthly |
| --- | --- | --- |
| `01_Data` | Raw export, untouched | Replaced |
| `02_Clean` | Power Query output, typed and validated | Refreshed |
| `03_Summary` | KPI block, actual vs budget | Formula only |
| `04_One_Pager` | The page your manager reads | Formula only |
| `05_Notes` | Definitions, sources, date run | Edited by hand |

Reserve the tab names now. Never rename them, because every formula and query points at them.

## Step 1: keep the raw data raw

`01_Data` holds the export exactly as the system produced it. No formatting, no deleted columns, no merged cells, no blank rows in the middle.

Two rules matter:

- One row per transaction. If a header repeats inside the data, the import is broken, not the report.
- Dates must be real dates. A text date like `01-Nov-2026` left aligned in the cell will break every calculation downstream.

Add a `Year` and `Month` column at the end of the raw data if the source does not include them. Do not add calculations here.

## Step 2: clean with Power Query, not copy and paste

Select the table on `01_Data`, then use Data, then From Table/Range. The first time, set the types, remove the columns you do not report on, and filter out test or cancelled rows. That work is saved as a query.

After that, each month is one action: replace the data in `01_Data`, then Data, then Refresh All.

The reason to use Power Query instead of editing by hand is not speed. It is that the same transformation runs every month with no memory of what you did last time. Hand-cleaning is where silent errors come from, such as a region name becoming `North ` with a trailing space, which then splits your totals in two.

If the export is a folder of monthly files, point the query at the folder. Power Query will stack them into one table, and the report stops depending on you remembering which files to append.

## Step 3: build the KPI block with SUMIFS

The summary tab should never contain pasted numbers. Every cell is a formula reading `02_Clean`.

Actual revenue for a month:

```excel
=SUMIFS(Clean[Revenue], Clean[Month], $B$2, Clean[Region], $A6)
```

Budget sits in its own column, entered once at the start of the year:

```excel
=C6/$D6-1
```

Format that as a percentage. Actual, budget, variance in value, variance in percent. Four columns, one row per region, and a total row that sums rather than averages.

Two formula habits that save hours later:

- Use structured references (`Clean[Revenue]`) instead of `$A$2:$A$50000`. The range grows with the table and never needs adjusting.
- Put the reporting month in a single cell, `B2`, and reference it everywhere. Changing the month then updates the whole report.

## Step 4: the one-pager

The one-pager is the only tab most readers will open. Keep it to:

- Four KPI tiles across the top: revenue, gross margin, units, and one operating metric that matters in your business.
- One table of the top five exceptions, such as regions or products more than 10% off plan.
- One short paragraph of commentary, written by hand.

Use conditional formatting on the variance column only: red below -5%, amber between -5% and 0%, green above 0%. Three rules, no more. Colour everywhere means colour means nothing.

## Step 5: three checks before you send

Run all three. They take four minutes and catch almost every error people get caught on.

1. Row count. Compare the row count of `02_Clean` with the source system. If the source says 14,820 transactions and the query returns 14,810, ten were dropped by a filter. Find them.
2. Total reconciliation. Sum the revenue column on `02_Clean` and compare it with the same total straight from the source system. They must match to the cent.
3. Month over month sanity. If a region moved more than 20% against last month, explain it before your manager asks. Half the time it is a data problem, not a business one.

Add these three numbers to `05_Notes`, with the date and time the report was run. When someone asks in three weeks which version they are holding, you will know.

## The mistakes that cost the most

- Merged cells anywhere in the data tabs. They break sorting, filtering and queries.
- Hard-coded months in formula text, so February's file still says `Jan`.
- Hiding rows instead of filtering. Hidden data still totals.
- Two people editing the file. Keep one master and send PDFs.
- A summary tab someone overwrote with values "just this once".

## How long this should take

The first build is a full day. After that, a monthly refresh is thirty to sixty minutes: replace the data, refresh, check the three numbers, write the commentary.

If it still takes half a day in month six, the workbook is doing work that Power Query should do, or the source system is giving you a different export shape each month. Fix the export before you fix the report.

## When Excel stops being enough

Move to Power BI when any of these become true: more than one person needs to slice the data themselves, you need daily rather than monthly numbers, or the file passes about 500,000 rows and refresh slows down.

Until then, a clean Excel workbook with Power Query behind it will beat a half-built dashboard, because it ships every month.
