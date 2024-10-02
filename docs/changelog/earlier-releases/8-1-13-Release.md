# 8.1.13 release (2023-07-27)

## New Recipes

* [org.openrewrite.java.testing.hamcrest.FlattenAllOf](../../../recipes/java/testing/hamcrest/flattenallof): Convert Hamcrest `allOf(Matcher...)` to individual `assertThat` statements for easier migration. 
* [org.openrewrite.java.testing.hamcrest.HamcrestAnyOfToAssertJ](../../../recipes/java/testing/hamcrest/hamcrestanyoftoassertj): Migrate the `anyOf` Hamcrest Matcher to AssertJ's `satisfiesAnyOf` assertion. 
* [org.openrewrite.java.testing.hamcrest.HamcrestIsMatcherToAssertJ](../../../recipes/java/testing/hamcrest/hamcrestismatchertoassertj): Migrate Hamcrest `is(Object)` to AssertJ `Assertions.assertThat(..)`. 
* [org.openrewrite.java.testing.junit5.UseXMLUnitLegacy](../../../recipes/java/testing/junit5/usexmlunitlegacy): Migrates XMLUnit 1.x to XMLUnit legacy 2.x 
* [org.openrewrite.staticanalysis.ReplaceWeekYearWithYear](../../../recipes/staticanalysis/replaceweekyearwithyear): For most dates Week Year (YYYY) and Year (yyyy) yield the same results. However, on the last week of December and first week of January Week Year could produce unexpected results. 
* [org.openrewrite.staticanalysis.SimplifyBooleanExpression](../../../recipes/staticanalysis/simplifybooleanexpression): Checks for over-complicated boolean expressions. Finds code like `if (b == true)`, `b || true`, `!false`, etc. 
* [org.openrewrite.staticanalysis.SimplifyBooleanReturn](../../../recipes/staticanalysis/simplifybooleanreturn): Simplifies Boolean expressions by removing redundancies, e.g.: `a && true` simplifies to `a`. 
* [org.openrewrite.staticanalysis.SortedSetStreamToLinkedHashSet](../../../recipes/staticanalysis/sortedsetstreamtolinkedhashset): Correct 'set.stream().sorted().collect(Collectors.toSet())' to 'set.stream().sorted().collect(LinkedHashSet::new)'. 
* [org.openrewrite.staticanalysis.UnnecessaryParentheses](../../../recipes/staticanalysis/unnecessaryparentheses): Removes unnecessary parentheses from code where extra parentheses pairs are redundant. 

## Changed Recipes

* [org.openrewrite.gradle.ChangeDependency](../../../recipes/gradle/changedependency) was changed:
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