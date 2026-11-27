---
title: "Stock Movement Report in Excel: Inward, Outward and Closing"
description: "A movement ledger that explains the difference between opening and closing stock, catches the errors a balance-only report hides, and reconciles to a physical count."
category: "Inventory"
date: "2026-11-27"
readMinutes: 9
keywords:
  - stock movement report in excel
  - stock report format in excel
  - inward outward stock register
  - closing stock report
---

A stock report that shows only closing balances cannot answer the question finance asks: why did stock fall by 40,000 this month?

A movement report can. Opening, inward, outward, adjustment, closing. Five columns, and every rupee is explained.

## The ledger, not the summary

Build one table of movements. One row per transaction.

| Date | Item | Type | Qty | Rate | Value | Reference | Party |
| --- | --- | --- | --- | --- | --- | --- | --- |

`Type` comes from a fixed list: Purchase, Sale, Return In, Return Out, Job Work Out, Job Work In, Adjustment, Transfer.

Sign convention: inward positive, outward negative. Then the balance is one formula and no one can mis-state a direction.

## Closing balance

```excel
=SUMIFS(Movements[Qty], Movements[Item], $A2, Movements[Date], "<="&$B$1)
```

Where `B1` is the report date. Change the date and the whole report moves back in time, which is how you answer "what was stock on the 15th".

Opening for a period:

```excel
=SUMIFS(Movements[Qty], Movements[Item], $A2, Movements[Date], "<"&$B$2)
```

Where `B2` is the period start. Opening plus movements in the period equals closing, and that identity is the check.

## The movement summary

The page management reads:

| Item | Opening | Inward | Outward | Adjustment | Closing | Value |
| --- | --- | --- | --- | --- | --- | --- |

```excel
=SUMIFS(Movements[Qty], Movements[Item], $A3, Movements[Type], "Purchase", Movements[Date], ">="&$B$2, Movements[Date], "<="&$C$2)
```

Repeat for each type, or use a single `SUMIFS` with a type group column and a pivot.

Add a check column:

```excel
=IF(Opening+Inward+Outward+Adjustment=Closing,"OK","Check")
```

Every row should say OK. A row that does not has a movement outside the date range, which usually means a back-dated entry.

## Value it, do not just count it

Quantity is operations. Value is finance. Both, per row.

Movement value is `Qty * Rate`. But which rate? Three defensible answers:

- **Weighted average**: recompute after each inward. Correct, slow in Excel.
- **FIFO layers**: correct for perishables and lots, heavy to build by hand.
- **Standard cost**: simple, and fine if the business reviews standards annually.

Pick one and write it in the notes. A report with two valuation methods gives two closing stock figures and an argument.

For a simple version, use the latest purchase rate per item:

```excel
=XLOOKUP($A3, Items[Item], Items[LastRate], 0)
```

and state plainly that closing stock is valued at last purchase rate, not weighted average.

## What the report must surface

Four exception blocks, and they matter more than the summary:

1. **Negative closing.** Always an error, usually an outward entry recorded before its inward.
2. **No movement in 90 days.** Dead stock with a value attached.
3. **Movement without reference.** An adjustment with no document number is a hole.
4. **Job work out, never returned.** Material that left and did not come back.

```excel
=FILTER(Movements[Item], Movements[Closing]<0)
```

## Reconcile to the count

Monthly, per item or per rack:

| Item | Book | Physical | Difference | Value | Reason |
| --- | --- | --- | --- | --- | --- |

Post the difference as an Adjustment movement with a reason code. Never overwrite the book quantity.

The reason codes matter more than the adjustment: "short in transit", "damaged", "cutting loss". Forty lines of "adjustment" tell you nothing; ten lines of "cutting loss" tell you where to look.

## Refresh routine

Once a week, in this order:

1. Paste or refresh movements.
2. Check the OK column on every summary row.
3. Check the negative list.
4. Check job work outstanding.
5. Compare closing stock value with the ledger control account. Explain any gap before someone else asks.

## When Excel stops working

At about 50,000 movement rows, `SUMIFS` over whole columns starts to lag and the file takes seconds to open.

At that point, move the ledger to a database or a Google Sheet with `QUERY`, and keep Excel for the report page. The structure does not change: it is still opening, inward, outward, closing.
