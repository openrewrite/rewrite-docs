# Quarkus 1.13 migration from Quarkus 1.11

** org.openrewrite.java.quarkus.Quarkus1to1\_13Migration**
_Migrates Quarkus 1.11 to 1.13._

## Source

[Github](https://github.com/openrewrite/rewrite-quarkus), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-quarkus/1.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 1.5.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-quarkus:1.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.quarkus.Quarkus1to1_13Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:1.5.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.quarkus.Quarkus1to1_13Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>1.5.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.quarkus.Quarkus1to1_13Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.dev.instrumentation`
  * newPropertyKey: `quarkus.live-reload.instrumentation`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.Multi collectItems()`
  * newMethodName: `collect`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.Multi groupItems()`
  * newMethodName: `group`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.Multi transform()`
  * newMethodName: `select`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.MultiTransform byTakingFirstItems(..)`
  * newMethodName: `first`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.MultiTransform byFilteringItemsWith(..)`
  * newMethodName: `where`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.Multi subscribeOn(java.util.concurrent.Executor)`
  * newMethodName: `runSubscriptionOn`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.Uni subscribeOn(java.util.concurrent.Executor)`
  * newMethodName: `runSubscriptionOn`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnFailure apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnItem apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnItemOrFailure apply(java.util.function.BiFunction)`
  * newMethodName: `transform`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.UniOnNotNull apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.MultiOnFailure apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Change method name](../../java/changemethodname.md)
  * methodPattern: `io.smallrye.mutiny.groups.MultiOnItem apply(java.util.function.Function)`
  * newMethodName: `transform`
* [Use `@ConfigMapping`](../../java/quarkus/configpropertiestoconfigmapping.md)
* [Use Mutiny `multi.toHotStream()`](../../java/quarkus/multitransformhotstreamtomultihotstream.md)
* [Use `native` profile in `quarkus-maven-plugin`](../../java/quarkus/migratequarkusmavenpluginnativeimagegoal.md)
* [Configure `quarkus-maven-plugin` with reasonable defaults](../../java/quarkus/configurequarkusmavenpluginwithreasonabledefaults.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.quarkus.Quarkus1to1_13Migration
displayName: Quarkus 1.13 migration from Quarkus 1.11
description: Migrates Quarkus 1.11 to 1.13.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.dev.instrumentation
      newPropertyKey: quarkus.live-reload.instrumentation
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi collectItems()
      newMethodName: collect
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi groupItems()
      newMethodName: group
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi transform()
      newMethodName: select
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiTransform byTakingFirstItems(..)
      newMethodName: first
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiTransform byFilteringItemsWith(..)
      newMethodName: where
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Multi subscribeOn(java.util.concurrent.Executor)
      newMethodName: runSubscriptionOn
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.Uni subscribeOn(java.util.concurrent.Executor)
      newMethodName: runSubscriptionOn
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnFailure apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnItem apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnItemOrFailure apply(java.util.function.BiFunction)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.UniOnNotNull apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiOnFailure apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: io.smallrye.mutiny.groups.MultiOnItem apply(java.util.function.Function)
      newMethodName: transform
  - org.openrewrite.java.quarkus.ConfigPropertiesToConfigMapping
  - org.openrewrite.java.quarkus.MultiTransformHotStreamToMultiHotStream
  - org.openrewrite.java.quarkus.MigrateQuarkusMavenPluginNativeImageGoal
  - org.openrewrite.java.quarkus.ConfigureQuarkusMavenPluginWithReasonableDefaults

```
{% endtab %}
{% endtabs %}
