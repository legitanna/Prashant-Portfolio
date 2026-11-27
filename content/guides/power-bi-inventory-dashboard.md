---
title: "Power BI Dashboard for Inventory Management: What to Include"
description: "Five pages that answer the questions an inventory owner actually asks, the measures behind them, and the visuals that make stock problems visible in ten seconds."
category: "Power BI"
date: "2026-11-27"
readMinutes: 10
keywords:
  - power bi dashboard for inventory management
  - inventory dashboard power bi
  - stock dashboard dax
  - days of cover
---

Most inventory dashboards are a table of stock quantities with a filter. That is a lookup, not a dashboard.

An inventory dashboard exists to answer five questions: what do we hold, what is not moving, are we about to run out, how much is committed, and who is late.

Five pages, one per question.

## The model

Two fact tables, three dimensions.

- `FactMovements`: date, item key, warehouse key, type, quantity signed, value
- `FactOrders`: date, item key, supplier or customer, quantity, promised date, status
- `DimItem`: item, category, unit, reorder point, lead time, MOQ
- `DimDate`: the usual calendar
- `DimWarehouse`

One rule: quantity is signed. Inward positive, outward negative. Every measure below depends on it.

## The measures

```dax
Stock Qty =
CALCULATE ( SUM ( FactMovements[Quantity] ), FactMovements[Type] <> "Adjustment" )
    + CALCULATE ( SUM ( FactMovements[Quantity] ), FactMovements[Type] = "Adjustment" )
```

In practice, one `SUM` over all movements, because the signs already carry the meaning:

```dax
Stock Qty = SUM ( FactMovements[Quantity] )

Stock Value = SUMX ( FactMovements, FactMovements[Quantity] * FactMovements[Rate] )
```

Outward usage over the last 90 days, per day:

```dax
Avg Daily Outward =
VAR Days = 90
VAR Out =
    CALCULATE (
        -SUM ( FactMovements[Quantity] ),
        FactMovements[Type] = "Sale",
        DATESINPERIOD ( DimDate[Date], MAX ( DimDate[Date] ), -Days, DAY )
    )
RETURN DIVIDE ( Out, Days )
```

Days of cover — the single most useful inventory number:

```dax
Days of Cover = DIVIDE ( [Stock Qty], [Avg Daily Outward] )
```

Stock turns, annualised:

```dax
Stock Turns =
DIVIDE (
    CALCULATE ( -SUM ( FactMovements[Quantity] ), FactMovements[Type] = "Sale",
        DATESINPERIOD ( DimDate[Date], MAX ( DimDate[Date] ), -12, MONTH ) ),
    [Stock Qty]
)
```

## Page 1: position

Four cards across the top: stock value, items below reorder, dead stock value, days of cover overall.

Below them, a bar chart of stock value by category, sorted descending, and a table of the top twenty items by value. The table is what people screenshot, so make it clean: item, category, quantity, value, days of cover.

## Page 2: ageing and dead stock

The page that pays for the project.

Buckets on last movement date:

```dax
Days Since Movement =
DATEDIFF ( MAX ( FactMovements[Date] ), TODAY (), DAY )
```

Buckets: 0–30, 31–60, 61–90, 91–180, over 180.

A matrix of category by bucket, with value as the measure. Anything in the last two columns is capital doing nothing, and the number is usually bigger than the owner expects.

Add a slicer for warehouse, and a table of items with no movement in 180 days and a value above a threshold.

## Page 3: movement trend

A line chart of inward and outward quantity by month, with a bar for net change. Two series, not five.

Under it, a small table of the biggest single movements, so a spike in the line can be explained by a document rather than a guess.

This page is for spotting seasonality and for catching the month where inward doubled and nobody remembers why.

## Page 4: reorder and action list

The operational page, printed or on a screen in the stores.

```dax
Reorder Qty =
VAR Cover = [Days of Cover]
VAR LeadTime = MAX ( DimItem[LeadTime] )
VAR Short = [Stock Qty] - [Avg Daily Outward] * LeadTime
RETURN IF ( Short < 0, ROUNDUP ( -Short, 0 ), 0 )
```

Table columns: item, stock, average daily outward, days of cover, lead time, suggested order, supplier.

Sort by days of cover ascending. The top ten rows are today's purchase list.

## Page 5: orders and reliability

Committed stock — quantity sold but not dispatched — and supplier performance.

On-time delivery by supplier:

```dax
On Time % =
DIVIDE (
    CALCULATE ( COUNTROWS ( FactOrders ), FactOrders[DeliveredOn] <= FactOrders[Promised] ),
    COUNTROWS ( FactOrders )
)
```

A supplier who is late is why you hold safety stock. That is the argument for reducing stock, and it needs a number.

## Five things to leave out

- A chart of every item. Nobody reads 4,000 rows on a screen.
- Pie charts for anything with more than four slices.
- Gauges. They use a lot of space to show one number.
- A "health score" you invented. If it cannot be explained in one sentence, it will be ignored.
- Daily refresh if the data is weekly. Freshness nobody needs is a support burden.

## The test

Show the reorder page to the person who places orders. If they stop keeping a private spreadsheet, the dashboard works. If they keep the spreadsheet, the dashboard is missing a field they need, and it is worth asking which one.
