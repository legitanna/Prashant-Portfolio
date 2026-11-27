---
title: "MIS Report Format in Excel for Accounts and Finance"
description: "The tab structure, columns and formulas for a finance MIS pack: P&L summary, receivables, payables, cash position and budget variance, in one workbook."
category: "MIS"
date: "2026-11-27"
readMinutes: 10
keywords:
  - mis report format in excel
  - mis report format for accounts and finance
  - mis report formula in excel
  - finance mis report
---

Finance teams do not need a dashboard. They need a pack: five statements that reconcile to the ledger, produced on the same date every month, in a shape the auditor recognises.

This is that format.

## The workbook

Six tabs, in this order:

| Tab | Contents |
| --- | --- |
| `Data` | Trial balance or ledger export, untouched |
| `Mapping` | Ledger head to MIS group |
| `P&L` | Revenue, cost, margin by group |
| `BS_Working` | Receivables, payables, cash, stock |
| `Variance` | Actual vs budget vs last month |
| `Notes` | Definitions, cut-off date, preparer |

The `Mapping` tab is the one nobody builds and everybody needs. It holds two columns: ledger head, MIS group. Every report reads it, so reclassifying a ledger head is a one-cell change rather than six.

## Data, and the one rule

Paste the export as-is. Do not delete rows, do not subtotal, do not sort by hand.

The rule: every figure in the pack must be a formula pointing at `Data`, through `Mapping`. If a number is typed, it is a claim, not a report.

## P&L by group

Structure:

| Group | Actual | Budget | Last month | Variance % |
| --- | --- | --- | --- | --- |

The lookup that does the work:

```excel
=SUMIFS(Data[Amount], Data[LedgerHead], XLOOKUP($A5, Mapping[Group], Mapping[Heads], "", 0, 1))
```

In practice it is easier with a helper column in `Data`:

```excel
=XLOOKUP([@LedgerHead], Mapping[LedgerHead], Mapping[Group], "Unmapped")
```

Then the report is one `SUMIFS` per group:

```excel
=SUMIFS(Data[Amount], Data[MISGroup], $A5)
```

Check the unmapped total. Anything sitting in "Unmapped" is a group you have not classified, and it is usually material.

## Receivables and payables

One row per open invoice, never one row per party. Ageing buckets on the **due date**, not the invoice date:

```excel
=IF(DueDate="",0,MAX(0,TODAY()-DueDate))
```

```excel
=IF(H2=0,"Current",IF(H2<=30,"1-30",IF(H2<=60,"31-60",IF(H2<=90,"61-90","90+"))))
```

Summary matrix:

```excel
=SUMIFS(Ageing[Balance], Ageing[Party], $A4, Ageing[Bucket], B$3)
```

Add a provision column using your policy percentages, kept in a small table so the policy is in one place.

## Cash position

Do not build this from the P&L. Cash comes from the bank statements.

| Account | Opening | Receipts | Payments | Closing | Reconciled |
| --- | --- | --- | --- | --- | --- |

Closing is `Opening + Receipts - Payments`. The `Reconciled` column is yes or no, and a "no" needs a reason in `Notes`. A cash report that does not tie to the bank is worse than no report.

## Variance, the page that gets read

Four columns per line: actual, budget, variance value, variance percent.

```excel
=C5-D5
```

```excel
=IFERROR(C5/D5-1,"")
```

Sort by absolute variance, descending. The top ten lines are the report; the rest is an appendix. If you send a hundred lines, the reader takes the first ten anyway, and they may not be the right ten.

## The three checks before distribution

1. **Trial balance ties.** Debits equal credits, and the net movement in `Data` equals the movement in the ledger for the period.
2. **Sub-ledgers tie.** Receivables total in the pack equals the receivables control account, to the rupee. If it does not, an invoice has no party or a credit note is unapplied.
3. **Last month's closing equals this month's opening.** Any difference is a back-dated entry, and it should be known, not discovered.

Put the three numbers in `Notes` with the date and time.

## Dates and cut-off

One cell holds the period end. Every formula references it.

```excel
=SUMIFS(Data[Amount], Data[Date], ">="&$B$2, Data[Date], "<="&$C$2)
```

Write the cut-off rule in `Notes`: invoices dated up to the period end, goods received notes up to the period end, everything else next month. Without that sentence, the pack changes definition every time a different person prepares it.

## What to automate first

The mapping lookup, the ageing buckets and the variance sort. Those three take the most time by hand and are the most error-prone.

Automate the P&L formatting last. Formatting is fast; reconciliation is not.

## One thing to avoid

Do not send the workbook to ten people and ask for changes. Send a PDF, keep the workbook with two named editors, and collect comments in one place. A finance MIS with nine versions is the problem it was meant to solve.
