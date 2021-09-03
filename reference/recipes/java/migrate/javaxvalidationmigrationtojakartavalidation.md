# Migrate deprecated `javax.validation` packages to `jakarta.validation`

** org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* javax
* validation
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.9.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.8.0")
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
        <version>4.11.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.validation`
  * artifactId: `jakarta.validation-api`
  * newVersion: `3.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.validation`
  * newPackageName: `jakarta.validation`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.validation`
  * artifactId: `validation-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation
displayName: Migrate deprecated `javax.validation` packages to `jakarta.validation`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - javax
  - validation
  - jakarta
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.validation
      artifactId: jakarta.validation-api
      newVersion: 3.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.validation
      newPackageName: jakarta.validation
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.validation
      artifactId: validation-api

```
{% endtab %}
{% endtabs %}
