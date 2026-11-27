---
title: "Power BI and SQL Server: Import, DirectQuery, or Both"
description: "How to choose a storage mode for a SQL Server source, what each one costs you in speed and freshness, and the composite pattern that solves most real cases."
category: "Power BI + SQL"
date: "2026-11-27"
readMinutes: 10
keywords:
  - power bi directquery vs import
  - power bi sql server
  - composite model power bi
  - query folding
---

The question arrives as "should I use DirectQuery?" and the honest answer is usually no. But not always, and the exceptions are worth knowing.

## Import

Power BI copies the data into its own engine at refresh. Queries then run against that copy.

**Wins:** fastest visuals, full DAX, works offline from the source, no load on the database at report time.

**Costs:** data is as fresh as the last refresh (eight per day on Pro), the dataset has a size limit (about 1 GB compressed on Pro), and the refresh itself is a job that can fail.

Default to this. Most reporting is daily or monthly, and a refresh at 6am is indistinguishable from live data.

## DirectQuery

Power BI sends a query to SQL Server every time someone opens or interacts with a visual.

**Wins:** always current, no dataset size ceiling, no refresh window.

**Costs:** every click is a database query, so visuals are slower and the load moves to a server that also serves the application. Some DAX is restricted, and complex measures can turn into expensive SQL. There is also a limit on rows returned per visual, which surprises people at around a million.

Use it when the answer genuinely must be live: an operations board showing today's dispatches, a trading desk, a call centre queue. Not for a monthly P&L.

## The thing that decides it: query folding

In DirectQuery, Power Query steps are translated to SQL. If every step folds, the database does the work and only the result travels. If one step does not fold, Power BI pulls the table and processes it locally, which is the worst of both worlds: slow and limited.

Check by right-clicking a step in Power Query and looking for **View Native Query**. If it is greyed out at the last step, the query is not folding.

Steps that usually fold: filters, column selection, renames, simple joins, group by. Steps that usually break it: adding an index, some date transformations, custom functions, `Table.Buffer`.

## Composite: the answer for most real models

Set storage mode per table. That is the composite model, and it removes the false choice.

A pattern that works:

- **Facts** in Import, refreshed hourly or nightly. Large, but aggregations are what visuals need.
- **A small, fast-changing table** in DirectQuery, such as today's stock or open orders.
- **Dimensions** in Import.

Relationships across storage modes work, with caveats: a DirectQuery table cannot be on the "one" side of a relationship to an Import table in every direction, so keep dimensions imported and facts consistent.

For an on-premises SQL Server with a live element, this is usually the right answer, and it is what "both" means.

## What to do before choosing anything

Write the query first.

```sql
CREATE VIEW vw_fact_sales AS
SELECT
    s.SaleID,
    s.SaleDate,
    s.CustomerID,
    s.ProductID,
    s.Quantity,
    s.Amount,
    s.Discount
FROM dbo.Sales s
WHERE s.IsDeleted = 0
  AND s.SaleDate >= '2021-01-01';
```

Then connect Power BI to the view and import it. Three benefits: the definition lives in one place, the query is testable in SSMS, and Power BI's model stays thin. If you later switch to DirectQuery, the view already folds.

Do not connect to `dbo.Sales` and do the joins in Power Query unless the joins are trivial. Every transformation you add there is a transformation that will one day fail to fold.

## Practical settings

- Use the SQL Server connector, not ODBC, unless you have a reason.
- Authenticate with a dedicated read-only account, never a personal one. When that person leaves, the report does not.
- Set privacy levels consistently, or the refresh fails with an unhelpful error about combining data sources.
- For Import, schedule the refresh after the nightly load, not at midnight when the load is running.

## A short decision rule

Monthly or daily reporting, under a few million rows: Import.

Operational board that must show the last fifteen minutes: DirectQuery, on a table designed for it.

Large fact tables plus one live element: composite.

Anything else: Import, and stop worrying about freshness nobody asked for.
