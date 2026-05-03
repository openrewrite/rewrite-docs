---
title: Visual sandbox
description: Reference page for reviewing the visual refresh.
unlisted: true
slug: /sandbox
---

# Visual sandbox

Reference page rendering one example of every pattern from the visual refresh ([issue #492](https://github.com/openrewrite/rewrite-docs/issues/492)). Used for designer/PM review of staged PRs.

## Typography

# Heading 1 — page title scale

## Heading 2 — section

### Heading 3 — subsection

#### Heading 4

Body paragraph using Inter at the docs base size. Includes an [inline link](/sandbox) and `inline code`. Set against the off-white background that runs across the site.

## Admonitions

:::info
For a better understanding of the permissions requested, please review our [GitHub permissions reference documentation](/sandbox).
:::

:::tip
Run `mod recipe debug` first if you want to see the LST output before applying any change.
:::

:::note
Running a recipe _does not_ automatically update the code in the selected repositories. You will be able to view the results and decide what you want to commit.
:::

:::warning
Depending on what organization you ran the recipe against, you may not have access to commit code or create a PR. Please don't try and open PRs against random projects that aren't your own.
:::

:::caution
If you are still on the legacy Neon development database, do not share your `DATABASE_URL`. It contains your database credentials.
:::

:::danger
Force-pushing to `master` rewrites history for every collaborator. Coordinate before doing this.
:::

## Markdown link-list cards

Plain markdown bulleted lists where every item is just a link render as cards. This pattern shows up on recipe README pages.

### Categories

- [FF4j](/sandbox)
- [LaunchDarkly](/sandbox)
- [OpenFeature](/sandbox)
- [Quarkus](/sandbox)

### Recipes

- [Remove a String feature flag for feature key](/sandbox)
- [Remove a boolean feature flag for feature key](/sandbox)
- [Remove a double feature flag for feature key](/sandbox)

## DocCard layout

Generated index page cards (e.g. `/changelog`, `/recipes`, `/authoring-recipes`) are full-width and stacked vertically. See [Changelog](/changelog) for a live example.

## Sidebar nav

The left-hand sidebar uses bold dark text for collapsible categories, blue for the active expanded section, and regular weight for child items.
