# Properly use declaration-site type variance for well-known types

**org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances**

_When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types._

### Tags

* [RSPEC-S1217](https://sonarsource.github.io/rspec/#/rspec/S1217)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.8.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.8.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.8.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.8.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.14.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.8.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.8.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe CommonDeclarationSiteTypeVariances
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Properly use declaration-site type variance](../staticanalysis/declarationsitetypevariance.md)
  * variantTypes: `[java.util.function.Consumer<IN>, java.util.function.BiPredicate<IN, IN>, java.util.function.DoubleFunction<OUT>, java.util.function.Function<IN, OUT>, java.util.function.IntFunction<OUT>, java.util.function.LongFunction<OUT>, java.util.function.ObjDoubleConsumer<IN>, java.util.function.ObjIntConsumer<IN>, java.util.function.ObjLongConsumer<IN>, java.util.function.Predicate<IN>, java.util.function.Supplier<OUT>, java.util.function.ToDoubleBiFunction<IN, IN>, java.util.function.ToDoubleFunction<IN>, java.util.function.ToIntBiFunction<IN, IN>, java.util.function.ToIntFunction<IN>, java.util.function.ToLongBiFunction<IN, IN>, java.util.function.ToLongFunction<IN>]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances
displayName: Properly use declaration-site type variance for well-known types
description: When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types.
tags:
  - RSPEC-S1217
recipeList:
  - org.openrewrite.staticanalysis.DeclarationSiteTypeVariance:
      variantTypes: [java.util.function.Consumer<IN>, java.util.function.BiPredicate<IN, IN>, java.util.function.DoubleFunction<OUT>, java.util.function.Function<IN, OUT>, java.util.function.IntFunction<OUT>, java.util.function.LongFunction<OUT>, java.util.function.ObjDoubleConsumer<IN>, java.util.function.ObjIntConsumer<IN>, java.util.function.ObjLongConsumer<IN>, java.util.function.Predicate<IN>, java.util.function.Supplier<OUT>, java.util.function.ToDoubleBiFunction<IN, IN>, java.util.function.ToDoubleFunction<IN>, java.util.function.ToIntBiFunction<IN, IN>, java.util.function.ToIntFunction<IN>, java.util.function.ToLongBiFunction<IN, IN>, java.util.function.ToLongFunction<IN>]

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Sam Snyder](mailto:sam@moderne.io)
