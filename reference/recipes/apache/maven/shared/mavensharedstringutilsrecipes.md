# `MavenSharedStringUtils` Refaster recipes

**org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.apache.maven.shared.MavenSharedStringUtils`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/maven/shared/MavenSharedStringUtils.java), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.7.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `StringUtils.abbreviate(String, int)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$abbreviaterecipe.md)
* [Replace `StringUtils.capitalise(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$capitaliserecipe.md)
* [Replace `StringUtils.defaultString(Object)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$defaultstringrecipe.md)
* [Replace `StringUtils.defaultString(Object, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$defaultstringfallbackrecipe.md)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$deletewhitespacerecipe.md)
* [Replace `StringUtils.equalsIgnoreCase(String, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$equalsignorecaserecipe.md)
* [Replace `StringUtils.equals(String, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$equalsrecipe.md)
* [Replace `StringUtils.lowerCase(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$lowercaserecipe.md)
* [Replace `StringUtils.replace(String, String, String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$replacerecipe.md)
* [Replace `StringUtils.reverse(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$reverserecipe.md)
* [Replace `StringUtils.split(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$splitrecipe.md)
* [Replace `StringUtils.strip(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$striprecipe.md)
* [Replace `StringUtils.trim(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$trimrecipe.md)
* [Replace `StringUtils.upperCase(String)` with JDK provided API](../../../apache/maven/shared/mavensharedstringutilsrecipes$uppercaserecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes
displayName: `MavenSharedStringUtils` Refaster recipes
description: Refaster template recipes for `org.openrewrite.apache.maven.shared.MavenSharedStringUtils`.
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
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.7.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}

{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.41.0</version>
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
            <version>1.7.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MavenSharedStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.maven.shared.MavenSharedStringUtilsRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

