# Migrate deprecated `javax.annotation` packages to `jakarta.annotation`

** org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`._

### Tags

* javax
* batch
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.1.0")
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
        <version>4.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.1.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../../java/migrate/javaxannotationpackagetojakarta.md)
* [Migrate deprecated `javax.annotation.security` packages to `jakarta.annotation.security`](../../java/migrate/javaxannotationsecuritypackagetojakarta.md)
* [Migrate deprecated `javax.annotation.sql` packages to `jakarta.annotation.sql`](../../java/migrate/javaxannotationsqlpackagetojakarta.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta
displayName: Migrate deprecated `javax.annotation` packages to `jakarta.annotation`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`.
tags:
  - javax
  - batch
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta
  - org.openrewrite.java.migrate.JavaxAnnotationSecurityPackageToJakarta
  - org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta

```
{% endtab %}
{% endtabs %}
