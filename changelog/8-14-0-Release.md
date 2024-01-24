# 8.14.0 release (2024-01-24)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Recipes

* [org.openrewrite.java.dependencies.RelocatedDependencyCheck](https://docs.openrewrite.org/recipes/java/dependencies/relocateddependencycheck): Find Maven and Gradle dependencies and Maven plugins that have relocated to a new `groupId` or `artifactId`. Relocation information comes from the [oga-maven-plugin](https://github.com/jonathanlermitage/oga-maven-plugin/) maintained by Jonathan Lermitage, Filipe Roque and others.

This recipe makes no changes to any source file by default. Add `changeDependencies=true` to change dependencies, but note that you might need to run additional recipes to update imports and adopt other breaking changes. 
* [org.openrewrite.java.migrate.MXBeanRule](https://docs.openrewrite.org/recipes/java/migrate/mxbeanrule): Sets visibility of MBean and MXBean interfaces to public. 
* [org.openrewrite.java.recipes.RecipeEqualsAndHashCodeCallSuper](https://docs.openrewrite.org/recipes/java/recipes/recipeequalsandhashcodecallsuper): Recipes are value objects, so should use `@EqualsAndHashCode(callSuper = false)`. While in most cases recipes do not extend other classes and so the option is moot, as a matter of stylistic consistency and to enforce the idea that recipes are value objects, this value should be set to `false`. 

## Removed Recipes

* **org.openrewrite.java.migrate.MXBeanNonPublic**: Sets visibility of MBean and MXBean interfaces to public. 
* **org.openrewrite.java.recipes.MigrateJavaTemplateToRewrite8**: Migrate `JavaTemplate` to accommodate Rewrite 8, due to wide open-ended usage of JavaTemplate, this recipe just apply most of common changes to pass compile and will leave some comments to require human's review. 
* **org.openrewrite.java.recipes.MigrateMarkersSearchResult**: Methods of `org.openrewrite.marker.Markers#SearchResult(..)` are deprecated and removed in rewrite 8, use `SearchResult.found()` instead. 
* **org.openrewrite.java.recipes.MigrateRecipeToRewrite8**: Rewrite Recipe Migration to version 8. While most parts can be automatically migrated, there are some complex and open-ended scenarios that require manual attention. In those cases, this recipe will add a comment to the code and request a human to review and handle it manually. 
* **org.openrewrite.java.recipes.MigrateTestToRewrite8**: Since the method `Recipe::doNext(..)` is deprecated, For unit test, change usage like `RecipeSpec.recipe(X.doNext(Y))` to `RecipeSpec.recipes(X, Y)`. 
* **org.openrewrite.java.recipes.RemoveApplicabilityTestFromYamlRecipe**: Removes any-source applicability tests from YAML recipes, as the are no longer supported in Rewrite 8 and migrates single-source applicability tests to preconditions. 
* **org.openrewrite.java.recipes.UpdateMovedPackageClassName**: When a class moved from package A to B, update the fully qualified className accordingly. 
* **org.openrewrite.java.recipes.UpdateMovedRecipe**: If a recipe moved between packages, update the code reference places, declarative recipes, and `activeRecipes` in pom.xml. 
* **org.openrewrite.java.recipes.UpdateMovedRecipeXml**: Update moved package recipe in pom.xml. 
* **org.openrewrite.java.recipes.UpdateMovedRecipeYaml**: Update moved package recipe in yaml file. 
* **org.openrewrite.java.upgrade.MigrateToRewrite8**: Migrate rewrite recipe and test from version 7 to version 8.
While most parts can be automatically migrated, there are some complex and open-ended scenarios that require manual attention.
In those cases, this recipe will add a comment to the code and request a human to review and handle it manually.
Reference : Migration guide (URL to be written). 
* **org.openrewrite.java.upgrade.UpdateStaticAnalysisPackage**: Some recipes have been moved from `rewrite` to `rewrite-static-analysis`, so any referencing places should update the class package name accordingly. 

## Changed Recipes

* [org.openrewrite.gradle.UpdateGradleWrapper](https://docs.openrewrite.org/recipes/gradle/updategradlewrapper) was changed:
  * Old Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `version: { type: String, required: false }`
  * New Options:
    * `addIfMissing: { type: Boolean, required: false }`
    * `distribution: { type: String, required: false }`
    * `version: { type: String, required: false }`
    * `wrapperUri: { type: String, required: false }`
* [org.openrewrite.gradle.UpdateJavaCompatibility](https://docs.openrewrite.org/recipes/gradle/updatejavacompatibility) was changed:
  * Old Options:
    * `compatibilityType: { type: CompatibilityType, required: false }`
    * `declarationStyle: { type: DeclarationStyle, required: false }`
    * `version: { type: Integer, required: true }`
  * New Options:
    * `allowDowngrade: { type: Boolean, required: false }`
    * `compatibilityType: { type: CompatibilityType, required: false }`
    * `declarationStyle: { type: DeclarationStyle, required: false }`
    * `version: { type: Integer, required: true }`
* [org.openrewrite.launchdarkly.RemoveBoolVariation](https://docs.openrewrite.org/recipes/launchdarkly/removeboolvariation) was changed:
  * Old Options:
    * `featureKey: { type: String, required: true }`
    * `replacementValue: { type: Boolean, required: true }`
  * New Options:
    * `featureKey: { type: String, required: true }`
    * `methodPattern: { type: String, required: false }`
    * `replacementValue: { type: Boolean, required: true }`
* [org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ](https://docs.openrewrite.org/recipes/java/testing/hamcrest/hamcrestmatchertoassertj) was changed:
  * Old Options:
    * `assertion: { type: String, required: false }`
    * `matcher: { type: String, required: false }`
  * New Options:
    * `argumentType: { type: String, required: false }`
    * `assertion: { type: String, required: false }`
    * `matcher: { type: String, required: false }`
* [org.openrewrite.xml.ChangeTagAttribute](https://docs.openrewrite.org/recipes/xml/changetagattribute) was changed:
  * Old Options:
    * `attributeName: { type: String, required: true }`
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
  * New Options:
    * `attributeName: { type: String, required: true }`
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `regex: { type: Boolean, required: false }`