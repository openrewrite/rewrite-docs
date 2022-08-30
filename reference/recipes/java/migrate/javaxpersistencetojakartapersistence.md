# Migrate deprecated `javax.persistence` packages to `jakarta.persistence`

** org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation_

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
    id("org.openrewrite.rewrite") version("5.27.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence")
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
        <version>4.32.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.persistence`
  * artifactId: `jakarta.persistence-api`
  * version: `3.x`
  * onlyIfUsing: `javax.persistence.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.persistence`
  * artifactId: `jakarta.persistence-api`
  * newVersion: `3.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.persistence`
  * newPackageName: `jakarta.persistence`
  * recursive: `true`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.persistence`
  * artifactId: `javax.persistence-api`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `org.eclipse.persistence`
  * artifactId: `javax.persistence`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence
displayName: Migrate deprecated `javax.persistence` packages to `jakarta.persistence`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.persistence
      artifactId: jakarta.persistence-api
      version: 3.x
      onlyIfUsing: javax.persistence.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.persistence
      artifactId: jakarta.persistence-api
      newVersion: 3.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.persistence
      newPackageName: jakarta.persistence
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.persistence
      artifactId: javax.persistence-api
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.eclipse.persistence
      artifactId: javax.persistence

```
{% endtab %}
{% endtabs %}