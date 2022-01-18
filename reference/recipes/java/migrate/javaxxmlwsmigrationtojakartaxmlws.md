# Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`

** org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* javax
* jaxws
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
    activeRecipe("org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs")
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
        <version>4.17.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * version: `3.x`
  * onlyIfUsing: `javax.xml.ws.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * newVersion: `3.x`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-rt`
  * version: `3.x`
  * scope: `runtime`
  * onlyIfUsing: `javax.xml.ws.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `com.sun.xml.ws`
  * artifactId: `jaxws-rt`
  * newVersion: `3.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.xml.ws`
  * newPackageName: `jakarta.xml.ws`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.xml.ws`
  * artifactId: `jaxws-api`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs
displayName: Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - javax
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      version: 3.x
      onlyIfUsing: javax.xml.ws.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      newVersion: 3.x
  - org.openrewrite.maven.AddDependency:
      groupId: com.sun.xml.ws
      artifactId: jaxws-rt
      version: 3.x
      scope: runtime
      onlyIfUsing: javax.xml.ws.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: com.sun.xml.ws
      artifactId: jaxws-rt
      newVersion: 3.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.xml.ws
      newPackageName: jakarta.xml.ws
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.xml.ws
      artifactId: jaxws-api

```
{% endtab %}
{% endtabs %}
