---
title: "Power BI Cost for Small Business: What You Actually Pay"
description: "Licence prices, viewer seats, gateway and the build time nobody quotes. A worked example for an eight-person team, and when the free route is the better answer."
category: "Power BI"
date: "2026-11-27"
readMinutes: 9
keywords:
  - power bi cost for small business
  - power bi license for small business
  - power bi pricing
  - is power bi worth it
---

Prices change, so treat the numbers here as the shape of the cost rather than a quote. Check Microsoft's pricing page before you commit. The structure, though, is stable, and it is where small businesses get surprised.

## The three licences

**Power BI Desktop.** Free. Building reports costs nothing.

**Power BI Pro.** Roughly 14 US dollars per user per month. Needed to publish, and needed by every viewer unless the content sits in premium capacity.

**Premium Per User.** Roughly 24 dollars per user per month. Adds larger models, more refreshes a day, incremental refresh and deployment pipelines.

**Capacity.** A dedicated monthly commitment, roughly from the low hundreds for small Fabric SKUs up to several thousand for larger ones. It makes viewing free for everyone, which is only sensible at volume.

Check current list prices directly. They have moved twice in recent years.

## The cost that catches people: viewers

Licences are per person, and viewers are people.

An eight-person firm where six people look at reports is eight licences if two of them also build, or six if only viewers exist.

At 14 dollars a seat:

| Seats | Monthly | Yearly |
| --- | --- | --- |
| 3 | 42 | 504 |
| 8 | 112 | 1,344 |
| 15 | 210 | 2,520 |

That is the recurring figure. Compare it to the licence cost of the tool you already pay for, not to zero.

## The one-off costs

Nobody quotes these, and they are usually larger than the licences in year one.

- **Build time.** A first properly modelled report set is two to six weeks of work, including the conversations about definitions. At a consultant's rate, that dominates.
- **A gateway machine.** Only for on-premises SQL Server. A small always-on Windows box, plus the setup.
- **Data preparation.** If the source is an application database with no view layer, someone has to build it. Budget a week.
- **Training.** Two half-days, so people stop asking you to change a filter.

## A worked example

A trading firm with eight staff, three of whom look at reports, plus the owner and an accountant. Source is Tally and Excel exports, refreshed nightly.

Licences: 5 seats at 14 dollars, 840 a year.

Build: three reports, modelled properly, one to two weeks of a contractor or your own evenings.

Ongoing: an hour a week of maintenance, and one licence to train.

Compare with the status quo: eight hours a month of someone manually assembling the same numbers. At any defensible internal rate, that is more than the licence. The tool is not the expensive part.

## When it does not pay

- **One reader.** A single-person report is a spreadsheet with a schedule, not a platform.
- **Monthly-only, few pages.** Excel with Power Query does this for nothing.
- **Unstable definitions.** If the KPI changes every quarter, you will rebuild the model every quarter.
- **No data owner.** If nobody can say where the source of truth lives, Power BI will faithfully visualise the confusion.

## The free alternatives, honestly

- **Looker Studio.** Free, connects to Sheets and BigQuery, good enough for many small firms. Weaker modelling and slower with large data.
- **Google Sheets plus Apps Script.** Free. Fine up to about 100,000 rows and a handful of reports.
- **Metabase, open source.** Free self-hosted, but you now administer a server.
- **Excel.** Already paid for, and better than most people admit.

None of these is a downgrade if the requirement is modest. The upgrade is worth paying for when many people need the same governed numbers, refreshed automatically, with permissions.

## The question to ask before buying

Not "can we afford it" but "how many hours a month does the current process cost, and who is accountable for the number".

If the answer is under four hours and one person, buy a licence for that person and skip the platform. If it is twenty hours and three people disagree on revenue, the licence is the cheap part of the fix.
