# AssertJ best practices

**org.openrewrite.java.testing.assertj.Assertj**

_Migrates JUnit asserts to AssertJ and applies best practices to assertions._

### Tags

* testing
* assertj

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.18.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.18.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to AssertJ assertions](../../../java/testing/hamcrest/migratehamcresttoassertj.md)
* [Migrate JUnit asserts to AssertJ](../../../java/testing/assertj/junittoassertj.md)
* [Statically import AssertJ's `assertThat`](../../../java/testing/assertj/staticimports.md)
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertions.md)
* [Shorten AssertJ assertions](../../../java/testing/assertj/simplifyassertjassertions.md)
* [Refaster rules related to AssertJ assertions over `BigDecimal`s](../../../tech/picnic/errorprone/refasterrules/assertjbigdecimalrulesrecipes.md)
* [`AssertJBigIntegerRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjbigintegerrulesrecipes.md)
* [`AssertJBooleanRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjbooleanrulesrecipes.md)
* [`AssertJByteRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjbyterulesrecipes.md)
* [`AssertJCharSequenceRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjcharsequencerulesrecipes.md)
* [`AssertJDoubleRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjdoublerulesrecipes.md)
* [`AssertJFloatRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjfloatrulesrecipes.md)
* [`AssertJIntegerRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjintegerrulesrecipes.md)
* [`AssertJLongRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjlongrulesrecipes.md)
* [`AssertJNumberRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjnumberrulesrecipes.md)
* [`AssertJPrimitiveRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjprimitiverulesrecipes.md)
* [Refaster rules related to AssertJ expressions and statements](../../../tech/picnic/errorprone/refasterrules/assertjrulesrecipes.md)
* [`AssertJShortRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjshortrulesrecipes.md)
* [`AssertJStringRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes.md)
* [Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype](../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes.md)
* [Collapse consecutive `assertThat` statements](../../../java/testing/assertj/collapseconsecutiveassertthatstatements.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.Assertj
displayName: AssertJ best practices
description: Migrates JUnit asserts to AssertJ and applies best practices to assertions.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ
  - org.openrewrite.java.testing.assertj.JUnitToAssertj
  - org.openrewrite.java.testing.assertj.StaticImports
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions
  - org.openrewrite.java.testing.assertj.SimplifyAssertJAssertions
  - tech.picnic.errorprone.refasterrules.AssertJBigDecimalRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJBigIntegerRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJBooleanRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJByteRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJDoubleRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJFloatRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJIntegerRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJLongRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJPrimitiveRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJShortRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes
  - org.openrewrite.java.testing.assertj.CollapseConsecutiveAssertThatStatements

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.18.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.18.0")
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
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.18.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
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
            <recipe>org.openrewrite.java.testing.assertj.Assertj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.18.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.Assertj -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Assertj
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.Assertj)

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


## Contributors
[Tim te Beek](mailto:tim@moderne.io), [Aleksandar A Simpson](mailto:alek@asu.me), Marvin, [Knut Wannheden](mailto:knut@moderne.io), [Greg Adams](mailto:greg@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Yeikel, Patrick Way, [Patrick](mailto:patway99@gmail.com), Adriano Machado, [SMIT MALKAN](mailto:smitmalkan99@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Philippe GRANET](mailto:philippe.granet@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Jeroen Meijer](mailto:jjgmeijer@gmail.com), Ties van de Ven, [Aaron Gershman](mailto:aegershman@gmail.com), [Shivani Sharma](mailto:s.happyrose@gmail.com), timo-abele, [Scott Jungling](mailto:scott.jungling@gmail.com), [Michael Keppler](mailto:bananeweizen@gmx.de)
