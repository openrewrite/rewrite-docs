---
sidebar_label: "`MavenSharedStringUtils` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `MavenSharedStringUtils` Refaster recipes

**org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.apache.maven.shared.MavenSharedStringUtils`._

## Recipe source

[GitHub: rewrite-apache-2.21.0.jar](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/maven/shared/MavenSharedStringUtils.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `StringUtils.abbreviate(String, int)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$abbreviaterecipe)
* [Replace `StringUtils.capitalise(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$capitaliserecipe)
* [Replace `StringUtils.defaultString(Object)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$defaultstringrecipe)
* [Replace `StringUtils.defaultString(Object, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$defaultstringfallbackrecipe)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$deletewhitespacerecipe)
* [Replace `StringUtils.equalsIgnoreCase(String, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$equalsignorecaserecipe)
* [Replace `StringUtils.equals(String, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$equalsrecipe)
* [Replace `StringUtils.lowerCase(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$lowercaserecipe)
* [Replace `StringUtils.replace(String, String, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$replacerecipe)
* [Replace `StringUtils.reverse(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$reverserecipe)
* [Replace `StringUtils.split(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$splitrecipe)
* [Replace `StringUtils.strip(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$striprecipe)
* [Replace `StringUtils.trim(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$trimrecipe)
* [Replace `StringUtils.upperCase(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$uppercaserecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes
displayName: `MavenSharedStringUtils` Refaster recipes
description: |
  Refaster template recipes for `org.openrewrite.apache.maven.shared.MavenSharedStringUtils`.
recipeList:
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$CapitaliseRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$SplitRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$StripRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$TrimRecipe
  - org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes$UppercaseRecipe

```
</TabItem>
</Tabs>
## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.maven.shared.utils.StringUtils;

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
import org.apache.maven.shared.utils.StringUtils;

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
        bool = StringUtils.isEmpty(in);

        string = in == null ? null : in.toLowerCase();
        string = in == null || in.isEmpty() ? in : in.replace("search", "replacement");
        string = in == null ? null : new StringBuffer(in).reverse().toString();
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
import org.apache.maven.shared.utils.StringUtils;

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
@@ -22,7 +24,7 @@
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
+       string = in == null ? null : new StringBuffer(in).reverse().toString();
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
            <recipe>org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MavenSharedStringUtilsRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-apache:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes" />

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
