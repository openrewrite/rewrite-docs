# Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`

** org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind**
_Java EE has been rebranded to Jakarta EE, necessitating a package relocation._

### Tags

* jaxb
* javax
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.11.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.11.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.11.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.11.0")
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
        <version>4.34.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.11.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.11.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `3.x`
  * onlyIfUsing: `javax.xml.bind.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `3.x`
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * version: `3.x`
  * scope: `runtime`
  * onlyIfUsing: `javax.xml.bind.*`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `org.glassfish.jaxb`
  * artifactId: `jaxb-runtime`
  * newVersion: `3.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `javax.xml.bind`
  * newPackageName: `jakarta.xml.bind`
  * recursive: `true`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `javax.xml.bind`
  * artifactId: `jaxb-api`
* [Remove Maven dependency](../../maven/removedependency.md)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-impl`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind
displayName: Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`
description: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
tags:
  - jaxb
  - javax
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: 3.x
      onlyIfUsing: javax.xml.bind.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: 3.x
  - org.openrewrite.maven.AddDependency:
      groupId: org.glassfish.jaxb
      artifactId: jaxb-runtime
      version: 3.x
      scope: runtime
      onlyIfUsing: javax.xml.bind.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.glassfish.jaxb
      artifactId: jaxb-runtime
      newVersion: 3.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: javax.xml.bind
      newPackageName: jakarta.xml.bind
      recursive: true
  - org.openrewrite.maven.RemoveDependency:
      groupId: javax.xml.bind
      artifactId: jaxb-api
  - org.openrewrite.maven.RemoveDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-impl

```
{% endtab %}
{% endtabs %}
