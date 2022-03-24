# Migrate deprecated `javax.annotation` packages to `jakarta.annotation`

** org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta**
_Change type of classes in the `javax.annotation` package to jakarta._

### Tags

* javax
* batch
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.3.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.3.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.18.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.3.0")
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
        <version>4.21.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.3.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.Generated`
  * newFullyQualifiedTypeName: `jakarta.annotation.Generated`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.ManagedBean`
  * newFullyQualifiedTypeName: `jakarta.annotation.ManagedBean`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.PostConstruct`
  * newFullyQualifiedTypeName: `jakarta.annotation.PostConstruct`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.PreDestroy`
  * newFullyQualifiedTypeName: `jakarta.annotation.PreDestroy`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.Priority`
  * newFullyQualifiedTypeName: `jakarta.annotation.Priority`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.Resource`
  * newFullyQualifiedTypeName: `jakarta.annotation.Resource`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.Resources`
  * newFullyQualifiedTypeName: `jakarta.annotation.Resources`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta
displayName: Migrate deprecated `javax.annotation` packages to `jakarta.annotation`
description: Change type of classes in the `javax.annotation` package to jakarta.
tags:
  - javax
  - batch
  - jakarta
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Generated
      newFullyQualifiedTypeName: jakarta.annotation.Generated
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.ManagedBean
      newFullyQualifiedTypeName: jakarta.annotation.ManagedBean
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.PostConstruct
      newFullyQualifiedTypeName: jakarta.annotation.PostConstruct
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.PreDestroy
      newFullyQualifiedTypeName: jakarta.annotation.PreDestroy
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Priority
      newFullyQualifiedTypeName: jakarta.annotation.Priority
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Resource
      newFullyQualifiedTypeName: jakarta.annotation.Resource
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.Resources
      newFullyQualifiedTypeName: jakarta.annotation.Resources

```
{% endtab %}
{% endtabs %}
