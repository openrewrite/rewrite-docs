# Migrate deprecated `javax.annotation` packages to `jakarta.annotation`

** org.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* annotation
* javax
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.9.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.9.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.9.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.9.1")
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
        <version>4.31.3</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.9.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.annotation`
  * artifactId: `jakarta.annotation-api`
  * version: `2.x`
  * onlyIfUsing: `javax.annotation.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.annotation`
  * artifactId: `jakarta.annotation-api`
  * newVersion: `2.x`
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../../java/migrate/changejavaxannotationtojakarta.md)
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.annotation`
  * artifactId: `javax.annotation-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation
displayName: Migrate deprecated `javax.annotation` packages to `jakarta.annotation`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - annotation
  - javax
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.annotation
      artifactId: jakarta.annotation-api
      version: 2.x
      onlyIfUsing: javax.annotation.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.annotation
      artifactId: jakarta.annotation-api
      newVersion: 2.x
  - org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.annotation
      artifactId: javax.annotation-api

```
{% endtab %}
{% endtabs %}
