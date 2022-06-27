# Migrate deprecated `javax.batch` packages to `jakarta.batch`

** org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* javax
* batch
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.7.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.7.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.22.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.7.0")
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
        <version>4.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.7.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.batch`
  * artifactId: `jakarta.batch-api`
  * version: `2.x`
  * onlyIfUsing: `javax.batch.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.batch`
  * artifactId: `jakarta.batch-api`
  * newVersion: `2.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.batch`
  * newPackageName: `jakarta.batch`
  * recursive: `true`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.batch`
  * artifactId: `javax.batch-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch
displayName: Migrate deprecated `javax.batch` packages to `jakarta.batch`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - javax
  - batch
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.batch
      artifactId: jakarta.batch-api
      version: 2.x
      onlyIfUsing: javax.batch.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.batch
      artifactId: jakarta.batch-api
      newVersion: 2.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.batch
      newPackageName: jakarta.batch
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.batch
      artifactId: javax.batch-api

```
{% endtab %}
{% endtabs %}
