# Migrate deprecated `javax.annotation.sql` packages to `jakarta.annotation.sql`

** org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta**
_Change type of classes in the `javax.annotation.sql` package to jakarta._

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
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta")
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
        <version>4.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.sql.DataSourceDefinition`
  * newFullyQualifiedTypeName: `jakarta.annotation.sql.DataSourceDefinition`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.annotation.sql.DataSourceDefinitions`
  * newFullyQualifiedTypeName: `jakarta.annotation.sql.DataSourceDefinitions`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta
displayName: Migrate deprecated `javax.annotation.sql` packages to `jakarta.annotation.sql`
description: Change type of classes in the `javax.annotation.sql` package to jakarta.
tags:
  - javax
  - batch
  - jakarta
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.sql.DataSourceDefinition
      newFullyQualifiedTypeName: jakarta.annotation.sql.DataSourceDefinition
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.annotation.sql.DataSourceDefinitions
      newFullyQualifiedTypeName: jakarta.annotation.sql.DataSourceDefinitions

```
{% endtab %}
{% endtabs %}
