---
title: "Build an IMS in Google Sheets That Survives a Stock Count"
description: "An inventory management system built on movements rather than typed balances: inward, outward, reorder points, a generated buy list and a count that reconciles."
category: "Systems"
date: "2026-11-24"
readMinutes: 10
keywords:
  - IMS
  - inventory management system
  - inventory sheet google sheets
  - reorder point formula
  - stock reconciliation
---

Most inventory sheets die at the first stock count. The balance column says 240, the godown says 218, and nobody can explain the difference because the balance was typed, not calculated.

An IMS that survives is built on movements. Balances are never entered.

## Three tabs

- `Items`: one row per item. Code, description, unit, lead time, safety stock, minimum order quantity.
- `Movements`: one row per transaction. Date, item, type, quantity signed, reference, person.
- `Balance`: derived. Never typed, never edited.

Add a fourth, `Count`, for physical counts and variance.

## Sign convention

This one decision prevents most errors. Choose it and enforce it:

- Inward: positive quantity
- Outward: negative quantity
- Adjustment: either, with a reason in the reference column

Then the balance is a single formula:

```excel
=SUMIFS(Movements!D:D,Movements!B:B,A2)
```

One `SUMIFS`, whole column, no helpers. Outward entries subtract themselves.

If instead you store all quantities positive and try to subtract outward rows with a second formula, you will eventually miscount a return or an adjustment. Signed quantities make the balance a fact rather than a calculation somebody has to remember.

## Reorder point from data, not habit

A reorder point is usage during lead time, plus a buffer.

Average daily usage, last 90 days:

```excel
=ABS(SUMIFS(Movements!D:D,Movements!B:B,A2,Movements!C:C,"Out",Movements!A:A,">="&TODAY()-90))/90
```

Reorder point:

```excel
=ROUNDUP(D2*E2+F2,0)
```

where `D2` is average daily usage, `E2` is lead time in days, `F2` is the safety stock you choose.

Suggested order:

```excel
=MAX(0,G2-ROUNDUP(B2,0))
```

Then round up to the minimum order quantity in the same row, so the buy list is usable rather than theoretical.

The point is not precision. It is that the number moves when usage moves, without anyone editing forty rows by hand.

## The buy list

```excel
=FILTER(Items!A2:H, Items!H2:H>0)
```

Filter on suggested order greater than zero, sort by value, and you have today's purchase list. Send it as a range, not as a copy. Then it is always current.

Add a `Status` column with three states, because "OK" and "reorder" hides the urgent case:

```excel
=IF(B2<=0,"Out of stock",IF(B2<=G2,"Reorder","OK"))
```

Conditional formatting on that column only. Three colours, three meanings.

## The stock count

Print or export the balance, sorted by rack, with a blank count column:

1. Physical count, with a witness for anything above a value threshold.
2. Difference: `=Count-Balance`.
3. Investigate beyond tolerance, usually half a percent.
4. Post an adjustment movement with a reason. Never overwrite the balance.

The reason codes matter more than the count. "Short in dyeing" repeated across a month tells you where the loss is. "Adjustment" forty times tells you nothing.

## Where it breaks

Performance. `SUMIFS` over a full column is fine to about 50,000 movement rows. Past that, the file takes seconds to open and the team stops using it. Archive closed years to a separate file, or move to a database.

Units. Metres and kilos in the same sheet with no unit column produces a total that adds nothing to nothing. Every item carries its unit, and any conversion is an explicit column.

Job work. Material sent out for processing is still yours. Model it as a movement to a location, not as an outward sale, or stock leaves the books while the fabric is two streets away.

## The two reports

A daily inward and outward summary: quantity and value by item group, count of documents, and the balance of the top twenty items by value.

A weekly exception list: out of stock, below reorder, no movement in 90 days, and negative balances. Negative means an outward entry with no inward behind it, which is a data problem nine times out of ten.

Small, boring, and read daily. That is what makes an inventory system trusted enough to be used.
