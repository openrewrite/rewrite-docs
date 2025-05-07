---
sidebar_label: "Simplify AssertJ assertions with literal arguments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Simplify AssertJ assertions with literal arguments

**org.openrewrite.java.testing.assertj.SimplifyAssertJAssertion**

_Simplify AssertJ assertions by replacing them with more expressive dedicated assertions._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/assertj/SimplifyAssertJAssertion.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | assertToReplace | *Optional*. The assertion method that should be replaced. | `hasSize` |
| `String` | literalArgument | The literal argument passed into the assertion to replace; use "null" for `null`. | `0` |
| `String` | dedicatedAssertion | The zero argument assertion to adopt instead. | `isEmpty` |
| `String` | requiredType | The type of the actual assertion argument. | `java.lang.String` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|assertToReplace|`isEqualTo`|
|literalArgument|`null`|
|dedicatedAssertion|`isNull`|
|requiredType|`java.lang.Object`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.assertj.core.api.Assertions.assertThat;
class Test {
    void test(String a) {
        assertThat(a).isEqualTo(null);
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;
class Test {
    void test(String a) {
        assertThat(a).isNull();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
class Test {
    void test(String a) {
-       assertThat(a).isEqualTo(null);
+       assertThat(a).isNull();
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.SimplifyAssertJAssertionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.SimplifyAssertJAssertionExample
displayName: Simplify AssertJ assertions with literal arguments example
recipeList:
  - org.openrewrite.java.testing.assertj.SimplifyAssertJAssertion:
      assertToReplace: hasSize
      literalArgument: 0
      dedicatedAssertion: isEmpty
      requiredType: java.lang.String
```

Now that `com.yourorg.SimplifyAssertJAssertionExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.SimplifyAssertJAssertionExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
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
            <recipe>com.yourorg.SimplifyAssertJAssertionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}</version>
          </dependency>
        </dependencies>
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
mod run . --recipe SimplifyAssertJAssertion --recipe-option "assertToReplace=hasSize" --recipe-option "literalArgument=0" --recipe-option "dedicatedAssertion=isEmpty" --recipe-option "requiredType=java.lang.String"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.SimplifyAssertJAssertion" />

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

## Contributors
Marvin, [Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Stefano Dalla Palma](mailto:stefano.dallapalma0@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
