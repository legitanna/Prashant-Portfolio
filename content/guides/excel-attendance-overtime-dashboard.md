---
title: "Excel Attendance and Overtime Dashboard That Survives Night Shifts"
description: "Build an attendance tracker with correct overtime, including formulas that handle shifts crossing midnight, missed punches and weekly thresholds."
category: "Excel Reporting"
date: "2026-11-24"
readMinutes: 10
keywords:
  - excel attendance sheet formula
  - overtime calculation excel
  - night shift hours excel
  - attendance dashboard excel
---

Attendance sheets break on the same three things: a shift that ends after midnight, a punch that was missed, and overtime that is calculated daily when the policy is weekly.

Fix those three and the rest is a pivot table.

## The data you need

One row per employee per day. Six columns, nothing else:

| Column | Example |
| --- | --- |
| Employee | R. Sharma |
| Date | 03-Nov-2026 |
| In | 22:00 |
| Out | 06:00 |
| Break minutes | 30 |
| Shift type | Night |

If your source system gives one row per punch, not per day, pivot it first. Two punches in, two out, one row out.

## Hours across midnight

The obvious formula fails on night shifts:

```excel
=(D2-C2)*24
```

For 22:00 to 06:00 that returns −16. Excel sees an earlier time minus a later one.

Use MOD:

```excel
=MOD(D2-C2,1)*24
```

MOD wraps the negative around a 24-hour clock, so the same row returns 8. It works for day shifts too, so you can use one formula everywhere.

Then deduct the break:

```excel
=MOD(D2-C2,1)*24-E2/60
```

Format the result as a number with two decimals, not as a time. Time formatting turns 8.5 hours into 08:30 and confuses everyone downstream.

## Daily overtime

If the policy pays after 8 hours in a day:

```excel
=MAX(0,I2-8)
```

`MAX(0, ...)` stops negative overtime appearing when someone works six hours. Without it, your totals quietly shrink.

## Weekly overtime

If the policy pays after 40 hours in a week, daily overtime is the wrong measure, and paying both double-counts. Pick one, and write it in the notes tab.

Weekly hours, with a week-ending date in column K:

```excel
=SUMIFS(I:I,A:A,A2,K:K,K2)
```

Weekly overtime:

```excel
=MAX(0,SUMIFS(I:I,A:A,A2,K:K,K2)-40)
```

A week-ending column is easier than ISO week numbers and reads correctly to a manager. Build it with:

```excel
=K2+7-WEEKDAY(K2,2)
```

That returns the Sunday of the week for any date, with weeks starting Monday.

## Missing punches

A blank Out cell is not zero hours. It is unknown, and it should look unknown.

Add a status column:

```excel
=IF(OR(C2="",D2=""),"Missing punch",IF(D2<C2-0.5,"Check","OK"))
```

The second test flags rows where Out is earlier than In by more than twelve hours, which almost always means a wrong date, not a night shift.

Filter for anything that is not OK before you run payroll. This one column prevents most pay disputes.

## The dashboard

Three building blocks, no chart gymnastics:

1. A pivot table on the cleaned data: rows are employees, columns are week-ending dates, values are hours.
2. A slicer on department, so a manager sees only their team.
3. Four KPI cells above the pivot: total hours, overtime hours, absence days, missing punches.

Absence count, assuming one row per scheduled day with a status column:

```excel
=COUNTIFS(Status,"Absent",Date,">="&StartDate,Date,"<="&EndDate)
```

Attendance rate is present days divided by scheduled days. Do not divide by calendar days, or every weekend counts as an absence and the number is meaningless.

## Refresh routine

Once a week:

1. Paste the new export into the data tab, or refresh the Power Query connection.
2. Check the missing-punch count. Chase those before payroll closes, not after.
3. Check total hours against the source system total.
4. Refresh the pivot, then check one employee's week by hand.

## The three mistakes

- Calculating daily and weekly overtime and paying both. Read the policy once and pick.
- Using time formatting for a duration. 8.5 hours is 8.50, not 08:30.
- Trusting the export's rounded times. If the clock records to the minute, keep the minutes until the final total, then round.

## If you run multiple shifts

Add a shift table with start, end and paid break minutes per shift type. Then look up the break instead of typing it per row:

```excel
=XLOOKUP(F2,ShiftTable[Shift],ShiftTable[BreakMinutes],"")
```

Change the policy once in the table, and every row follows. Typing 30 into four thousand rows is how attendance sheets drift out of agreement with payroll.
