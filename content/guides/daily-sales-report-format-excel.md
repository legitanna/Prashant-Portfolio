---
title: "Daily Sales Report Format in Excel for a Small Business"
description: "The columns, formulas and timing for a daily sales report that a manager reads in two minutes: sales, collections, outstanding and the exceptions that need action."
category: "MIS"
date: "2026-11-27"
readMinutes: 8
keywords:
  - daily sales report format in excel
  - daily sales report template
  - daily sales report for small business
  - daily collection report
---

A daily sales report has one job: tell someone by 10am what happened yesterday and what needs attention today.

Most versions fail by being a transaction list with a total. That is a data dump, not a report.

## The structure

Four blocks on one page, in this order:

1. Headline numbers, yesterday against target and against the same day last week.
2. Sales by salesperson or by category, whichever the business is managed on.
3. Collections and outstanding movement.
4. Exceptions: credit breaches, cancelled orders, returns, discounts over limit.

## The one-row-per-day table

Keep a history tab. One row per day, one column per measure:

| Date | Day | Target | Sales | Collected | Returns | Net | Orders | Avg order |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

The daily report reads from this, not from the invoice list. The list changes shape; this table has a fixed shape for a year.

Formulas:

```excel
=SUMIFS(Invoices[Amount], Invoices[Date], $A2)
```

```excel
=IFERROR(Net/Orders, 0)
```

Average order value is the number that reveals a bad day before the total does. Ten small orders and one large one look identical in the total.

## Headline block

| Measure | Yesterday | Target | Last week same day | Variance |
| --- | --- | --- | --- | --- |

Four rows: sales, collections, orders, average order. Variances as percentages, conditional formatting on the variance column only, red below −10%, amber −10 to 0, green above.

That is the whole report for most readers. Everything below it is for the person who asks a follow-up.

## Sales by person or category

A small pivot, refreshed daily:

- Rows: salesperson or category
- Values: sales, orders, average order
- Sorted by sales descending

Add a column for the month to date per person, because a single day tells you nothing about performance and everyone will read it that way.

## Collections

The daily report should separate revenue from cash, every time. A business can sell well and still run out of money.

| Party | Invoiced | Collected | Balance | Overdue days |
| --- | --- | --- | --- | --- |

Two derived numbers:

```excel
=SUMIFS(Ledger[Amount], Ledger[Type], "Receipt", Ledger[Date], $A2)
```

```excel
=SUMIFS(Ageing[Balance], Ageing[Party], $A5)
```

If collections are consistently below 80% of invoiced, the report is telling you something more important than the sales figure.

## Exceptions

Five lines, each a filter, each with a name against it:

- Invoices above the credit limit
- Orders cancelled or returned yesterday, with reason
- Discounts above the approval threshold
- Parties overdue by more than 60 days
- Deliveries pending beyond the promised date

An exception without an owner and a due date is a complaint, not a control.

## Timing and distribution

Build it so it is ready before the morning meeting, which means it must run off data that is already complete.

- Data cut-off: end of business, previous day.
- Generation: 8am, automated if possible.
- Distribution: one PDF, one link, one WhatsApp group. Not three versions in two formats.
- Owner: one person named, who signs off the exceptions.

If the report needs manual assembly every morning, it will be skipped on busy days, which are exactly the days it matters.

## The formulas that break

- **Dates stored as text.** Everything shifts by a day at month end. Convert with `DATEVALUE` and check the first and last date.
- **`TODAY()` inside the detail tab.** It recalculates constantly and the report stops being a historical record. Keep yesterday's date in a cell, set by the person or the script.
- **Totals that include cancellations.** Filter `Status` explicitly, or the number is optimistic by however many orders were cancelled.

## What to leave out

Stock value, margin by product and year-to-date comparisons. They belong in the monthly pack. A daily report that tries to be the monthly pack gets read by nobody after week two.

One page, four blocks, ten minutes to read, and every exception has a name against it. That is the format.
