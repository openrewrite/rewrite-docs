---
sidebar_label: "AssertJ best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AssertJ best practices

**org.openrewrite.java.testing.assertj.Assertj**

_Migrates JUnit asserts to AssertJ and applies best practices to assertions._

### Tags

* testing
* assertj

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.20.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to AssertJ assertions](../../../java/testing/hamcrest/migratehamcresttoassertj)
* [Migrate JUnit asserts to AssertJ](../../../java/testing/assertj/junittoassertj)
* [Statically import AssertJ's `assertThat`](../../../java/testing/assertj/staticimports)
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertions)
* [Shorten AssertJ assertions](../../../java/testing/assertj/simplifyassertjassertions)
* [Refaster rules related to AssertJ assertions over `BigDecimal`s](../../../tech/picnic/errorprone/refasterrules/assertjbigdecimalrulesrecipes)
* [`AssertJBigIntegerRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjbigintegerrulesrecipes)
* [`AssertJBooleanRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjbooleanrulesrecipes)
* [`AssertJByteRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjbyterulesrecipes)
* [`AssertJCharSequenceRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjcharsequencerulesrecipes)
* [`AssertJDoubleRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjdoublerulesrecipes)
* [`AssertJFloatRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjfloatrulesrecipes)
* [`AssertJIntegerRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjintegerrulesrecipes)
* [`AssertJLongRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjlongrulesrecipes)
* [`AssertJNumberRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjnumberrulesrecipes)
* [`AssertJPrimitiveRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjprimitiverulesrecipes)
* [Refaster rules related to AssertJ expressions and statements](../../../tech/picnic/errorprone/refasterrules/assertjrulesrecipes)
* [`AssertJShortRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjshortrulesrecipes)
* [`AssertJStringRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes)
* [Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype](../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes)
* [Collapse consecutive `assertThat` statements](../../../java/testing/assertj/collapseconsecutiveassertthatstatements)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

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
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.20.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.20.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.25.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.20.0")
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
        <version>5.42.0</version>
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
            <version>2.20.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.Assertj -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Assertj
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.Assertj">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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
[Tim te Beek](mailto:tim@moderne.io), [Aleksandar A Simpson](mailto:alek@asu.me), Marvin, [Knut Wannheden](mailto:knut@moderne.io), [Greg Adams](mailto:greg@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Yeikel, Patrick Way, [Patrick](mailto:patway99@gmail.com), Adriano Machado, [SMIT MALKAN](mailto:smitmalkan99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Philippe GRANET](mailto:philippe.granet@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Jeroen Meijer](mailto:jjgmeijer@gmail.com), [Aaron Gershman](mailto:aegershman@gmail.com), Ties van de Ven, [Shivani Sharma](mailto:s.happyrose@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), timo-abele, [Scott Jungling](mailto:scott.jungling@gmail.com), [Michael Keppler](mailto:bananeweizen@gmx.de)
