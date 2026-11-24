---
title: "How to Clean a Messy ERP Export Before You Report On It"
description: "A ten-step checklist for imported sales and stock exports: text numbers, duplicate rows, trailing spaces, merged cells and the reconciliation that proves the clean file is complete."
category: "Data Cleaning"
date: "2026-11-24"
readMinutes: 9
keywords:
  - clean data in excel
  - erp export to excel
  - remove duplicates excel report
  - fix numbers stored as text
---

Every report problem I have been called in to fix started as an import problem. The export looked fine, the pivot ran, and the total was wrong by four percent.

Here is the order that catches it. Run the steps in this sequence, because step three depends on step two.

## 1. Keep the original

Copy the export to a sheet named `Raw`. Never edit it. Every check below compares against it, and when someone asks in a month which number is right, this is the evidence.

## 2. Check the row count first

`CTRL+End` on the raw sheet. Compare the last row with the count your source system reports. If the system says 18,204 transactions and the sheet ends at row 18,190, you are missing fourteen before you have touched anything.

Missing rows are usually a filter applied in the export, not a broken file.

## 3. Fix numbers stored as text

Look for the little green triangle and left-aligned numbers. `SUM` returns zero on these, and `VLOOKUP` fails to match them.

Select the column, Data, Text to Columns, Finish. That converts digit text to numbers in one move. For a column with currency symbols or spaces:

```excel
=VALUE(SUBSTITUTE(SUBSTITUTE(A2,"$","")," ",""))
```

Check the total against the raw column afterwards. If the clean total is lower, some rows failed to convert and are now errors. Find them before you move on.

## 4. Fix dates

A text date like `03/11/2026` can be the third of November or the eleventh of March. If the source is a US system and your report is read in the UK, you have a silent four-month error.

Convert with:

```excel
=DATEVALUE(A2)
```

Then format as date, and check that the earliest and latest dates in the column match what you expect. If January rows show December, the locale is wrong.

## 5. Strip trailing spaces

`North` and `North ` are different keys. Pivot tables split them, and totals look short.

```excel
=TRIM(CLEAN(A2))
```

`CLEAN` removes non-printing characters that come from PDFs and old systems. `TRIM` collapses repeated spaces. Run both, in that order.

To find offenders first:

```excel
=IF(LEN(A2)<>LEN(TRIM(A2)),"space","ok")
```

## 6. Unmerge and fill down

Merged cells break sorting, filtering and Power Query. Unmerge everything, then fill the blanks:

1. Select the column.
2. Find and Select, Go To Special, Blanks.
3. Type `=` then the cell above, press `CTRL+ENTER`.

Now every row carries its own party or region name.

## 7. Find duplicates

An export that joins two tables will duplicate header rows, or duplicate transactions when a document has two lines.

```excel
=COUNTIFS($B:$B,B2,$C:$C,C2,$D:$D,D2)>1
```

That flags any row with the same document number, date and amount. Decide once whether those are legitimate split lines or true duplicates, and write the decision in your notes tab. Guessing is how stock reports drift.

## 8. Check the signs

Returns, credit notes and adjustments often arrive as negative amounts in one system and positive with a type flag in another. If a returns row is positive, revenue is overstated by twice the return value.

Check the minimum and maximum of the amount column. A negative minimum in a file that should be all positive means returns are mixed in.

## 9. Reconcile before reporting

Three totals, matched against the source system:

- Row count
- Sum of the amount column
- Count of distinct document numbers

All three must agree. If the sum matches but the count does not, you have offsetting errors, which is worse than a visible one.

## 10. Freeze the clean file

Load the result to a table, not a range. Name it. From then on, every formula reads the table and the ranges never need editing.

## Do it in Power Query instead

Steps 3 to 6 are one-time work in Power Query: change type, trim, clean, remove duplicates, fill down. Then every future export goes through the same transformation with nobody remembering the steps.

The trade-off is honest. Power Query takes longer to set up the first time and saves the work forever. Excel formulas are faster today and get redone next month.

For a monthly report, build the query. For a one-off question, do it by hand.

## The habit that matters

Never report on a file you have not reconciled. It takes four minutes and it is the difference between an analyst and a person who pastes things into Excel.
