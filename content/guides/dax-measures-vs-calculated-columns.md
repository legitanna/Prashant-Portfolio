---
title: "DAX Measures vs Calculated Columns: Get This Right Once"
description: "The difference in evaluation, the four cases where a calculated column is correct, and why most columns people add to a fact table should be measures instead."
category: "Power BI"
date: "2026-11-27"
readMinutes: 8
keywords:
  - dax measures vs calculated columns
  - calculated column power bi
  - dax measure
  - power bi performance
---

The first real Power BI decision is where a calculation lives. Get it wrong and the model bloats, the file slows, and the same logic gets written five times.

## The difference, in one line

A calculated column is computed **per row** and stored in the model. A measure is computed **per visual**, when someone looks at it.

## What that means in practice

A calculated column on a two-million-row fact table adds two million values to the file, every refresh. If it is `Amount * 1.18`, you have stored the tax on every line forever, to display a total once.

The measure version is one definition, evaluated at query time, over whatever the visual filters to.

```dax
Sales = SUM ( Sales[Amount] )
Sales with Tax = [Sales] * 1.18
```

Two measures, no storage, no growth.

## When a calculated column is correct

Four legitimate cases:

1. **You need to slice or filter by the result.** Calculated columns can go on an axis or in a slicer; measures cannot. A price band (`Low`, `Mid`, `High`) belongs in a column.
2. **You need it as a key for a relationship.** A concatenated key joining two tables is a column, not a measure.
3. **It is a sort column.** Month name sorted by month number needs a column.
4. **It must be evaluated row by row with row context**, such as an `EARLIER` comparison to the previous row, and no better option exists.

## Where the column should really go

If the calculation is row-level and does not need DAX-specific features, do it upstream.

- In SQL: `amount * 1.18 AS amount_with_tax` in the view.
- In Power Query: a custom column, which compresses better than a DAX column and does not slow the refresh of other tables.

A calculated column is the fallback, not the default.

## The trap with RELATED

This is the pattern that creates most accidental columns:

```dax
Product Category = RELATED ( DimProduct[Category] )
```

Adding product category to a two-million-row sales table duplicates a value that already exists in a dimension. Instead of the column, put `DimProduct[Category]` straight on the visual. If you genuinely need it on the fact, the model is missing a relationship, not a formula.

## Measures that look like columns

A measure cannot reference another row. This fails:

```dax
Previous Amount = Sales[Amount] - 1
```

A measure has no row context, so there is no "previous row". What people usually want is a shift by date, which is a measure over the date dimension:

```dax
Previous Day Sales = CALCULATE ( [Sales], DATEADD ( DimDate[Date], -1, DAY ) )
```

That is the correct shape: filter the model, then aggregate.

## Performance, honestly

The performance difference is smaller than the internet suggests, until it is not.

- A few calculated columns on a small dimension: irrelevant.
- Many calculated columns on a large fact table: refresh slows, the file grows, and compression degrades, because computed columns rarely compress as well as imported ones.
- Iterating measures over a large table, such as `SUMX` over millions of rows inside a visual, is where report rendering actually suffers.

The reliable rule: **columns for structure, measures for numbers.**

## A quick audit

Open the model view. Sort columns by size. If the biggest columns are calculated, you have found the problem. Replace them with measures where the result is only ever aggregated, and move the rest upstream.

Then count measures with the same name pattern. Three variants of "Total Sales" means nobody agreed on the definition, which is a business problem that shows up as a modelling problem.
