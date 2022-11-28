# Migrate deprecated `javax.batch` packages to `jakarta.batch`

**org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* javax
* batch
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.14.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.14.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.14.1")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.14.1</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.14.1 \
  -DactiveRecipes=org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.batch`
  * artifactId: `jakarta.batch-api`
  * version: `2.x`
  * onlyIfUsing: `javax.batch.*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.batch`
  * artifactId: `jakarta.batch-api`
  * newVersion: `2.x`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `javax.batch`
  * newPackageName: `jakarta.batch`
  * recursive: `true`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `javax.batch`
  * artifactId: `javax.batch-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch
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
