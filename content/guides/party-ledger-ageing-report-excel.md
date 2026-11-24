---
title: "Build a Party Ledger Ageing Report in Excel in Under an Hour"
description: "A receivables ageing report for trading businesses: 0-30, 31-60, 61-90 and 90+ buckets, the formulas, and the follow-up list that actually gets money in."
category: "Trading MIS"
date: "2026-11-24"
readMinutes: 8
keywords:
  - accounts receivable ageing excel
  - party ledger report format
  - debtor ageing formula
  - outstanding report excel
---

An ageing report that only shows totals is decoration. The version that gets money in has four buckets, one person's name against each party, and a call date.

## The data

One row per open invoice, not per party. This matters: a party with three invoices in three buckets cannot be summarised into one row without losing the ageing.

| Column | Example |
| --- | --- |
| Party | Meridian Textiles |
| Invoice no | INV-2291 |
| Invoice date | 12-Aug-2026 |
| Due date | 11-Sep-2026 |
| Amount | 184,500 |
| Received | 100,000 |
| Balance | 84,500 |
| Owner | A. Patel |

Balance is `=E2-F2`, a formula. Never type it.

## Bucket on the due date, not the invoice date

The bucket that matters is how late the money is, and lateness starts at the due date. Ageing from the invoice date with 30-day terms understates every debt by a month and makes the whole report look better than it is.

Days overdue:

```excel
=IF(G2="",0,MAX(0,TODAY()-G2))
```

Bucket:

```excel
=IF(H2=0,"Current",IF(H2<=30,"1-30",IF(H2<=60,"31-60",IF(H2<=90,"61-90","90+"))))
```

## The summary table

Rows are parties, columns are buckets. One formula fills the grid:

```excel
=SUMIFS(Ageing[Balance],Ageing[Party],$A4,Ageing[Bucket],B$3)
```

with `$A4` locking the party column and `B$3` locking the bucket header. Drag across and down, and the matrix is done.

Add a total row and a total column. The total column is the number to argue about in the Monday meeting.

## Provisioning

Finance will need a doubtful-debt provision. Common pattern, adjust to your policy:

```excel
=B4*0 + C4*0.02 + D4*0.1 + E4*0.25 + F4*0.5
```

Current and 1-30 at zero, 31-60 at 2 percent, 61-90 at 10, and older at 25 or 50. Write the percentages in a small table and reference them, so the policy lives in one place and the formula never gets edited by hand.

## The follow-up list

This is the part that earns its keep. Filter to `90+`, sort by balance descending, and give each row an owner and a next action with a date.

- Call, promise to pay by a date
- Cheque or transfer received, awaiting clearance
- Disputed, reason recorded
- Legal or agency

The report is reviewed weekly. Anything in the 90+ bucket without a next action is a management failure, not an accounting one.

## Credit control that prevents the problem

Add two columns to the party master: credit limit and credit days. Then this flag, on new orders:

```excel
=IF(SUMIFS(Ageing[Balance],Ageing[Party],A2)>VLOOKUP(A2,Parties,3,0),"Over limit","OK")
```

Holding an order because of this flag is cheaper than chasing the same party for six months.

## Reconciliation before you send

1. Total balance equals the receivables figure in the ledger. If not, some invoices have no party, or some credits were dropped.
2. No negative balances in the report. A negative means an unapplied receipt or a credit note sitting in the wrong place.
3. Every invoice appears once. Duplicate invoice numbers inflate the total and are easy to introduce with a copy-paste update.
4. Compare with last month. A party that doubled without a matching sale is usually a data error.

## Refresh routine

Weekly: refresh the data, check the four items above, update the follow-up list, send.

Monthly: add the provision, review limits, and send the summary to the person who owns collections, not to everyone. A report with no named owner gets read and ignored.

## One improvement worth making

Put the ageing on a pivot instead of fixed formulas once the party list passes about fifty names. New parties then appear without editing formulas, and the monthly comparison is a matter of copying two pivot values rather than rebuilding a matrix.
