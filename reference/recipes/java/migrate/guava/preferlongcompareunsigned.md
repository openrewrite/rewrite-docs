# Prefer `Long#compareUnsigned`

** org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned**
_This method exists in the Java standard library now._

### Tags

* guava

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.13.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.13.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.13.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.13.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.13.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `com.google.common.primitives.UnsignedLongs compare(int, int)`
  * newMethodName: `compareUnsigned`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `com.google.common.primitives.UnsignedLongs compareUnsigned(int, int)`
  * fullyQualifiedTargetTypeName: `java.lang.Long`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.PreferLongCompareUnsigned
displayName: Prefer `Long#compareUnsigned`
description: This method exists in the Java standard library now.
tags:
  - guava
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.primitives.UnsignedLongs compare(int, int)
      newMethodName: compareUnsigned
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: com.google.common.primitives.UnsignedLongs compareUnsigned(int, int)
      fullyQualifiedTargetTypeName: java.lang.Long

```
{% endtab %}
{% endtabs %}
