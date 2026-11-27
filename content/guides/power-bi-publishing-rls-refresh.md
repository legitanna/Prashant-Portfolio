---
title: "Publishing Power BI: Workspaces, Row-Level Security and Refresh"
description: "From a working file to a report other people can use: sharing correctly, restricting rows by login, scheduling refresh, and the failures that show up in week two."
category: "Power BI"
date: "2026-11-27"
readMinutes: 10
keywords:
  - power bi publish report
  - power bi workspace
  - row level security power bi
  - scheduled refresh power bi
---

A report on your laptop is not a report. Publishing is where a file becomes a service, and it is where most of the support questions start.

## Workspace, not "my workspace"

Publish to a shared workspace. A personal workspace cannot be shared properly, its content disappears when the account is removed, and it is the single most common cause of a report nobody else can open.

One workspace per business area, not per person. `Finance Reporting`, `Operations`, `Sales`. Add people as Member or Contributor, not Admin.

For distribution, publish an **app** from the workspace. Users get a clean list of reports without the editing surface, and you control what is published and when.

## Licences, which decide everything

Report authors need Power BI Pro.

Report viewers also need Pro, unless the content sits in Premium capacity or Fabric capacity, where free users can view.

That is the line item that surprises finance: five viewers is five licences, not one. Decide before you build, not after.

## Row-level security

Row-level security filters what each viewer sees, without building a report per region.

**1. Add a role** in Desktop: Modelling, Manage roles, create `Region Manager`.

**2. Write the filter**, on the dimension you want to restrict:

```dax
[UserEmail] = USERPRINCIPALNAME ()
```

Where `UserEmail` is a column in a small mapping table: email, region. Relate it to the region dimension.

A more forgiving version, allowing one person several regions:

```dax
CONTAINSSTRING ( [Regions], USERPRINCIPALNAME () )
```

with `Regions` holding `a@x.com|b@x.com`.

**3. Test it**: Modelling, View as, tick the role, and check the numbers. Do this with two real accounts, not one.

**4. Publish**, then in the service: the dataset, Security, add members to the role.

Two warnings. Roles on the dataset do not protect a report built on a different dataset. And an admin or workspace Member can often see everything anyway, so test with a Viewer account.

## Scheduled refresh

Cloud sources such as SQL Server on Azure, SharePoint or Google Sheets need only credentials. On-premises SQL Server needs a **data gateway** installed on a machine that stays on, with the same Windows account used consistently.

Set the schedule after the nightly load. Pro allows eight refreshes a day; Premium Per User and Premium allow more. If you need more than that, the answer is usually a better model, not more refreshes.

Then do the unglamorous part:

- Turn on **failure notifications** for yourself.
- Check Refresh history weekly for the first month.
- Store credentials under a service account, not a person's login. A password change should not stop the month-end report.

Incremental refresh needs Premium or PPU. On Pro, a large fact table means designing for the refresh window instead: fewer columns, aggregated tables, or a database that does the heavy work in a view.

## The failures that appear in week two

**"It works for me."** The viewer has no licence, or the app was not updated after you republished. Republishing a report does not update the app; you must update the app.

**Blank visuals for some users.** RLS is filtering them out, usually because their email in the mapping table is the personal one, not the work one. `USERPRINCIPALNAME()` returns the login, which is not always the email people quote.

**Refresh failed at 2am.** A renamed column, a privacy-level conflict, or an expired credential. The refresh history names the table, which is usually enough.

**Numbers changed without anyone touching the report.** The source changed. This is the argument for a view layer: a column rename breaks one view, loudly, rather than six reports quietly.

## A short checklist before you call it done

- Published to a shared workspace, not a personal one.
- App published, with the right audience.
- Every viewer has a licence, confirmed, not assumed.
- RLS tested with a real Viewer account.
- Refresh scheduled after the load, with failure alerts on.
- Credentials on a service account.
- One page of documentation: source, refresh time, owner, definition of the main measure.

That last item is what stops the report becoming folklore.
