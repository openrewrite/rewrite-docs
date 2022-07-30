# Prefer `Math#subtractExact`

** org.openrewrite.java.migrate.guava.PreferMathSubtractExact**
_This method exists in the Java standard library now._

### Tags

* guava

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.PreferMathSubtractExact")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.8.0")
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
        <version>4.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.guava.PreferMathSubtractExact</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.guava.PreferMathSubtractExact`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `com.google.common.math.IntMath checkedSubtract(..)`
  * newMethodName: `subtractExact`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `com.google.common.math.IntMath subtractExact(..)`
  * fullyQualifiedTargetTypeName: `java.lang.Math`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.PreferMathSubtractExact
displayName: Prefer `Math#subtractExact`
description: This method exists in the Java standard library now.
tags:
  - guava
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.math.IntMath checkedSubtract(..)
      newMethodName: subtractExact
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: com.google.common.math.IntMath subtractExact(..)
      fullyQualifiedTargetTypeName: java.lang.Math

```
{% endtab %}
{% endtabs %}
