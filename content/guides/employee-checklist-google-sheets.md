---
title: "An Employee Checklist in Google Sheets With a Live Completion Dashboard"
description: "Assign recurring work to each person, let staff mark it done themselves, and publish a read-only completion view. The structure, the Apps Script and the permissions."
category: "Systems"
date: "2026-11-24"
readMinutes: 11
keywords:
  - employee checklist google sheets
  - task tracker google sheets
  - daily checklist template
  - looker studio dashboard
  - apps script onEdit
---

Paper checklists fail because nobody reads them. A shared spreadsheet fails differently: everybody can edit everything, so nobody trusts it.

The version that works has three parts. A task master only managers edit. A log that staff write to. A dashboard that is read-only and lives outside the sheet.

## Task master

One row per recurring task. Not per day, per task.

| Column | Example |
| --- | --- |
| Task ID | CHK-014 |
| Task | Reconcile petty cash |
| Owner | R. Mehta |
| Frequency | Daily, Weekly, Monthly |
| Weekday | 2 (Tuesday), only for weekly |
| Due by | 11:00 |
| Active | TRUE |

Two rules save months of mess: the task ID is permanent, and deactivating a task sets `Active` to false rather than deleting the row. History stays intact.

## The log

One row per task per day. This tab only grows.

| Column | Meaning |
| --- | --- |
| Date | The day the task is due |
| Task ID | From the master |
| Owner | Copied at generation time |
| Done | Checkbox |
| Completed at | Timestamp, written by script |
| Completed by | Email, written by script |
| Note | Optional, for exceptions |

## Generating today's rows

Two ways. A formula is fine for a small team, a script is better past about fifteen tasks.

Formula approach, in a separate tab, filled down for the number of active tasks:

```excel
=IFERROR(ARRAYFORMULA(FILTER(Tasks!A:E, Tasks!G:G=TRUE,
  (Tasks!E:E="Daily")+
  ((Tasks!E:E="Weekly")*(Tasks!F:F=WEEKDAY(TODAY(),2)))+
  ((Tasks!E:E="Monthly")*(DAY(TODAY())=1)))),"")
```

Daily tasks every day, weekly tasks on their weekday, monthly tasks on the first. Bind it to a copy-paste or an `onOpen` refresh rather than leaving `TODAY()` recalculating in thousands of cells.

Script approach, which writes rows into the log so the history is immutable:

```javascript
function generateToday() {
  const ss = SpreadsheetApp.getActive();
  const tasks = ss.getSheetByName('Tasks').getDataRange().getValues();
  const log = ss.getSheetByName('Log');
  const tz = ss.getSpreadsheetTimeZone();
  const now = new Date();
  const today = Utilities.formatDate(now, tz, 'yyyy-MM-dd');
  const weekday = Number(Utilities.formatDate(now, tz, 'u')); // 1=Mon
  const dom = Number(Utilities.formatDate(now, tz, 'd'));

  const existing = new Set(
    log.getRange(2, 1, Math.max(log.getLastRow() - 1, 1), 1)
      .getValues().flat().map(String)
  );

  const rows = [];
  tasks.slice(1).forEach(([id, name, owner, freq, wd, due, active]) => {
    if (String(active).toUpperCase() !== 'TRUE') return;
    const include =
      freq === 'Daily' ||
      (freq === 'Weekly' && Number(wd) === weekday) ||
      (freq === 'Monthly' && dom === 1);
    if (!include) return;
    const key = `${today}|${id}`;
    if (existing.has(key)) return; // idempotent
    rows.push([key, today, id, name, owner, false, '', '', '']);
  });

  if (rows.length) log.getRange(log.getLastRow() + 1, 1, rows.length, 9).setValues(rows);
}
```

The `key` column is `date|taskID`. It is what stops the trigger firing twice and doubling everyone's checklist, which is the bug that kills trust in the first week.

Set a time-driven trigger for 00:10, in the spreadsheet's timezone, not the script editor's.

## Marking done

A checkbox is the input. The script is the audit.

```javascript
function onEdit(e) {
  const sh = e.range.getSheet();
  if (sh.getName() !== 'Log' || e.range.getColumn() !== 6) return;
  const row = e.range.getRow();
  const done = e.value === 'TRUE';
  sh.getRange(row, 7).setValue(done ? new Date() : '');
  sh.getRange(row, 8).setValue(done ? Session.getActiveUser().getEmail() : '');
}
```

Now the completion time is not something a person can type. That single change is the difference between a checklist and a claim.

Only the person assigned should be able to tick it. A simple guard: compare the owner column against the active user's email, and ignore the edit if they differ. It will not stop a determined colleague, but it stops accidents.

## The dashboard

Put it in Looker Studio, connected to the sheet, shared as view-only.

Four things:

1. Completion rate, last 7 days: done divided by scheduled, overall and by person.
2. Tasks overdue today, by owner, as a table.
3. Completion by task: which recurring task is chronically missed. That is usually a process problem, not a discipline problem.
4. A 30-day trend line, so a bad week is visible against normal.

Completion rate needs scheduled, not just done. Count rows where `Date` is in range, and divide by the count of rows marked done. If you only count done rows, 3 out of 40 and 3 out of 4 look identical.

## Permissions, which everyone skips

- `Tasks`: managers only, protect the range.
- `Log`: staff can edit the Done column and the note, nothing else. Protect the rest.
- Dashboard: viewers, no download, no edit.
- Admins: two people, not one, so the system survives a holiday.

## What usually goes wrong

Tasks get marked done in a batch at 6pm. The dashboard shows 100% and tells you nothing. Look at the timestamps by hour, and if everything lands in one block, the checklist is theatre.

Weekly tasks accumulate and get cleared by one person for everyone. The `Completed by` column exposes this in a week.

The list grows to sixty tasks. Nobody reads sixty tasks. Cap it at what a person can genuinely do in a day, usually eight to twelve, and move the rest to weekly.
