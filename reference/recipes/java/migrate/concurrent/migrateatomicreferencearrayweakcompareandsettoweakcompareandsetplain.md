# Use `AtomicReferenceArray#weakCompareAndSetPlain(int, T, T)`

** org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceArrayWeakCompareAndSetToWeakCompareAndSetPlain**
_`AtomicReferenceArray#weakCompareAndSet(int, T, T)` was deprecated in Java 9._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceArrayWeakCompareAndSetToWeakCompareAndSetPlain")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.4.0")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceArrayWeakCompareAndSetToWeakCompareAndSetPlain</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceArrayWeakCompareAndSetToWeakCompareAndSetPlain`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.concurrent.atomic.AtomicReferenceArray weakCompareAndSet(int, ..)`
  * newMethodName: `weakCompareAndSetPlain`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceArrayWeakCompareAndSetToWeakCompareAndSetPlain
displayName: Use `AtomicReferenceArray#weakCompareAndSetPlain(int, T, T)`
description: `AtomicReferenceArray#weakCompareAndSet(int, T, T)` was deprecated in Java 9.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.concurrent.atomic.AtomicReferenceArray weakCompareAndSet(int, ..)
      newMethodName: weakCompareAndSetPlain

```
{% endtab %}
{% endtabs %}
