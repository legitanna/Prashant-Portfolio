---
title: "What Google Workspace Actually Changes in a Small Trading Business"
description: "Beyond email: shared files instead of attachments, permissions per range, Apps Script automation and a completion dashboard. The real benefits, the real costs and where it stops."
category: "Google Workspace"
date: "2026-11-24"
readMinutes: 9
keywords:
  - google workspace for small business
  - google workspace benefits
  - google sheets vs excel business
  - workspace migration
---

A trading business does not need software. It needs one number that everyone agrees on.

Most small firms run on emailed spreadsheets: `Stock_Oct_v2_final_use this one.xlsx`. Three people have three versions, and the meeting starts with an argument about which is correct.

Workspace does not fix that by itself. It removes the reason it happens.

## What actually changes

One file, many viewers. The stock sheet stops being an attachment and becomes a link. Everyone opens the same rows. Version history shows who changed what, when, and lets you restore.

Ownership belongs to the company. Files live in a shared drive, so when a person leaves, nothing leaves with them. This is the benefit finance teams underrate most, and it is the one that costs real money when it is missing.

Permissions get granular. A manager can edit the model while a warehouse clerk edits only the inward tab, enforced by protected ranges rather than trust.

Intake becomes structured. A Google Form writes clean rows into a sheet. Inward entries, expense claims, leave requests, quality complaints: the person filling it cannot break the format, and you get a timestamp for free.

Automation without a developer. Apps Script runs inside the file. A trigger can generate today's checklist, email the morning report, or timestamp a status change. It is not a platform, but it covers the 80 percent of small-business automation that never justifies a developer.

Reporting is free. Looker Studio reads from Sheets and publishes a shareable dashboard with no licence fee. For a business that cannot justify Power BI, that is the difference between having a dashboard and not having one.

Admin exists. Two-factor enforcement, session control, sharing defaults, audit logs. Not exciting, and the first thing an auditor asks about.

## The cost, honestly

Business plans run roughly six to eight dollars per user per month depending on tier and billing, so a fifteen-person firm is around 1,300 dollars a year. Compare that with the time lost to version confusion, not with the price of a spreadsheet.

Add the real cost: migration takes a month of evenings, and there is a period where both systems run.

## Where Workspace stops

Sheets is not Excel, and pretending otherwise causes failed projects.

- Around ten million cells per spreadsheet, and a practical limit far below that for a report with many formulas.
- No Power Query, no Power Pivot, no macros. Apps Script replaces some of it, badly, at scale.
- Pivot tables are thinner than Excel's, and cannot be scheduled to refresh.
- No native scheduled export. Sending a PDF every morning needs a script or a third-party tool.
- Apps Script has execution limits: about six minutes per run, and daily quotas. A job that takes twenty minutes will fail, not run slowly.
- Offline use is unreliable for anything with formulas across tabs.

The pattern is consistent: Workspace is excellent for collaboration and intake, and weaker for heavy computation. Split accordingly. Keep transactions, checklists and approvals in Sheets. Move heavy models to a database or Power BI when they arrive.

## The migration order that works

1. Pick the three files that run the business. Not forty. Usually stock, receivables and one operations tracker.
2. Rebuild rather than upload. Uploading a decade of merged cells and macros gives you a decade of broken Sheets.
3. Move the files into a shared drive, so the company owns them.
4. Lock sharing down before inviting anyone. Default to "anyone in the organisation", external sharing off except for a named list.
5. Turn on two-factor authentication for everyone, and say why.
6. Train three habits, not twenty: open the link instead of downloading, use comments instead of WhatsApp, use version history instead of `_final_v3`.

## The test that matters

Ask one question after a month: is there still more than one version of the truth?

If yes, the tool did not fail. The process did. Someone is still keeping a private copy, usually because the shared file is slow, or because they do not trust the numbers, or because nobody told them the shared file is now the record.

Fix that before buying another tool. A dashboard on top of three competing spreadsheets is just a fourth opinion.
