---
title: "Power BI Data Modelling: A Star Schema Without the Theory"
description: "Why a single flat table breaks in Power BI, how to split facts from dimensions, and the four relationship rules that prevent most DAX problems."
category: "Power BI"
date: "2026-11-27"
readMinutes: 10
keywords:
  - power bi star schema
  - power bi data model
  - fact and dimension tables
  - power bi relationships
---

Most slow, wrong Power BI reports are not a DAX problem. They are a model problem.

A single flat table imported from Excel works until it does not: the file is huge, a measure returns the wrong total, and the same customer name appears four times with different spellings. The fix is structural and takes an afternoon.

## Two kinds of table

**Facts** are things that happened, with numbers: sales lines, payments, stock movements, support tickets. Many rows, few columns, mostly keys and amounts.

**Dimensions** are things you describe: date, customer, product, region, employee. Fewer rows, more columns, the things you slice by.

A model is facts surrounded by dimensions. Draw it and it looks like a star, which is where the name comes from. It is not a theory; it is what the engine is built for.

## Why the flat table fails

Take a sales export with one row per line: date, customer, city, product, category, salesperson, quantity, amount. Everything is there.

Three problems follow:

1. **Size.** Customer and product attributes repeat on every row. A million lines with six descriptive columns is mostly repetition, and the file grows accordingly.
2. **Ambiguity.** To count customers you must count distinct customer names, which is slow and fragile. In a model, the customer dimension has one row per customer and counting is trivial.
3. **Filtering behaviour.** Slice by category and every measure that touches product suddenly has two paths to the fact table. That is the source of the "relationship may be needed" errors and the double counting that follows.

Splitting the file removes all three at once.

## The split, concretely

From that export, build:

- `Sales` — date key, customer key, product key, salesperson key, quantity, amount
- `DimDate` — one row per day, with year, quarter, month, week, and a sort column for month name
- `DimCustomer` — one row per customer, with city, segment, credit terms
- `DimProduct` — one row per product, with category, brand, unit
- `DimSalesperson` — one row per person, with team and region

Relationships: each dimension one-to-many to the fact, filtering in one direction, from dimension to fact. Five relationships, all the same shape.

The fact table keeps the keys. It does not keep the descriptions.

## The calendar table is not optional

Time intelligence functions do not work reliably without it. A date column in the fact table is not a calendar.

Create it in DAX:

```dax
DimDate =
ADDCOLUMNS (
    CALENDAR ( DATE ( 2021, 1, 1 ), DATE ( 2027, 12, 31 ) ),
    "Year", YEAR ( [Date] ),
    "Quarter", "Q" & QUARTER ( [Date] ),
    "Month", FORMAT ( [Date], "MMM" ),
    "MonthSort", MONTH ( [Date] ),
    "YearMonth", FORMAT ( [Date], "YYYY-MM" )
)
```

Then mark it as a date table, and relate `DimDate[Date]` to `Sales[Date]`. Sorting month names by `MonthSort` is what stops April appearing before January.

## Four rules that prevent most problems

1. **One relationship path** between any two tables. If two exist, one is wrong.
2. **Filters flow downhill**, dimension to fact. Bidirectional filtering is a last resort; it creates ambiguity and slow queries.
3. **Hide the keys.** Users should never see `CustomerKey`. Hide it, and they will build reports on names and dates instead.
4. **Do not model the whole business.** Start with one process: sales. Add stock later.

## Where the model should be built

Not in DAX, and not by hand in Power Query if you can avoid it.

If the source is SQL Server, build views in SQL: one view per table, already typed, filtered and named. Power BI then imports four clean tables. The transformation is testable outside the report, and any other tool can use it later.

If the source is Excel files, Power Query is the right place. Split the wide table into fact and dimensions there, with merges to look up descriptions.

## How to tell it is working

- Measures are short: `SUM`, `COUNTROWS`, or a `CALCULATE` over one filter.
- The file size drops, often by half.
- Slicers respond instantly.
- Nobody has to explain which customer name is the correct one.

If a measure needs three nested `FILTER`s to produce a number, the model is missing a table, not a formula.
