---
title: "KPI Dashboard for Manufacturing: The Twelve Numbers That Matter"
description: "OEE, first pass yield, on-time delivery and nine more, with the formulas, the data each one needs and the ones to drop because nobody acts on them."
category: "BI"
date: "2026-11-27"
readMinutes: 11
keywords:
  - kpi dashboard for manufacturing
  - manufacturing kpis
  - oee calculation
  - production dashboard
---

A plant dashboard with forty metrics is a wall, not a tool. Nobody acts on forty numbers, and the important one gets lost in the middle.

Twelve is the practical limit. Here they are, with what each one needs and how it is calculated.

## The twelve

**1. Production vs plan.** Actual output divided by planned output, by line and by shift. The first question every morning.

**2. OEE.** Availability × performance × quality. One number that hides three, so always show the three underneath.

```text
Availability = Run Time / Planned Production Time
Performance  = (Ideal Cycle Time × Units Produced) / Run Time
Quality      = Good Units / Units Produced
OEE          = Availability × Performance × Quality
```

A plant at 60% is normal. A plant claiming 95% is measuring something else.

**3. Downtime hours and top reasons.** Hours lost, by reason code, Pareto-sorted. The chart matters more than the total.

**4. Scrap %.** Scrap quantity divided by produced quantity, by product family.

**5. Rework %.** Separately from scrap, because rework costs labour and scrap costs material. Combining them hides both.

**6. First pass yield.** Units that passed inspection first time, divided by units inspected. The honest quality number, unlike final yield after rework.

**7. On-time delivery.** Orders dispatched on or before the promised date, divided by orders due.

```text
OTD = Orders delivered on time / Orders due in period
```

**8. WIP value and WIP days.** Work in progress in value, and how long it sits. Rising WIP with flat output means a bottleneck upstream.

**9. Inventory turns.** Cost of goods sold divided by average inventory value. The working capital number.

**10. Labour productivity.** Output units per labour hour, by line. Only useful with a stable product mix; say so on the page.

**11. Energy or utility cost per unit.** The number that finds a leaking compressor before the bill does.

**12. Maintenance compliance.** Scheduled maintenance completed on time, plus mean time between failures for critical assets.

## What to drop

- **Attendance percentage.** HR data, not a production KPI.
- **Number of accidents as a target.** Report incidents, never gamify them.
- **Machine utilisation.** High utilisation on the wrong machine is expensive, not good.
- **Any metric without an owner.** If no one is accountable, it is decoration.

## Layout

Top row, four cards: production vs plan, OEE, OTD, scrap %.

Second row, two charts: downtime Pareto, and output by day for the last thirty days with the plan line.

Third section, an exception table: orders at risk of missing their date, machines below availability threshold, items with yield under target.

One page. If it needs scrolling on a shop-floor screen, it is too big.

## The data you need

Most of the twelve come from four sources:

- **Production confirmation** from the ERP, per order per operation: quantity, start, end, scrap.
- **Downtime log**, per machine, with reason codes. This is the one most plants do not have, and it is the highest-value thing to add.
- **Dispatch and invoice data** for OTD.
- **Stock and cost** for WIP and turns.

If the downtime log is a paper sheet, start there. A dashboard built on three of these and guessing at the fourth is worse than three honest metrics.

## The DAX patterns

Production vs plan:

```dax
Output vs Plan % = DIVIDE ( [Good Units], [Planned Units] )
```

Downtime hours:

```dax
Downtime Hours = SUM ( FactDowntime[Minutes] ) / 60
```

OEE as a measure, composed from parts so each can be shown:

```dax
OEE =
VAR Availability = DIVIDE ( [Run Time], [Planned Time] )
VAR Performance  = DIVIDE ( [Ideal Cycle] * [Units], [Run Time] )
VAR Quality      = DIVIDE ( [Good Units], [Units] )
RETURN Availability * Performance * Quality
```

OTD:

```dax
OTD % =
DIVIDE (
    CALCULATE ( COUNTROWS ( FactOrders ), FactOrders[DispatchDate] <= FactOrders[PromisedDate] ),
    COUNTROWS ( FactOrders )
)
```

## Definitions, or the numbers will drift

Write one sentence per KPI in a definitions tab, and put it on the dashboard as a tooltip or a footnote.

"Scrap = units scrapped at any operation, divided by units started, excluding engineering trials."

Without that sentence, two shifts will report two scrap figures and the meeting becomes about the definition.

## The test of a good plant dashboard

A supervisor should be able to look at it for ten seconds and know whether to go to the line or stay at the desk.

If the answer is "I need to ask someone", the dashboard is reporting history, not operations.
