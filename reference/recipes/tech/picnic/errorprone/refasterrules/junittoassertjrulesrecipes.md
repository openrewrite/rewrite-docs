# Refaster rules to replace JUnit assertions with AssertJ equivalents

**tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes**

_<p>Note that, while both libraries throw an `AssertionError` in case of an assertion
 failure, the exact subtype used generally differs. [Source](https://error-prone.picnic.tech/refasterrules/JUnitToAssertJRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.8.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Refaster template `JUnitToAssertJRules.AssertThatIsTrue`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatistruerecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsTrue`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringistruerecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsTrue`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplieristruerecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatIsFalse`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisfalserecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsFalse`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisfalserecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsFalse`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisfalserecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnullrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisnullrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisnullrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNotNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnotnullrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsNotNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisnotnullrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsNotNull`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisnotnullrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatIsSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatissameasrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringissameasrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierissameasrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNotSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnotsameasrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageStringIsNotSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagestringisnotsameasrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageSupplierIsNotSameAs`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagesupplierisnotsameasrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatCodeDoesNotThrowAnyException`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcodedoesnotthrowanyexceptionrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatCodeWithFailMessageStringDoesNotThrowAnyException`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcodewithfailmessagestringdoesnotthrowanyexceptionrecipe.md)
* [Refaster template `JUnitToAssertJRules.AssertThatCodeWithFailMessageSupplierDoesNotThrowAnyException`](../../../../tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcodewithfailmessagesupplierdoesnotthrowanyexceptionrecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
       ---
       type: specs.openrewrite.org/v1beta/recipe
       name: tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes
       displayName: Refaster rules to replace JUnit assertions with AssertJ equivalents
       description: <p>Note that, while both libraries throw an `AssertionError` in case of an assertion
failure, the exact subtype used generally differs. [Source](https://error-prone.picnic.tech/refasterrules/JUnitToAssertJRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeDoesNotThrowAnyExceptionRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeWithFailMessageStringDoesNotThrowAnyExceptionRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCodeWithFailMessageSupplierDoesNotThrowAnyExceptionRecipe

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
    activeRecipe("tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes")
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
        activeRecipe("tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JUnitToAssertJRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes)

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

