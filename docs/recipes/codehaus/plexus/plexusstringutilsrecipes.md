---
sidebar_label: "`PlexusStringUtils` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `PlexusStringUtils` Refaster recipes

**org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.codehaus.plexus.PlexusStringUtils`._

## Recipe source

[GitHub: rewrite-apache-2.21.0.jar](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/codehaus/plexus/PlexusStringUtils.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `StringUtils.abbreviate(String, int)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$abbreviaterecipe)
* [Replace `StringUtils.capitalise(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$capitaliserecipe)
* [Replace `StringUtils.defaultString(Object)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$defaultstringrecipe)
* [Replace `StringUtils.defaultString(Object, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$defaultstringfallbackrecipe)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$deletewhitespacerecipe)
* [Replace `StringUtils.equalsIgnoreCase(String, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$equalsignorecaserecipe)
* [Replace `StringUtils.equals(String, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$equalsrecipe)
* [Replace `StringUtils.lowerCase(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$lowercaserecipe)
* [Replace `StringUtils.replace(String, String, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$replacerecipe)
* [Replace `StringUtils.reverse(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$reverserecipe)
* [Replace `StringUtils.split(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$splitrecipe)
* [Replace `StringUtils.strip(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$striprecipe)
* [Replace `StringUtils.trim(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$trimrecipe)
* [Replace `StringUtils.upperCase(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$uppercaserecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes
displayName: `PlexusStringUtils` Refaster recipes
description: |
  Refaster template recipes for `org.openrewrite.codehaus.plexus.PlexusStringUtils`.
recipeList:
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$CapitaliseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$SplitRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$StripRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$TrimRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$UppercaseRecipe

```
</TabItem>
</Tabs>
## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.codehaus.plexus.util.StringUtils;

class Foo {
    void bar(String in, CharSequence cs) {
        // Reuse output variables for readability
        String[] array;
        boolean bool;
        String string;

        // Test all methods in alphabetical order to only execute the slow recipes once
        string = StringUtils.abbreviate(in, 10);
        string = StringUtils.capitalise(in);
        string = StringUtils.defaultString(in);
        string = StringUtils.defaultString(in, "nil");
        string = StringUtils.deleteWhitespace(in);

        bool = StringUtils.equalsIgnoreCase(in, "other");
        bool = StringUtils.equals(in, "other");
        //bool = StringUtils.equals(cs, "other");

        bool = StringUtils.isAlphanumeric(in);
        bool = StringUtils.isAlpha(in);
        bool = StringUtils.isEmpty(in);

        string = StringUtils.lowerCase(in);
        string = StringUtils.replace(in, "search", "replacement");
        string = StringUtils.reverse(in);
        array = StringUtils.split(in);
        string = StringUtils.strip(in);
        string = StringUtils.trim(in);
        string = StringUtils.upperCase(in);
    }
}
```

###### After
```java
import org.codehaus.plexus.util.StringUtils;

import java.util.Objects;

class Foo {
    void bar(String in, CharSequence cs) {
        // Reuse output variables for readability
        String[] array;
        boolean bool;
        String string;

        // Test all methods in alphabetical order to only execute the slow recipes once
        string = in.length() <= 10 ? in : in.substring(0, 10 - 3) + "...";
        string = in == null || in.isEmpty() ? in : Character.toTitleCase(in.charAt(0)) + in.substring(1);
        string = Objects.toString(in, "");
        string = Objects.toString(in, "nil");
        string = in.replaceAll("\\s+", "");

        bool = in == null ? false : in.equalsIgnoreCase("other");
        bool = Objects.equals(in, "other");
        //bool = StringUtils.equals(cs, "other");

        bool = StringUtils.isAlphanumeric(in);
        bool = StringUtils.isAlpha(in);
        bool = StringUtils.isEmpty(in);

        string = in == null ? null : in.toLowerCase();
        string = in == null || in.isEmpty() ? in : in.replace("search", "replacement");
        string = in == null ? null : new StringBuilder(in).reverse().toString();
        array = in.split("\\s+");
        string = in == null ? null : in.trim();
        string = in == null ? null : in.trim();
        string = in == null ? null : in.toUpperCase();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,2 @@
import org.codehaus.plexus.util.StringUtils;

+import java.util.Objects;
+
class Foo {
@@ -11,5 +13,5 @@

        // Test all methods in alphabetical order to only execute the slow recipes once
-       string = StringUtils.abbreviate(in, 10);
-       string = StringUtils.capitalise(in);
-       string = StringUtils.defaultString(in);
-       string = StringUtils.defaultString(in, "nil");
-       string = StringUtils.deleteWhitespace(in);
+       string = in.length() <= 10 ? in : in.substring(0, 10 - 3) + "...";
+       string = in == null || in.isEmpty() ? in : Character.toTitleCase(in.charAt(0)) + in.substring(1);
+       string = Objects.toString(in, "");
+       string = Objects.toString(in, "nil");
+       string = in.replaceAll("\\s+", "");

@@ -17,2 +19,2 @@
        string = StringUtils.deleteWhitespace(in);

-       bool = StringUtils.equalsIgnoreCase(in, "other");
-       bool = StringUtils.equals(in, "other");
+       bool = in == null ? false : in.equalsIgnoreCase("other");
+       bool = Objects.equals(in, "other");
        //bool = StringUtils.equals(cs, "other");
@@ -25,7 +27,7 @@
        bool = StringUtils.isEmpty(in);

-       string = StringUtils.lowerCase(in);
-       string = StringUtils.replace(in, "search", "replacement");
-       string = StringUtils.reverse(in);
-       array = StringUtils.split(in);
-       string = StringUtils.strip(in);
-       string = StringUtils.trim(in);
-       string = StringUtils.upperCase(in);
+       string = in == null ? null : in.toLowerCase();
+       string = in == null || in.isEmpty() ? in : in.replace("search", "replacement");
+       string = in == null ? null : new StringBuilder(in).reverse().toString();
+       array = in.split("\\s+");
+       string = in == null ? null : in.trim();
+       string = in == null ? null : in.trim();
+       string = in == null ? null : in.toUpperCase();
    }
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
    activeRecipe("org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes")
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
        activeRecipe("org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes")
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
            <recipe>org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe PlexusStringUtilsRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
