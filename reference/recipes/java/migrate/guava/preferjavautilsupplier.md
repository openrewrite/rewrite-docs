# Prefer `java.util.function.Supplier`

** org.openrewrite.java.migrate.guava.PreferJavaUtilSupplier**
_Guava's `Supplier` extends `java.util.function.Supplier`._

### Tags

* guava, RSPEC-4738

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.5.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.guava.PreferJavaUtilSupplier")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.5.0")
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
            <recipe>org.openrewrite.java.migrate.guava.PreferJavaUtilSupplier</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.PreferJavaUtilSupplier`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `com.google.common.base.Supplier`
  * newFullyQualifiedTypeName: `java.util.function.Supplier`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.PreferJavaUtilSupplier
displayName: Prefer `java.util.function.Supplier`
description: Guava's `Supplier` extends `java.util.function.Supplier`.
tags:
  - guava, RSPEC-4738
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.base.Supplier
      newFullyQualifiedTypeName: java.util.function.Supplier

```
{% endtab %}
{% endtabs %}
