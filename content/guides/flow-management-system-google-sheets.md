---
title: "What an FMS Is, and How to Build One in Google Sheets"
description: "A flow management system tracks every order through its stages so nothing sits unnoticed. The sheet structure, the ageing formulas and the rules that keep it alive."
category: "Systems"
date: "2026-11-24"
readMinutes: 10
keywords:
  - FMS
  - flow management system
  - flow management sheet
  - order tracking sheet google sheets
  - job work tracking
---

An order in a trading business passes through six to ten hands. Booking, design approval, grey procurement, dyeing, printing, quality check, packing, dispatch, invoice. Each handoff is where a day disappears.

An FMS exists to make those handoffs visible. Not the factory floor, not the accounts ledger: the gap between them, where a job sits with nobody responsible.

## What the system actually tracks

One row per order. Not per stage, not per item. One row that always knows where the order is right now.

| Column | Meaning |
| --- | --- |
| Order ID | Unique, never reused |
| Party and design | What it is, for whom |
| Qty and unit | Metres, pieces, kilos |
| Current stage | From a fixed list, never typed freehand |
| Stage in date | When it entered the current stage |
| Days in stage | Formula |
| Owner | The person responsible now |
| Commit date | Promised to the customer |
| Flag | OK, due soon, overdue |

`Days in stage` is the whole point:

```excel
=TODAY()-F2
```

An order that has been in "dyeing" for eleven days when the standard is five is a problem you can see. Without that column, it is a problem you discover when the customer calls.

## Stage ageing, not order ageing

Most trackers age the order. That is useless. A three-week-old order might have moved through four stages in two days and be waiting on one thing.

Age every stage against its own standard:

```excel
=IF(H2>VLOOKUP(E2,SLA!A:B,2,FALSE),"Overdue","OK")
```

`SLA` holds stage and allowed days: booking 1, design approval 3, job work 7, QC 1, dispatch 2.

Then the two numbers a manager needs:

```excel
=COUNTIFS(Stage,"Dyeing",Flag,"Overdue")
```

and

```excel
=SUMIFS(Qty,Stage,"Dyeing",Flag,"Overdue")
```

Count tells you how many jobs are late. Quantity tells you how much money is sitting still. The second one gets attention.

## The stage log

The main tab shows only current state. That is enough for daily work and not enough for questions like "how long does QC actually take".

Keep a second tab, `Stage Log`, that only ever receives rows: order, stage, in, out, days. Written by an `onEdit` trigger when someone changes the stage, or appended by the person moving the job.

Do not build the log by hand. It will stop after two weeks.

```javascript
function onEdit(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== 'Orders') return;
  if (e.range.getColumn() !== 5) return; // Current stage
  const row = e.range.getRow();
  const log = e.source.getSheetByName('Stage Log');
  log.appendRow([
    sheet.getRange(row, 1).getValue(),
    e.value,
    new Date(),
    Session.getActiveUser().getEmail(),
  ]);
}
```

Four columns, no maintenance. After a month you can answer "where do we lose time" with the median days per stage instead of an opinion.

## The dashboard

Three blocks, on one tab or in Looker Studio:

1. Orders by stage, this week. A simple `COUNTIFS` table.
2. Ageing buckets per stage: 0–2 days, 3–5, 6–10, over 10.
3. The stuck list:

```excel
=FILTER(Orders!A2:I, Orders!I2:I="Overdue")
```

Sorted by days in stage, descending. This list, reviewed for ten minutes every morning, is the return on the whole system.

## The rules that keep it alive

- One row per order. Never duplicate a row to show a split.
- Stage names from a dropdown, from a settings tab. Free typing produces "dyeing", "Dyeing" and "dying " and three different reports.
- One owner per stage, by name, not by department.
- Nobody edits the sheet outside the stage, owner and date columns. Everything else is protected.
- Never delete a completed order. Move it to an archive tab on dispatch, or the file slows to a crawl.

## Why FMS projects fail

Three reasons, all organisational rather than technical.

People update status in WhatsApp and the sheet becomes a second job. Fix it by making the sheet the input for the morning meeting, so the sheet is where the conversation comes from.

Nobody owns the exceptions. A list of forty overdue orders with no owner is noise. Assign the twelve oldest.

The file becomes a reporting tool for management instead of a working tool for staff. If the person doing the job does not benefit, they will not maintain it. Give them the thing they want: their own queue, today's list, and a reason to close it.
