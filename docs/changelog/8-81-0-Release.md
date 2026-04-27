---
description: What's changed in OpenRewrite version 8.81.0.
---

# 8.81.0 release (2026-04-27)

_Total recipe count: 4335_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.57.16`
* Staging CLI version: `v3.57.16`

## New Recipes

* [org.openrewrite.gitlab.MigrateTemplateToComponent](https://docs.openrewrite.org/recipes/gitlab/migratetemplatetocomponent): Replace a GitLab `template:` include with a `component:` include, as recommended by GitLab's CI/CD Catalog migration guides. 
* [org.openrewrite.gitlab.MigrateTerraformTemplateToOpenTofuComponent](https://docs.openrewrite.org/recipes/gitlab/migrateterraformtemplatetoopentofucomponent): Replace the deprecated `Terraform/Base.latest.gitlab-ci.yml` template include with the OpenTofu CI/CD component, per the GitLab catalog migration guide. 
* [org.openrewrite.java.migrate.util.UsePredicateNot](https://docs.openrewrite.org/recipes/java/migrate/util/usepredicatenot): Replace `((Predicate<T>) lambdaOrMethodRef).negate()` with `Predicate.not(lambdaOrMethodRef)` as of Java 11. 

