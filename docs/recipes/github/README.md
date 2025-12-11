---
description: GitHub Actions OpenRewrite recipes.
---

# GitHub Actions

_Recipes to perform [GitHub Actions](https://docs.github.com/en/actions) hygiene and migration tasks._

## Categories

* [Gradle](/recipes/github/gradle)
* [Security](/recipes/github/security)

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Migrate `astral-sh/setup-uv` from v6 to v7](./migratesetupuvv6tov7.md)
* [Migrate from tibdex/github-app-token to actions/create-github-app-token](./migratetibdexgithubapptokentoactions.md)
* [Replace OSSRH secrets with Sonatype secrets](./replaceossrhsecretswithsonatype.md)

## Recipes

* [Add cooldown periods to Dependabot configuration](./adddependabotcooldown.md)
* [Add cron workflow trigger](./addcrontrigger.md)
* [Add manual workflow trigger](./addmanualtrigger.md)
* [Cancel in-progress workflow when it is triggered again](./autocancelinprogressworkflow.md)
* [Change GitHub Action](./changeaction.md)
* [Change GitHub Action version](./changeactionversion.md)
* [Change dependabot schedule interval](./changedependabotscheduleinterval.md)
* [Check for github-actions updates daily](./dependabotcheckforgithubactionsupdatesdaily.md)
* [Check for github-actions updates weekly](./dependabotcheckforgithubactionsupdatesweekly.md)
* [Find GitHub action secret references](./findgithubactionsecretreferences.md)
* [Find jobs missing timeout](./findmissingtimeout.md)
* [Is GitHub Actions Workflow](./isgithubactionsworkflow.md)
* [Remove all cron triggers](./removeallcrontriggers.md)
* [Remove unused workflow dispatch inputs](./removeunusedworkflowdispatchinputs.md)
* [Remove workflow input argument](./removeworkflowinputargument.md)
* [Replace GitHub Action secret names](./replacesecrets.md)
* [Replace `actions/setup-python` with `astral-sh/setup-uv`](./setuppythontouv.md)
* [Replace runners for a job](./replacerunners.md)
* [Replace secret key names in GitHub Actions](./replacesecretkeys.md)
* [Setup Java dependency caching](./setupjavacaching.md)
* [Upgrade `actions/setup-java` `java-version`](./setupjavaupgradejavaversion.md)
* [Upgrade `actions/setup-node` `node-version`](./setupnodeupgradenodeversion.md)
* [Upgrade `slackapi/slack-github-action`](./upgradeslacknotificationversion2.md)
* [Use `actions/setup-java` IBM `semeru` distribution](./setupjavaadoptopenj9tosemeru.md)
* [Use `actions/setup-java` `temurin` distribution](./setupjavaadoptopenjdktotemurin.md)
* [Use `actions/setup-java` `temurin` distribution as they are cached in hosted runners](./prefertemurindistributions.md)
* [Use `secrets: inherit` if possible](./prefersecretsinheritworkflow.md)


