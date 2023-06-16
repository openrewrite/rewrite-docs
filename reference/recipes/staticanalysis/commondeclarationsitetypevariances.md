# Properly use declaration-site type variance for well-known types

**org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances**

_When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types._

### Tags

* RSPEC-1217

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances
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
  - RSPEC-1217
recipeList:
  - org.openrewrite.staticanalysis.DeclarationSiteTypeVariance:
      variantTypes: [java.util.function.Consumer<IN>, java.util.function.BiPredicate<IN, IN>, java.util.function.DoubleFunction<OUT>, java.util.function.Function<IN, OUT>, java.util.function.IntFunction<OUT>, java.util.function.LongFunction<OUT>, java.util.function.ObjDoubleConsumer<IN>, java.util.function.ObjIntConsumer<IN>, java.util.function.ObjLongConsumer<IN>, java.util.function.Predicate<IN>, java.util.function.Supplier<OUT>, java.util.function.ToDoubleBiFunction<IN, IN>, java.util.function.ToDoubleFunction<IN>, java.util.function.ToIntBiFunction<IN, IN>, java.util.function.ToIntFunction<IN>, java.util.function.ToLongBiFunction<IN, IN>, java.util.function.ToLongFunction<IN>]

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
