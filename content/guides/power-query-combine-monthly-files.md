---
title: "Power Query: Combine Twelve Monthly CSV Files Into One Report"
description: "How to point one query at a folder of monthly exports, stack them into a single table, and refresh the whole year in one click, including what to do when the columns change."
category: "Power Query"
date: "2026-11-24"
readMinutes: 9
keywords:
  - combine csv files power query
  - power query folder combine
  - merge monthly reports excel
  - append multiple files excel
---

Twelve files, one report. Most people do it by opening each file, copying, pasting, and fixing the header row that lands in the middle of the data.

Power Query does the whole year in one refresh. Here is the setup, including the part nobody explains: what to do when month seven arrives with a different column.

## Before you start

Three conditions make this work:

- Every file has the same shape. Same columns, same order, or at least the same names.
- Every file sits in one folder, and only those files are in it.
- The header row is on row 1. If some files have a title row above the header, fix that first, or the query will treat the title as a column name.

Put the folder somewhere stable. A OneDrive path that syncs is fine. Do not point at a network drive that renames itself between sessions.

## Build the query

1. Excel: Data, Get Data, From File, From Folder.
2. Paste the folder path and click OK.
3. In the file list, click Transform Data, not Combine. You want to see the sample file first.
4. Power Query opens a `Sample File` query. Set the types: dates as date, amounts as decimal number, IDs as text.
5. Remove columns you never report on. Every column you remove here is one you do not have to fix twelve times.
6. Go back to the main query. Click the two arrows on the `Content` column and choose to expand the tables.

The result is one table with every row from every file.

## Keep the file name

Months matter. Add a column that carries the file name, so you can group by it later.

In the main query, before expanding Content:

```text
Add Column, Custom Column
Name: FileName
Formula: [Name]
```

After expanding, keep that column and rename it to `Source File`. If the file names look like `sales_2026-01.csv`, split on the delimiter to get a clean month value:

```text
Add Column, Custom Column
Name: Month
Formula: Date.FromText(Text.BeforeDelimiter(Text.AfterDelimiter([Source File], "_"), "."))
```

Now every row knows which month it came from, without you adding it by hand.

## What breaks in month seven

The export adds a column, or renames `Cust Name` to `Customer Name`. Power Query does one of two things, both wrong-looking and both fixable.

New column: it appears as `Column7` for older files and with real values for newer ones. The data is fine; the header is not. Rename the column in the sample file query, and the older rows will populate.

Renamed column: Power Query treats it as a brand new column. You get `Cust Name` with values for six months and `Customer Name` with values for six more, and a report that silently halves itself.

The fix is to normalise the header in the sample file query before expanding. Rename the column in the sample, then use Choose Columns to drop the duplicate. Then check one number against the source after every refresh, every month.

## The M code, if you want to read it

The generated query looks roughly like this. Open the Advanced Editor if you want to verify it:

```text
let
    Source = Folder.Files("C:\Reports\Sales"),
    KeepCsv = Table.SelectRows(Source, each [Extension] = ".csv"),
    Expanded = Table.AddColumn(KeepCsv, "Data", each Csv.Document([Content], [Delimiter = ","])),
    Combined = Table.Combine(Expanded[Data])
in
    Combined
```

`Table.Combine` is the whole trick. Everything else is headers and types.

## Set the destination

1. Close and Load To, choose Table, existing worksheet, cell A1.
2. Name the table `AllSales`.
3. Every formula downstream now reads `AllSales[Amount]` and never needs a range edit.

Monthly refresh is now: drop the new file into the folder, press Data, Refresh All. Thirty seconds, and the table has thirteen months.

## The checks that catch silent errors

A query that runs is not a query that is right. Check three things after each refresh:

1. Row count against the source. If January had 12,040 rows and the query returns 12,030, something filtered rows out.
2. Total of one numeric column against the source total. Must match exactly.
3. One spot check: pick a transaction you can find in the source file and confirm it in the combined table.

Write the row count and total into a notes tab each month. When a report looks wrong in March, you can tell in a minute whether the data or the formula changed.

## When the folder is the wrong shape

If files arrive with different column orders, use Combine Files by name rather than by position. In the sample file, click Transform Sample File, then choose to match columns by name. Column order then stops mattering.

If the files are not CSV at all but twelve separate workbooks with one sheet each, the same folder connector works. Expand to the sheet, not to the workbook.

If the data is a database export that changes columns without warning, stop fixing the query each month. Ask for a fixed export view. You cannot build a stable report on an unstable source, and every hour spent patching columns is an hour not spent on the report.
