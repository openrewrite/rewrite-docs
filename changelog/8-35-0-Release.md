# 8.35.0 release (2024-09-12)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## New Artifacts
* rewrite-codemods
* rewrite-codemods-ng

## New Recipes

* [org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBoldRecipes](https://docs.openrewrite.org/recipes/apache/poi/replacesetboldweightwithsetboldrecipes): Replace `Font.setBoldweight(short)` or equivalent with `Font.setBold(boolean)`.
* [org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBoldRecipes$ReplaceSetBoldweightBoldWithSetBoldTrueRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetboldweightwithsetboldrecipesusdreplacesetboldweightboldwithsetboldtruerecipe): Replace `Font.setBoldweight(Font.BOLDWEIGHT_BOLD)` or equivalent with `Font.setBold(true)`.
* [org.openrewrite.apache.poi.ReplaceSetBoldweightWithSetBoldRecipes$ReplaceSetBoldweightNormalWithSetBoldFalseRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetboldweightwithsetboldrecipesusdreplacesetboldweightnormalwithsetboldfalserecipe): Replace `Font.setBoldweight(Font.BOLDWEIGHT_NORMAL)` or equivalent with `Font.setBold(false)`.
* [org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltyperecipes): Replace `Cell.setCellType(int)` with equivalent `Cell.setCellType(CellType)`.
* [org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeBlankRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltyperecipesusdreplacesetcelltypeblankrecipe): Replace `Cell.setCellType(Cell.CELL_TYPE_BLANK)` with `Cell.setCellType(CellType.BLANK)`.
* [org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeBooleanRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltyperecipesusdreplacesetcelltypebooleanrecipe): Replace `Cell.setCellType(Cell.CELL_TYPE_BOOLEAN)` with `Cell.setCellType(CellType.BOOLEAN)`.
* [org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeErrorRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltyperecipesusdreplacesetcelltypeerrorrecipe): Replace `Cell.setCellType(Cell.CELL_TYPE_ERROR)` with `Cell.setCellType(CellType.ERROR)`.
* [org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeFormulaRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltyperecipesusdreplacesetcelltypeformularecipe): Replace `Cell.setCellType(Cell.CELL_TYPE_FORMULA)` with `Cell.setCellType(CellType.FORMULA)`.
* [org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeNumericRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltyperecipesusdreplacesetcelltypenumericrecipe): Replace `Cell.setCellType(Cell.CELL_TYPE_NUMERIC)` with `Cell.setCellType(CellType.NUMERIC)`.
* [org.openrewrite.apache.poi.ReplaceSetCellTypeRecipes$ReplaceSetCellTypeStringRecipe](https://docs.openrewrite.org/recipes/apache/poi/replacesetcelltyperecipesusdreplacesetcelltypestringrecipe): Replace `Cell.setCellType(Cell.CELL_TYPE_STRING)` with `Cell.setCellType(CellType.STRING)`.
* [org.openrewrite.apache.poi.UpgradeApachePoi_3_17](https://docs.openrewrite.org/recipes/apache/poi/upgradeapachepoi_3_17): Migrates to the last Apache POI 3.x release. This recipe modifies build files and makes changes to deprecated/preferred APIs that have changed between versions.
* [org.openrewrite.java.AddMethodParameter](https://docs.openrewrite.org/recipes/java/addmethodparameter): Adds a new method parameter to an existing method declaration.
* [org.openrewrite.java.jspecify.MigrateFromJakartaAnnotationApi](https://docs.openrewrite.org/recipes/java/jspecify/migratefromjakartaannotationapi): Migrate from Jakarta annotation API to JSpecify.
* [org.openrewrite.java.jspecify.MigrateFromJavaxAnnotationApi](https://docs.openrewrite.org/recipes/java/jspecify/migratefromjavaxannotationapi): Migrate from javax annotation API to JSpecify.
* [org.openrewrite.java.jspecify.MigrateFromJetbrainsAnnotations](https://docs.openrewrite.org/recipes/java/jspecify/migratefromjetbrainsannotations): Migrate from JetBrains annotations to JSpecify.
* [org.openrewrite.java.jspecify.MigrateToJspecify](https://docs.openrewrite.org/recipes/java/jspecify/migratetojspecify): This recipe will migrate to JSpecify annotations from various other nullability annotation standards.
* [org.openrewrite.java.migrate.ReplaceComSunAWTUtilitiesMethods](https://docs.openrewrite.org/recipes/java/migrate/replacecomsunawtutilitiesmethods): This recipe replaces several static calls  in `com.sun.awt.AWTUtilities` with the JavaSE 11 equivalent. The methods replaced are `AWTUtilities.isTranslucencySupported()`, `AWTUtilities.setWindowOpacity()`, `AWTUtilities.getWindowOpacity()`, `AWTUtilities.getWindowShape()`, `AWTUtilities.isWindowOpaque()`, `AWTUtilities.isTranslucencyCapable()` and `AWTUtilities.setComponentMixingCutoutShape()`.
* [org.openrewrite.java.migrate.util.ReplaceMathRandomWithThreadLocalRandomRecipe](https://docs.openrewrite.org/recipes/java/migrate/util/replacemathrandomwiththreadlocalrandomrecipe): Replace `java.lang.Math random()` with `ThreadLocalRandom nextDouble()` to reduce contention.
* [org.openrewrite.java.search.DoesNotUseType](https://docs.openrewrite.org/recipes/java/search/doesnotusetype): Useful as a precondition to skip over compilation units using the argument type.
* [org.openrewrite.java.spring.batch.SpringBatch4To5Migration](https://docs.openrewrite.org/recipes/java/spring/batch/springbatch4to5migration): Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 5.0 release.
* [org.openrewrite.java.spring.data.RefactorSimpleMongoDbFactoryRecipe](https://docs.openrewrite.org/recipes/java/spring/data/refactorsimplemongodbfactoryrecipe): Replace usage of deprecated `new SimpleMongoDbFactory(new MongoClientURI(String))` with `new SimpleMongoClientDbFactory(String)`.
* [org.openrewrite.java.spring.kafka.KafkaOperationsSendReturnType](https://docs.openrewrite.org/recipes/java/spring/kafka/kafkaoperationssendreturntype): Send operations used to return a `ListenableFuture` but as of 3.0 return a `CompletableFuture`. Adjust the usage to use `CompletableFuture` instead.
* [org.openrewrite.java.spring.kafka.KafkaTestUtilsDuration](https://docs.openrewrite.org/recipes/java/spring/kafka/kafkatestutilsduration): Replace `KafkaTestUtils` methods that take a `long` argument with methods that take a `Duration`.
* [org.openrewrite.java.spring.kafka.RemoveUsingCompletableFuture](https://docs.openrewrite.org/recipes/java/spring/kafka/removeusingcompletablefuture): Remove the `KafkaOperations.usingCompletableFuture()` bridge during Spring Kafka 2.9 to 3.0 migration.
* [org.openrewrite.java.spring.kafka.UpgradeSpringKafka_3_0](https://docs.openrewrite.org/recipes/java/spring/kafka/upgradespringkafka_3_0): Migrate applications to the latest Spring Kafka 3.0 release.
* [org.openrewrite.java.testing.junit5.AssertThrowsOnLastStatement](https://docs.openrewrite.org/recipes/java/testing/junit5/assertthrowsonlaststatement): Applies JUnit 5 `assertThrows` on last statement in lambda block only. In rare cases may cause compilation errors if the lambda uses effectively non final variables. In some cases, tests might fail if earlier statements in the lambda block throw exceptions.
* [org.openrewrite.java.testing.mockito.MockitoBestPractices](https://docs.openrewrite.org/recipes/java/testing/mockito/mockitobestpractices): Applies best practices for Mockito tests.

## Removed Recipes

* **org.openrewrite.java.spring.boot3.SpringBatch4To5Migration**: Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 5.0 release.

## Changed Recipes

* [org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods](https://docs.openrewrite.org/recipes/java/migrate/replacelocalizedstreammethods) was changed:
    * Old Options:
        * `localizedInputStreamMethodMatcher: { type: String, required: true }`
        * `localizedOutputStreamMethodMatcher: { type: String, required: true }`
    * New Options:
        * `localizedInputStreamMethodMatcher: { type: String, required: false }`
        * `localizedOutputStreamMethodMatcher: { type: String, required: false }`
