---
sidebar_label: "Refaster rules related to AssertJ assertions over expressions that may throw a Throwable subtype"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype

**tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes**

_For reasons of consistency we prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over static methods for specific exception  types. Note that only the most common assertion expressions are rewritten here; covering all  cases would require the implementation of an Error Prone check instead. [Source](https://error-prone.picnic.tech/refasterrules/AssertJThrowingCallableRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/blob/main//issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentExceptionRootCauseHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionRootCauseHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagenotcontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionRootCauseHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagenotcontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionRootCauseHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagenotcontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByRootCauseHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagenotcontainingrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes
displayName: Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype
description: |
  For reasons of consistency we prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over static methods for specific exception
   types. Note that only the most common assertion expressions are rewritten here; covering all
   cases would require the implementation of an Error Prone check instead.
  [Source](https://error-prone.picnic.tech/refasterrules/AssertJThrowingCallableRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageNotContainingRecipe

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AssertJThrowingCallableRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes" />

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

