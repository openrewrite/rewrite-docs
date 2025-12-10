---
description: What's changed in OpenRewrite version 8.1.13.
---

# 8.1.13 release (2023-07-27)

## New Recipes

* org.openrewrite.java.testing.hamcrest.FlattenAllOf: Convert Hamcrest `allOf(Matcher...)` to individual `assertThat` statements for easier migration. 
* org.openrewrite.java.testing.hamcrest.HamcrestAnyOfToAssertJ: Migrate the `anyOf` Hamcrest Matcher to AssertJ's `satisfiesAnyOf` assertion. 
* org.openrewrite.java.testing.hamcrest.HamcrestIsMatcherToAssertJ: Migrate Hamcrest `is(Object)` to AssertJ `Assertions.assertThat(..)`. 
* org.openrewrite.java.testing.junit5.UseXMLUnitLegacy: Migrates XMLUnit 1.x to XMLUnit legacy 2.x 
* org.openrewrite.staticanalysis.ReplaceWeekYearWithYear: For most dates Week Year (YYYY) and Year (yyyy) yield the same results. However, on the last week of December and first week of January Week Year could produce unexpected results. 
* org.openrewrite.staticanalysis.SimplifyBooleanExpression: Checks for over-complicated boolean expressions. Finds code like `if (b == true)`, `b || true`, `!false`, etc. 
* org.openrewrite.staticanalysis.SimplifyBooleanReturn: Simplifies Boolean expressions by removing redundancies, e.g.: `a && true` simplifies to `a`. 
* org.openrewrite.staticanalysis.SortedSetStreamToLinkedHashSet: Correct 'set.stream().sorted().collect(Collectors.toSet())' to 'set.stream().sorted().collect(LinkedHashSet::new)'. 
* org.openrewrite.staticanalysis.UnnecessaryParentheses: Removes unnecessary parentheses from code where extra parentheses pairs are redundant. 

## Changed Recipes

* org.openrewrite.gradle.ChangeDependency was changed:
  * Old Options:
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`