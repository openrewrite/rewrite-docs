# Migrate to Struts 6.0 constants

**org.openrewrite.java.struts.migrate6.MigrateStruts6Constants**

_All Xwork constants had been already deprecated, with this version all of them have been removed and Struts constants have been used instead._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-struts/blob/main/src/main/resources/META-INF/rewrite/struts6.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-struts/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-struts/0.6.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-struts
* version: 0.6.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.collection`
  * oldValue: `collectionConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.date`
  * oldValue: `dateConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.number`
  * oldValue: `numberConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.string`
  * oldValue: `stringConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.converter.array`
  * oldValue: `arrayConverter`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.devMode`
  * oldValue: `devMode`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.logMissingProperties`
  * oldValue: `logMissingProperties`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.enableExpressionCache`
  * oldValue: `enableOGNLExpressionCache`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.enableEvalExpression`
  * oldValue: `enableOGNLEvalExpression`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.configuration.xml.reload`
  * oldValue: `reloadXmlConfiguration`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.allowStaticMethodAccess`
  * oldValue: `allowStaticMethodAccess`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.excludedClasses`
  * oldValue: `ognlExcludedClasses`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.excludedPackageNamePatterns`
  * oldValue: `ognlExcludedPackageNamePatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.excludedPackageNames`
  * oldValue: `ognlExcludedPackageNames`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.additional.excludedPatterns`
  * oldValue: `additionalExcludedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.additional.acceptedPatterns`
  * oldValue: `additionalAcceptedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.override.excludedPatterns`
  * oldValue: `overrideExcludedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.override.acceptedPatterns`
  * oldValue: `overrideAcceptedPatterns`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.chaining.copyErrors`
  * oldValue: `struts.xwork.chaining.copyErrors`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.chaining.copyFieldErrors`
  * oldValue: `struts.xwork.chaining.copyFieldErrors`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.chaining.copyMessages`
  * oldValue: `struts.xwork.chaining.copyMessages`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.ognl.autoGrowthCollectionLimit`
  * oldValue: `xwork.autoGrowCollectionLimit`
* [Change XML attribute](../../../xml/changetagattribute.md)
  * elementName: `constant`
  * attributeName: `name`
  * newValue: `struts.objectFactory.classloader`
  * oldValue: `objectFactory.classloader`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.struts.migrate6.MigrateStruts6Constants
displayName: Migrate to Struts 6.0 constants
description: All Xwork constants had been already deprecated, with this version all of them have been removed and Struts constants have been used instead.
recipeList:
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.collection
      oldValue: collectionConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.date
      oldValue: dateConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.number
      oldValue: numberConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.string
      oldValue: stringConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.converter.array
      oldValue: arrayConverter
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.devMode
      oldValue: devMode
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.logMissingProperties
      oldValue: logMissingProperties
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.enableExpressionCache
      oldValue: enableOGNLExpressionCache
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.enableEvalExpression
      oldValue: enableOGNLEvalExpression
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.configuration.xml.reload
      oldValue: reloadXmlConfiguration
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.allowStaticMethodAccess
      oldValue: allowStaticMethodAccess
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.excludedClasses
      oldValue: ognlExcludedClasses
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.excludedPackageNamePatterns
      oldValue: ognlExcludedPackageNamePatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.excludedPackageNames
      oldValue: ognlExcludedPackageNames
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.additional.excludedPatterns
      oldValue: additionalExcludedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.additional.acceptedPatterns
      oldValue: additionalAcceptedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.override.excludedPatterns
      oldValue: overrideExcludedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.override.acceptedPatterns
      oldValue: overrideAcceptedPatterns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.chaining.copyErrors
      oldValue: struts.xwork.chaining.copyErrors
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.chaining.copyFieldErrors
      oldValue: struts.xwork.chaining.copyFieldErrors
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.chaining.copyMessages
      oldValue: struts.xwork.chaining.copyMessages
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.ognl.autoGrowthCollectionLimit
      oldValue: xwork.autoGrowCollectionLimit
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: constant
      attributeName: name
      newValue: struts.objectFactory.classloader
      oldValue: objectFactory.classloader

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-struts:0.6.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.struts.migrate6.MigrateStruts6Constants")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-struts:0.6.2")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-struts:0.6.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.struts.migrate6.MigrateStruts6Constants")
        exportDatatables = true
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
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
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
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.struts.migrate6.MigrateStruts6Constants</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-struts</artifactId>
            <version>0.6.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-struts:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.struts.migrate6.MigrateStruts6Constants -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateStruts6Constants
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.struts.migrate6.MigrateStruts6Constants)

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

