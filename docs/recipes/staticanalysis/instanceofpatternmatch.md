---
sidebar_label: "Changes code to use Java 17's `instanceof` pattern matching"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Changes code to use Java 17's `instanceof` pattern matching

**org.openrewrite.staticanalysis.InstanceOfPatternMatch**

_Adds pattern variables to `instanceof` expressions wherever the same (side effect free) expression is referenced in a corresponding type cast expression within the flow scope of the `instanceof`. Currently, this recipe supports `if` statements and ternary operator expressions._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/InstanceOfPatternMatch.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 17](/recipes/java/migrate/upgradetojava17.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class LeftNode {
    int bar() {
        return 0;
    }
}
class RightNode {
    int bar() {
        return 1;
    }
}

class Foo {
    void bar(Object o1, Object o2) {
        if (o1 instanceof LeftNode && o2 instanceof RightNode) {
          ((LeftNode)o1).bar();
          ((RightNode)o2).bar();
        }
        else if (o1 instanceof RightNode && o2 instanceof LeftNode) {
          ((RightNode)o1).bar();
          ((LeftNode)o2).bar();
        }
    }
}
```

###### After
```java
class LeftNode {
    int bar() {
        return 0;
    }
}
class RightNode {
    int bar() {
        return 1;
    }
}

class Foo {
    void bar(Object o1, Object o2) {
        if (o1 instanceof LeftNode node2 && o2 instanceof RightNode node3) {
          node2.bar();
          node3.bar();
        }
        else if (o1 instanceof RightNode node && o2 instanceof LeftNode node1) {
          node.bar();
          node1.bar();
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -14,3 +14,3 @@
class Foo {
    void bar(Object o1, Object o2) {
-       if (o1 instanceof LeftNode && o2 instanceof RightNode) {
-         ((LeftNode)o1).bar();
-         ((RightNode)o2).bar();
+       if (o1 instanceof LeftNode node2 && o2 instanceof RightNode node3) {
+         node2.bar();
+         node3.bar();
        }
@@ -18,3 +18,3 @@
          ((RightNode)o2).bar();
        }
-       else if (o1 instanceof RightNode && o2 instanceof LeftNode) {
-         ((RightNode)o1).bar();
-         ((LeftNode)o2).bar();
+       else if (o1 instanceof RightNode node && o2 instanceof LeftNode node1) {
+         node.bar();
+         node1.bar();
        }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.InstanceOfPatternMatch")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.staticanalysis.InstanceOfPatternMatch")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

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
            <recipe>org.openrewrite.staticanalysis.InstanceOfPatternMatch</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE -Drewrite.activeRecipes=org.openrewrite.staticanalysis.InstanceOfPatternMatch -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe InstanceOfPatternMatch
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-static-analysis:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.InstanceOfPatternMatch" />

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
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
