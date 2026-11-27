---
title: "DAX Time Intelligence: YoY, YTD and Rolling 12 Months"
description: "The measures that cover most reporting needs, the date table they depend on, and the five reasons they return blank."
category: "Power BI"
date: "2026-11-27"
readMinutes: 9
keywords:
  - dax time intelligence
  - power bi year over year
  - totalytd dax
  - sameperiodlastyear
  - rolling 12 months dax
---

Every management report asks the same four questions: how much this month, how much this year, how did that compare with last year, and what does the last twelve months look like.

Five measures answer all of them. They only work on a proper date table, which is where most people get stuck.

## The date table, again

Time intelligence rewrites the filter on a calendar. If the calendar has gaps, duplicates, or lives in the fact table, comparisons silently return the wrong period or nothing at all.

Requirements:

- One row per day, unbroken, covering every date in your fact table.
- A real date column, not text.
- No time component. A `datetime` with midnight is fine; with 09:15 it is not.
- Marked as a date table in Power BI.
- Related to the fact table on the date column.

## The base measure

```dax
Sales = SUM ( FactSales[NetAmount] )
```

Everything else builds on this. One measure, referenced everywhere, so a change to the definition changes every report.

## The five measures

```dax
Sales MTD = TOTALMTD ( [Sales], DimDate[Date] )

Sales YTD = TOTALYTD ( [Sales], DimDate[Date] )

Sales QTD = TOTALQTD ( [Sales], DimDate[Date] )

Sales LY = CALCULATE ( [Sales], SAMEPERIODLASTYEAR ( DimDate[Date] ) )

Sales YoY % = DIVIDE ( [Sales] - [Sales LY], [Sales LY] )
```

`DIVIDE` returns blank instead of an error when the denominator is zero, which is what you want the first year.

## Rolling twelve months

Twelve months is not a calendar year, and it is what most businesses actually mean by "the last year".

```dax
Sales Rolling 12M =
CALCULATE (
    [Sales],
    DATESINPERIOD ( DimDate[Date], MAX ( DimDate[Date] ), -12, MONTH )
)
```

`MAX ( DimDate[Date] )` is the last date in the current filter context, so the window moves with the slicer. Change the month and the twelve months move with it.

A monthly average over the same window:

```dax
Sales Rolling 12M Avg =
AVERAGEX (
    DATESINPERIOD ( DimDate[Date], MAX ( DimDate[Date] ), -12, MONTH ),
    CALCULATE ( [Sales] )
)
```

That is the number to plot when the monthly line is too noisy to read.

## Fiscal years

If the year starts in April, `TOTALYTD` takes an end date:

```dax
Sales FYTD = TOTALYTD ( [Sales], DimDate[Date], , "31/03" )
```

The string is parsed in the model's locale, so test it: build a table by month and check that April starts a new year. A misread format scores zero silently, which is the worst kind of wrong.

## Five reasons the measures return blank

1. **The relationship is missing or inactive.** Check the model view; a dotted line is inactive.
2. **You used the fact table's date.** `SAMEPERIODLASTYEAR ( FactSales[Date] )` fails or misbehaves. Always the dimension.
3. **The date table has gaps.** Look for missing days at month ends and around holidays.
4. **The date column has a time part.** `2026-11-01 10:30` is a different day from `2026-11-01`, and totals split.
5. **The relationship is filtered both ways** and something upstream is cancelling it. Set filtering to single direction and retest.

## What not to do

Do not write `CALCULATE ( [Sales], DimDate[Year] = YEAR ( TODAY() ) - 1 )` and call it last year. It compares full calendar years, not the same period, so on the fifth of the month it compares five days against twelve months.

Do not build a separate measure per month. One measure and a month on the axis.

Do not use `TODAY()` inside a measure that also slices by date. It ignores the slicer and confuses everyone who uses the report.

## A check worth doing once

Build a table visual: months as rows, `[Sales]`, `[Sales YTD]`, `[Sales LY]`, `[Sales YoY %]`.

Pick January of last year by hand and verify three numbers against a spreadsheet. If they agree, the model is sound. If they do not, one of the five failures above is present, and you will find it faster in that table than in a chart.
