# Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype

**tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes**

_<p>For reasons of consistency we prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over static methods for specific exception
 types. Note that only the most common assertion expressions are rewritten here; covering all
 cases would require the implementation of an Error Prone check instead. [Source](https://error-prone.picnic.tech/refasterrules/AssertJThrowingCallableRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.8.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessagerecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessagestartingwithrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalArgumentExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessagecontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagerecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagestartingwithrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagecontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIllegalStateExceptionHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessagenotcontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagerecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagestartingwithrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagecontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByNullPointerExceptionHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessagenotcontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOException`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagerecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagestartingwithrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagecontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIOExceptionHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessagenotcontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownBy`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessage`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagerecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessageStartingWith`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagestartingwithrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessageContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagecontainingrecipe.md)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByHasMessageNotContaining`](../../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessagenotcontainingrecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
       ---
       type: specs.openrewrite.org/v1beta/recipe
       name: tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes
       displayName: Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype
       description: <p>For reasons of consistency we prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over static methods for specific exception
types. Note that only the most common assertion expressions are rewritten here; covering all
cases would require the implementation of an Error Prone check instead. [Source](https://error-prone.picnic.tech/refasterrules/AssertJThrowingCallableRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageNotContainingRecipe

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.8.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.8.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.8.0")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes")
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
        <version>5.41.0</version>
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
            <version>0.8.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AssertJThrowingCallableRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes)

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

