---
title: "Lot-Wise Stock Reconciliation for Fabric and Textile Traders"
description: "How to reconcile fabric stock by lot in Excel when the same design arrives in different dye lots, part lots go out for job work, and the physical count never matches the book."
category: "Trading MIS"
date: "2026-11-24"
readMinutes: 11
keywords:
  - fabric stock reconciliation excel
  - lot wise stock report
  - textile trading mis report
  - job work reconciliation
---

In fabric trading, stock is not a number. It is a set of lots, and two lots of the same design are not interchangeable. One is a shade lighter, one is 40 metres short, and the customer who ordered 500 metres wants a single lot.

That is why a stock report built on item codes alone is always wrong in a way nobody can explain.

## The unit of truth is the lot

A lot is one dye batch, one purchase document, one physical roll set. Give every lot its own row and never merge rows across lots, even when the design and colour match.

Minimum columns:

| Column | Why |
| --- | --- |
| Lot no | Unique, never reused |
| Design | Customer-facing reference |
| Colour and shade | The reason lots are not interchangeable |
| Party | Who supplied it, for claims |
| Inward date | Ageing and shade consistency |
| Inward metres | Opening balance |
| Outward metres | Sold, or sent for job work |
| Return metres | Back from job work |
| Balance metres | Calculated, never typed |

The balance column is a formula. If anyone can type into it, the report is already wrong.

## Opening, movement, closing

Book balance per lot:

```excel
=SUMIFS(Inward[Metres],Inward[Lot],A2)
-SUMIFS(Outward[Metres],Outward[Lot],A2)
+SUMIFS(Returns[Metres],Returns[Lot],A2)
```

Three tables: inward, outward, returns. Not one table with a plus-minus column, because a return that never left is a data entry error and you want to see it.

## Job work is where it breaks

Fabric sent for dyeing, printing or embroidery leaves the warehouse but is still yours. Two mistakes follow:

1. It gets booked as a sale, so stock and revenue are both overstated.
2. It never comes back in the system, so the balance keeps growing.

Model it as a location, not a transaction type. Every lot has a status: `In godown`, `At job worker`, `Sold`, `Returned`. Then:

```excel
=SUMIFS(Movement[Metres],Movement[Status],"At job worker")
```

gives you metres sitting outside your control, which is the number a trader actually needs before month end.

The reconciliation for each job worker:

```excel
=SUMIFS(Sent[Metres],Sent[Party],"<worker>")
-SUMIFS(Received[Metres],Received[Party],"<worker>")
-SUMIFS(Wastage[Metres],Wastage[Party],"<worker>")
```

Should be zero. If it is not, something is unaccounted for, and the answer is a phone call, not a spreadsheet formula.

## Wastage is a line, not a rounding

Dyeing and processing lose metres. If you do not record wastage, every job work reconciliation fails by a few percent and nobody trusts the report.

Record it explicitly on the return document: sent 500, received 478, wastage 22. Twenty-two metres at a known value is a claim against the job worker. Hidden in a rounding, it is a cost you absorb silently.

## Matching the physical count

Physical count per lot, once a month, with a witness:

1. Print the book balance by lot, sorted by godown rack.
2. Count, writing the physical figure in the next column.
3. Difference column: `=Physical-Book`.
4. Investigate anything beyond the tolerance you set, usually 0.5 percent on metres.

Do not adjust the book to the physical count until you know why they differ. Adjusting first hides the cause, and the same gap returns next month.

## The exception report

The page management reads is not the stock list. It is the exceptions:

- Lots with negative balance. Always an error, never a real oversell.
- Lots with no movement in 90 days, with value shown, so dead stock has a number.
- Job work pending beyond 30 days, by party.
- Lots where physical and book differ by more than tolerance.

Four small tables beat a 4,000-row stock sheet nobody opens.

## Why this earns its keep

A textile trading business usually has working capital tied up in stock and receivables. Two numbers matter more than revenue: dead stock value and pending job work value. Both are invisible in an item-level report and both come out of a lot-level one.

The report is not complicated. It is only tedious, and it is the reason traders keep asking for someone who has actually done it.

## Start here

If you have no lot-level data today, start with one design family rather than the whole warehouse. Get the model right on 200 rows, then expand. A perfect structure applied to nothing is worth less than a rough one that already answers the question.
