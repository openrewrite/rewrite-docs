---
sidebar_label: "Change method target to static"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change method target to static

**org.openrewrite.java.ChangeMethodTargetToStatic**

_Change method invocations to static method calls._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodTargetToStatic.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | methodPattern | The original method call may or may not be a static method invocation. A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results. | `com.google.common.collect.ImmutableSet of(..)` |
| `String` | fullyQualifiedTargetTypeName | A fully-qualified class name of the type upon which the static method is defined. | `java.util.Set` |
| `String` | returnType | *Optional*. Sometimes changing the target type also changes the return type. In the Guava example, changing from `ImmutableSet#of(..)` to `Set#of(..)` widens the return type from Guava's `ImmutableSet` to just `java.util.Set`. | `java.util.Set` |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the method pattern. |  |
| `Boolean` | matchUnknownTypes | *Optional*. When enabled, include method invocations which appear to match if full type information is missing. Using matchUnknownTypes can improve recipe resiliency for an AST with missing type information, but also increases the risk of false-positive matches on unrelated method invocations. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Change `java.lang.reflect.Modifier` and ` java.lang.invoke.ConstantBootstraps` method calls to static](/recipes/java/migrate/removedmodifierandconstantbootstrapsconstructors.md)
* [Change `javax.tools.ToolProvider` methods calls to static](/recipes/java/migrate/removedtoolproviderconstructor.md)
* [Migrate Hamcrest assertions to JUnit Jupiter](/recipes/java/testing/hamcrest/migratehamcresttojunit5.md)
* [Migrate JUL to Log4j 2.x API](/recipes/java/logging/log4j/jultolog4j.md)
* [Migrate Log4j 1.x to Log4j 2.x](/recipes/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate SLF4J to Log4j 2.x API](/recipes/java/logging/log4j/slf4jtolog4j.md)
* [Migrate from EasyMock to Mockito](/recipes/java/testing/easymock/easymocktomockito.md)
* [Prefer `Integer#compareUnsigned`](/recipes/java/migrate/guava/preferintegercompareunsigned.md)
* [Prefer `Integer#compare`](/recipes/java/migrate/guava/preferintegercompare.md)
* [Prefer `Integer#divideUnsigned`](/recipes/java/migrate/guava/preferintegerdivideunsigned.md)
* [Prefer `Integer#parseUnsignedInt`](/recipes/java/migrate/guava/preferintegerparseunsignedint.md)
* [Prefer `Integer#remainderUnsigned`](/recipes/java/migrate/guava/preferintegerremainderunsigned.md)
* [Prefer `Long#compareUnsigned`](/recipes/java/migrate/guava/preferlongcompareunsigned.md)
* [Prefer `Long#compare`](/recipes/java/migrate/guava/preferlongcompare.md)
* [Prefer `Long#divideUnsigned`](/recipes/java/migrate/guava/preferlongdivideunsigned.md)
* [Prefer `Long#parseUnsignedInt`](/recipes/java/migrate/guava/preferlongparseunsignedlong.md)
* [Prefer `Long#remainderUnsigned`](/recipes/java/migrate/guava/preferlongremainderunsigned.md)
* [Prefer `Math#addExact`](/recipes/java/migrate/guava/prefermathaddexact.md)
* [Prefer `Math#clamp`](/recipes/java/migrate/guava/prefermathclamp.md)
* [Prefer `Math#multiplyExact`](/recipes/java/migrate/guava/prefermathmultiplyexact.md)
* [Prefer `Math#subtractExact`](/recipes/java/migrate/guava/prefermathsubtractexact.md)
* [Prefer `Short#compare`](/recipes/java/migrate/guava/prefershortcompare.md)
* [Prefer `java.lang.Char#compare`](/recipes/java/migrate/guava/prefercharcompare.md)
* [Prefer `java.util.Collections#synchronizedNavigableMap`](/recipes/java/migrate/guava/preferjavautilcollectionssynchronizednavigablemap.md)
* [Prefer `java.util.Collections#unmodifiableNavigableMap`](/recipes/java/migrate/guava/preferjavautilcollectionsunmodifiablenavigablemap.md)
* [Prefer `java.util.Objects#equals`](/recipes/java/migrate/guava/preferjavautilobjectsequals.md)
* [Prefer `java.util.Objects#hash`](/recipes/java/migrate/guava/preferjavautilobjectshashcode.md)
* [Prefer `java.util.Objects#requireNonNullElse`](/recipes/java/migrate/guava/preferjavautilobjectsrequirenonnullelse.md)
* [Replace PowerMock with raw Mockito](/recipes/java/testing/mockito/replacepowermockito.md)
* [Replace `Paths.get` with `Path.of`](/recipes/java/migrate/nio/file/pathsgettopathof.md)
* [Replace `org.apache.commons.lang3.Validate#notNull` with `Objects#requireNonNull`](/recipes/staticanalysis/replacevalidatenotnullhavingsingleargwithobjectsrequirenonnull.md)
* [Statically import AssertJ's `assertThat`](/recipes/java/testing/assertj/staticimports.md)
* [Use `Assertions#assume*(..)` and Hamcrest's `MatcherAssume#assume*(..)`](/recipes/java/testing/junit5/migrateassumptions.md)
* [Use `MatcherAssert#assertThat(..)`](/recipes/java/testing/junit5/usehamcrestassertthat.md)
* [Use `ObjectUtils#isEmpty(Object)`](/recipes/java/spring/framework/useobjectutilsisempty.md)
* [Use consistent Hamcrest matcher imports](/recipes/java/testing/hamcrest/consistenthamcrestmatcherimports.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodTargetToStaticExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodTargetToStaticExample
displayName: Change method target to static example
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: com.google.common.collect.ImmutableSet of(..)
      fullyQualifiedTargetTypeName: java.util.Set
      returnType: java.util.Set
```

Now that `com.yourorg.ChangeMethodTargetToStaticExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodTargetToStaticExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.ChangeMethodTargetToStaticExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeMethodTargetToStatic --recipe-option "methodPattern=com.google.common.collect.ImmutableSet of(..)" --recipe-option "fullyQualifiedTargetTypeName=java.util.Set" --recipe-option "returnType=java.util.Set"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ChangeMethodTargetToStatic" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
