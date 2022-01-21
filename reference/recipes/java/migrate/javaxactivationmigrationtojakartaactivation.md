# Migrate deprecated `javax.activation` packages to `jakarta.activation`

** org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* javax
* activation
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.0.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.0.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.0.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.5")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.0.0")
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
        <version>4.17.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.0.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.activation`
  * artifactId: `jakarta.activation-api`
  * version: `2.x`
  * onlyIfUsing: `javax.activation.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.activation`
  * artifactId: `jakarta.activation-api`
  * newVersion: `2.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.activation`
  * newPackageName: `jakarta.activation`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.activation`
  * artifactId: `javax.activation-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation
displayName: Migrate deprecated `javax.activation` packages to `jakarta.activation`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - javax
  - activation
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.activation
      artifactId: jakarta.activation-api
      version: 2.x
      onlyIfUsing: javax.activation.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.activation
      artifactId: jakarta.activation-api
      newVersion: 2.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.activation
      newPackageName: jakarta.activation
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.activation
      artifactId: javax.activation-api

```
{% endtab %}
{% endtabs %}
