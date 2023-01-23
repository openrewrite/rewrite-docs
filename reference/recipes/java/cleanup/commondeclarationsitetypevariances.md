# Properly use declaration-site type variance for well-known types

**org.openrewrite.java.cleanup.CommonDeclarationSiteTypeVariances**
_When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types._

### Tags

* RSPEC-1217

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.35.0-SNAPSHOT/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.35.0-SNAPSHOT


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.CommonDeclarationSiteTypeVariances")
}

repositories {
    mavenCentral()
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.CommonDeclarationSiteTypeVariances</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -DactiveRecipes=org.openrewrite.java.cleanup.CommonDeclarationSiteTypeVariances
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.cleanup.CommonDeclarationSiteTypeVariances`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Properly use declaration-site type variance](../../java/cleanup/declarationsitetypevariance.md)
  * variantTypes: `[java.util.function.Consumer<IN>, java.util.function.BiPredicate<IN, IN>, java.util.function.DoubleFunction<OUT>, java.util.function.Function<IN, OUT>, java.util.function.IntFunction<OUT>, java.util.function.LongFunction<OUT>, java.util.function.ObjDoubleConsumer<IN>, java.util.function.ObjIntConsumer<IN>, java.util.function.ObjLongConsumer<IN>, java.util.function.Predicate<IN>, java.util.function.Supplier<OUT>, java.util.function.ToDoubleBiFunction<IN, IN>, java.util.function.ToDoubleFunction<IN>, java.util.function.ToIntBiFunction<IN, IN>, java.util.function.ToIntFunction<IN>, java.util.function.ToLongBiFunction<IN, IN>, java.util.function.ToLongFunction<IN>]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.cleanup.CommonDeclarationSiteTypeVariances
displayName: Properly use declaration-site type variance for well-known types
description: When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types.
tags:
  - RSPEC-1217
recipeList:
  - org.openrewrite.java.cleanup.DeclarationSiteTypeVariance:
      variantTypes: [java.util.function.Consumer<IN>, java.util.function.BiPredicate<IN, IN>, java.util.function.DoubleFunction<OUT>, java.util.function.Function<IN, OUT>, java.util.function.IntFunction<OUT>, java.util.function.LongFunction<OUT>, java.util.function.ObjDoubleConsumer<IN>, java.util.function.ObjIntConsumer<IN>, java.util.function.ObjLongConsumer<IN>, java.util.function.Predicate<IN>, java.util.function.Supplier<OUT>, java.util.function.ToDoubleBiFunction<IN, IN>, java.util.function.ToDoubleFunction<IN>, java.util.function.ToIntBiFunction<IN, IN>, java.util.function.ToIntFunction<IN>, java.util.function.ToLongBiFunction<IN, IN>, java.util.function.ToLongFunction<IN>]

```
{% endtab %}
{% endtabs %}
