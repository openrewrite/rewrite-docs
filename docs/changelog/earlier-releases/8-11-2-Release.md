# 8.11.2 release (2023-12-18)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Recipes

* org.openrewrite.kotlin.cleanup.RemoveTrailingComma: Remove trailing commas in variable, parameter, and class property lists. 

## Changed Recipes

* org.openrewrite.gradle.UpdateGradleWrapper was changed:
  * Old Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `repositoryUrl: { type: String, required: false }`
    * `version: { type: String, required: false }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `version: { type: String, required: false }`