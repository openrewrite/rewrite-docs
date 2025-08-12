---
sidebar_label: "`ApacheCommonsStringUtils` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `ApacheCommonsStringUtils` Refaster recipes

**org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.apache.commons.lang.ApacheCommonsStringUtils`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/lang/ApacheCommonsStringUtils.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `StringUtils.abbreviate(String, int)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$abbreviaterecipe)
* [Replace `StringUtils.capitalize(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$capitalizerecipe)
* [Replace `StringUtils.defaultString(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$defaultstringrecipe)
* [Replace `StringUtils.defaultString(String, String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$defaultstringfallbackrecipe)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$deletewhitespacerecipe)
* [Replace `StringUtils.equalsIgnoreCase(CharSequence, CharSequence)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$equalsignorecaserecipe)
* [Replace `StringUtils.equals(CharSequence, CharSequence)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$equalsrecipe)
* [Replace `StringUtils.lowerCase(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$lowercaserecipe)
* [Replace `StringUtils.removeEnd(String, String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$removeendrecipe)
* [Replace `StringUtils.replace(String, String, String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$replacerecipe)
* [Replace `StringUtils.reverse(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$reverserecipe)
* [Replace `StringUtils.split(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$splitrecipe)
* [Replace `StringUtils.strip(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$striprecipe)
* [Replace `StringUtils.trimToEmpty(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$trimtoemptyrecipe)
* [Replace `StringUtils.trimToNull(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$trimtonullrecipe)
* [Replace `StringUtils.trim(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$trimrecipe)
* [Replace `StringUtils.upperCase(String)` with JDK internals](../../../apache/commons/lang/apachecommonsstringutilsrecipes$uppercaserecipe)
* [Remove redundant null check when using `StringUtils.isNotBlank(String)`](../../../apache/commons/lang/apachecommonsstringutilsrecipes$removeredundantnullcheckwithisnotblankrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes
displayName: `ApacheCommonsStringUtils` Refaster recipes
description: |
  Refaster template recipes for `org.openrewrite.apache.commons.lang.ApacheCommonsStringUtils`.
recipeList:
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$CapitalizeRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveEndRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$SplitRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$StripRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToEmptyRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToNullRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$UppercaseRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveRedundantNullCheckWithIsNotBlankRecipe

```
</TabItem>
</Tabs>
## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.lang3.StringUtils;

class Foo {
    void bar(String in, CharSequence cs) {
        // Reuse output variables for readability
        String[] array;
        boolean bool;
        int integer;
        String string;

        // Test all methods in alphabetical order to only execute the slow recipes once
        string = StringUtils.abbreviate(in, 10);
        string = StringUtils.capitalize(in);
        string = StringUtils.center(in, 10);
        string = StringUtils.center(in, 10, ' ');
        string = StringUtils.center(in, 10, " ");
        string = StringUtils.chomp(in);
        string = StringUtils.chop(in);

        bool = StringUtils.contains(in, "search");

        integer = StringUtils.countMatches(in, '|');
        integer = StringUtils.countMatches(in, "|");

        string = StringUtils.defaultString(in);
        string = StringUtils.defaultString(in, "nil");
        string = StringUtils.deleteWhitespace(in);

        //bool = StringUtils.endsWithIgnoreCase(in, "suffix");
        bool = StringUtils.equalsIgnoreCase(in, "other");
        bool = StringUtils.equals(in, "other");
        bool = StringUtils.equals(cs, "other");
        bool = StringUtils.equals(cs, cs);

        //integer = StringUtils.indexOfAny(in, "search");

        bool = StringUtils.isAlphanumericSpace(in);
        bool = StringUtils.isAlphanumeric(in);
        bool = StringUtils.isAlphaSpace(in);
        bool = StringUtils.isAlpha(in);
        bool = StringUtils.isEmpty(in);

        string = StringUtils.join(in);
        string = StringUtils.joinWith(",", in);
        string = StringUtils.left(in, 4);
        string = StringUtils.leftPad(in, 4);
        string = StringUtils.leftPad(in, 4, ' ');
        string = StringUtils.leftPad(in, 4, " ");
        string = StringUtils.lowerCase(in);
        string = StringUtils.mid(in, 3, 4);
        string = StringUtils.overlay(in, "overlay", 3, 5);

        string = StringUtils.remove(in, "r");
        string = StringUtils.removeEnd(in, "suffix");
        string = StringUtils.repeat(in, 4);
        string = StringUtils.repeat(in, ",", 4);
        string = StringUtils.replace(in, "search", "replacement");
        //string = StringUtils.replaceOnce(in, "search", "replacement");
        string = StringUtils.reverse(in);
        string = StringUtils.right(in, 5);
        string = StringUtils.rightPad(in, 5);
        string = StringUtils.rightPad(in, 5, ' ');
        string = StringUtils.rightPad(in, 5, " ");

        array = StringUtils.split(in);
        //array = StringUtils.split(in, "*");
        bool = StringUtils.startsWith(in, "prefix");
        bool = StringUtils.startsWithAny(in, "prefix");
        bool = StringUtils.startsWithIgnoreCase(in, "prefix");
        array = StringUtils.stripAll(in);

        string = StringUtils.strip(in);
        string = StringUtils.stripEnd(in, "suffix");
        string = StringUtils.stripStart(in, "chars");

        bool = StringUtils.startsWith(in, "prefix");

        string = StringUtils.substringAfter(in, "|");
        string = StringUtils.substring(in, 2, 4);
        string = StringUtils.swapCase(in);
        string = StringUtils.trimToEmpty(in);
        string = StringUtils.trimToNull(in);
        string = StringUtils.trim(in);
        string = StringUtils.upperCase(in);
        string = StringUtils.uncapitalize(in);
    }
}
```

###### After
```java
import org.apache.commons.lang3.StringUtils;

import java.util.Objects;

class Foo {
    void bar(String in, CharSequence cs) {
        // Reuse output variables for readability
        String[] array;
        boolean bool;
        int integer;
        String string;

        // Test all methods in alphabetical order to only execute the slow recipes once
        string = in == null || in.length() <= 10 ? in : in.substring(0, 10 - 3) + "...";
        string = in == null || in.isEmpty() || Character.isTitleCase(in.charAt(0)) ? in : Character.toTitleCase(in.charAt(0)) + in.substring(1);
        string = StringUtils.center(in, 10);
        string = StringUtils.center(in, 10, ' ');
        string = StringUtils.center(in, 10, " ");
        string = StringUtils.chomp(in);
        string = StringUtils.chop(in);

        bool = StringUtils.contains(in, "search");

        integer = StringUtils.countMatches(in, '|');
        integer = StringUtils.countMatches(in, "|");

        string = Objects.toString(in, "");
        string = Objects.toString(in, "nil");
        string = in == null ? null : in.replaceAll("\\s+", "");

        //bool = StringUtils.endsWithIgnoreCase(in, "suffix");
        bool = in == null ? false : in.equalsIgnoreCase("other");
        bool = Objects.equals(in, "other");
        bool = StringUtils.equals(cs, "other");
        bool = StringUtils.equals(cs, cs);

        //integer = StringUtils.indexOfAny(in, "search");

        bool = StringUtils.isAlphanumericSpace(in);
        bool = StringUtils.isAlphanumeric(in);
        bool = StringUtils.isAlphaSpace(in);
        bool = StringUtils.isAlpha(in);
        bool = StringUtils.isEmpty(in);

        string = StringUtils.join(in);
        string = StringUtils.joinWith(",", in);
        string = StringUtils.left(in, 4);
        string = StringUtils.leftPad(in, 4);
        string = StringUtils.leftPad(in, 4, ' ');
        string = StringUtils.leftPad(in, 4, " ");
        string = in == null ? null : in.toLowerCase();
        string = StringUtils.mid(in, 3, 4);
        string = StringUtils.overlay(in, "overlay", 3, 5);

        string = StringUtils.remove(in, "r");
        string = in == null || in.isEmpty() || !in.endsWith("suffix") ? in : in.substring(0, in.length() - "suffix".length());
        string = StringUtils.repeat(in, 4);
        string = StringUtils.repeat(in, ",", 4);
        string = in == null || in.isEmpty() ? in : in.replace("search", "replacement");
        //string = StringUtils.replaceOnce(in, "search", "replacement");
        string = in == null ? null : new StringBuilder(in).reverse().toString();
        string = StringUtils.right(in, 5);
        string = StringUtils.rightPad(in, 5);
        string = StringUtils.rightPad(in, 5, ' ');
        string = StringUtils.rightPad(in, 5, " ");

        array = in == null ? null : in.split("\\s+");
        //array = StringUtils.split(in, "*");
        bool = StringUtils.startsWith(in, "prefix");
        bool = StringUtils.startsWithAny(in, "prefix");
        bool = StringUtils.startsWithIgnoreCase(in, "prefix");
        array = StringUtils.stripAll(in);

        string = in == null ? null : in.trim();
        string = StringUtils.stripEnd(in, "suffix");
        string = StringUtils.stripStart(in, "chars");

        bool = StringUtils.startsWith(in, "prefix");

        string = StringUtils.substringAfter(in, "|");
        string = StringUtils.substring(in, 2, 4);
        string = StringUtils.swapCase(in);
        string = in == null ? "" : in.trim();
        string = in == null || in.trim().isEmpty() ? null : in.trim();
        string = in == null ? null : in.trim();
        string = in == null ? null : in.toUpperCase();
        string = StringUtils.uncapitalize(in);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,2 @@
import org.apache.commons.lang3.StringUtils;

+import java.util.Objects;
+
class Foo {
@@ -12,2 +14,2 @@

        // Test all methods in alphabetical order to only execute the slow recipes once
-       string = StringUtils.abbreviate(in, 10);
-       string = StringUtils.capitalize(in);
+       string = in == null || in.length() <= 10 ? in : in.substring(0, 10 - 3) + "...";
+       string = in == null || in.isEmpty() || Character.isTitleCase(in.charAt(0)) ? in : Character.toTitleCase(in.charAt(0)) + in.substring(1);
        string = StringUtils.center(in, 10);
@@ -25,3 +27,3 @@
        integer = StringUtils.countMatches(in, "|");

-       string = StringUtils.defaultString(in);
-       string = StringUtils.defaultString(in, "nil");
-       string = StringUtils.deleteWhitespace(in);
+       string = Objects.toString(in, "");
+       string = Objects.toString(in, "nil");
+       string = in == null ? null : in.replaceAll("\\s+", "");

@@ -30,2 +32,2 @@

        //bool = StringUtils.endsWithIgnoreCase(in, "suffix");
-       bool = StringUtils.equalsIgnoreCase(in, "other");
-       bool = StringUtils.equals(in, "other");
+       bool = in == null ? false : in.equalsIgnoreCase("other");
+       bool = Objects.equals(in, "other");
        bool = StringUtils.equals(cs, "other");
@@ -49,1 +51,1 @@
        string = StringUtils.leftPad(in, 4, ' ');
        string = StringUtils.leftPad(in, 4, " ");
-       string = StringUtils.lowerCase(in);
+       string = in == null ? null : in.toLowerCase();
        string = StringUtils.mid(in, 3, 4);
@@ -54,1 +56,1 @@

        string = StringUtils.remove(in, "r");
-       string = StringUtils.removeEnd(in, "suffix");
+       string = in == null || in.isEmpty() || !in.endsWith("suffix") ? in : in.substring(0, in.length() - "suffix".length());
        string = StringUtils.repeat(in, 4);
@@ -57,1 +59,1 @@
        string = StringUtils.repeat(in, 4);
        string = StringUtils.repeat(in, ",", 4);
-       string = StringUtils.replace(in, "search", "replacement");
+       string = in == null || in.isEmpty() ? in : in.replace("search", "replacement");
        //string = StringUtils.replaceOnce(in, "search", "replacement");
@@ -59,1 +61,1 @@
        string = StringUtils.replace(in, "search", "replacement");
        //string = StringUtils.replaceOnce(in, "search", "replacement");
-       string = StringUtils.reverse(in);
+       string = in == null ? null : new StringBuilder(in).reverse().toString();
        string = StringUtils.right(in, 5);
@@ -65,1 +67,1 @@
        string = StringUtils.rightPad(in, 5, " ");

-       array = StringUtils.split(in);
+       array = in == null ? null : in.split("\\s+");
        //array = StringUtils.split(in, "*");
@@ -72,1 +74,1 @@
        array = StringUtils.stripAll(in);

-       string = StringUtils.strip(in);
+       string = in == null ? null : in.trim();
        string = StringUtils.stripEnd(in, "suffix");
@@ -81,4 +83,4 @@
        string = StringUtils.substring(in, 2, 4);
        string = StringUtils.swapCase(in);
-       string = StringUtils.trimToEmpty(in);
-       string = StringUtils.trimToNull(in);
-       string = StringUtils.trim(in);
-       string = StringUtils.upperCase(in);
+       string = in == null ? "" : in.trim();
+       string = in == null || in.trim().isEmpty() ? null : in.trim();
+       string = in == null ? null : in.trim();
+       string = in == null ? null : in.toUpperCase();
        string = StringUtils.uncapitalize(in);
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}")
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
        rewrite("org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes")
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
            <recipe>org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ApacheCommonsStringUtilsRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes" />

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
