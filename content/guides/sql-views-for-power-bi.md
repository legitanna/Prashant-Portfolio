---
title: "Write the SQL Layer First, Then Build the Power BI Report"
description: "Views instead of raw tables, explicit columns, one definition per metric, and the naming that keeps a reporting database readable two years later."
category: "SQL"
date: "2026-11-27"
readMinutes: 9
keywords:
  - sql views for power bi
  - reporting database design
  - power bi sql best practice
  - query folding
---

Reports built directly on application tables break in ways nobody can trace. The column gets renamed, a status code changes meaning, someone adds a soft-delete flag, and the dashboard is quietly wrong.

A view layer costs an afternoon and prevents years of that.

## What the view layer is

One schema, usually `reporting`, containing a view per table the report needs. Power BI connects to the views and nothing else.

```
reporting.vw_dim_customer
reporting.vw_dim_product
reporting.vw_dim_date
reporting.vw_fact_sales
reporting.vw_fact_payments
```

Named for what they are: `dim` and `fact`, so the model shape is visible before anyone opens Power BI.

## Why not connect to the tables

- **Stability.** A view is a contract. The application can rename a column and the view keeps the old name until you choose to change it.
- **One definition.** "Active customer" is defined once, in SQL, not five times in five measures.
- **Testability.** You can run the query in SSMS and compare it with finance's number before Power BI is involved.
- **Performance.** Filters and joins happen where the indexes are, and Power BI imports a smaller, cleaner table.

## Write it explicitly

```sql
CREATE VIEW reporting.vw_fact_sales AS
SELECT
    s.SaleID            AS SaleID,
    CAST(s.SaleDate AS date) AS SaleDate,
    s.CustomerID        AS CustomerID,
    s.ProductID         AS ProductID,
    s.Quantity          AS Quantity,
    s.NetAmount         AS NetAmount,
    s.DiscountAmount    AS DiscountAmount,
    CASE WHEN s.Status IN ('C','X') THEN 1 ELSE 0 END AS IsCancelled
FROM dbo.Sales s
WHERE s.SaleDate >= '2021-01-01';
```

Three habits in that snippet:

1. **Every column aliased.** No `SELECT *`. A view with `*` silently changes shape when the table does, and the refresh fails at 3am.
2. **Types cast explicitly.** A date stored as `datetime2` with a time component will break month grouping in subtle ways.
3. **Flags precomputed.** `IsCancelled` in SQL is one `CASE`, not a DAX measure repeated in six reports.

## Define the metrics once

The best use of the layer is the metric everyone argues about.

```sql
CREATE VIEW reporting.vw_fact_sales_valid AS
SELECT *
FROM reporting.vw_fact_sales
WHERE IsCancelled = 0
  AND Quantity > 0;
```

Now "sales" means this view, in every report, for everyone. The argument moves to a code review, where it belongs.

## Dates

Build a date dimension in SQL rather than DAX if the warehouse is the source. It is one table, generated once:

```sql
WITH d AS (
    SELECT CAST('2021-01-01' AS date) AS dt
    UNION ALL
    SELECT DATEADD(day, 1, dt) FROM d WHERE dt < '2027-12-31'
)
SELECT
    dt                    AS Date,
    YEAR(dt)              AS Year,
    MONTH(dt)             AS MonthNumber,
    FORMAT(dt, 'MMM')     AS MonthName,
    DATEPART(quarter, dt) AS Quarter,
    DATEPART(week, dt)    AS WeekNumber,
    CASE WHEN DATEPART(weekday, dt) IN (1,7) THEN 1 ELSE 0 END AS IsWeekend
FROM d
OPTION (MAXRECURSION 4000);
```

Mark it as the date table in Power BI and every time-intelligence measure works.

## Keep Power Query thin

If the view is right, Power Query does almost nothing: connect, maybe filter, load.

Every transformation you add in Power Query is a step that may not fold, and a step that must be repeated in the next report. Change the view instead.

## Permissions

Give the report a dedicated read-only login, granted `SELECT` on the `reporting` schema only. Not `db_datareader` on the whole database, and never a personal account.

When someone leaves, the reports keep refreshing.

## When not to bother

If the source is a set of Excel files, there is no database and Power Query is the layer. If the source is a SaaS tool with a clean API, the connector may be enough.

The view layer earns its keep when a database is involved and more than one report reads it. That is most businesses past their first year of reporting.
