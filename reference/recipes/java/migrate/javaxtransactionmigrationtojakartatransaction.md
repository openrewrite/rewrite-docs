# Migrate deprecated `javax.transaction` packages to `jakarta.transaction`

** org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* javax
* transaction
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.4.0")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.transaction`
  * artifactId: `jakarta.transaction-api`
  * version: `2.x`
  * onlyIfUsing: `javax.transaction.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.transaction`
  * artifactId: `jakarta.transaction-api`
  * newVersion: `2.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.transaction`
  * newPackageName: `jakarta.transaction`
  * recursive: `true`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.transaction`
  * artifactId: `javax.transaction-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction
displayName: Migrate deprecated `javax.transaction` packages to `jakarta.transaction`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - javax
  - transaction
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.transaction
      artifactId: jakarta.transaction-api
      version: 2.x
      onlyIfUsing: javax.transaction.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.transaction
      artifactId: jakarta.transaction-api
      newVersion: 2.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.transaction
      newPackageName: jakarta.transaction
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.transaction
      artifactId: javax.transaction-api

```
{% endtab %}
{% endtabs %}
