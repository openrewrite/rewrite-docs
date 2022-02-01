# Add explicit Inject dependencies

** org.openrewrite.java.migrate.javax.AddInjectDependencies**
_This recipe will add the necessary Inject dependencies for those projects migrating to Java 11._

### Tags

* javax
* java11
* inject
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
    id("org.openrewrite.rewrite") version("5.15.8")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.AddInjectDependencies")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.AddInjectDependencies</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.java.migrate.javax.AddInjectDependencies`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.inject`
  * artifactId: `jakarta.inject-api`
  * version: `1.0.3`
  * onlyIfUsing: `javax.inject.*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.inject`
  * artifactId: `jakarta.inject-api`
  * newVersion: `1.0.3`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddInjectDependencies
displayName: Add explicit Inject dependencies
description: This recipe will add the necessary Inject dependencies for those projects migrating to Java 11.
tags:
  - javax
  - java11
  - inject
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.inject
      artifactId: jakarta.inject-api
      version: 1.0.3
      onlyIfUsing: javax.inject.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.inject
      artifactId: jakarta.inject-api
      newVersion: 1.0.3

```
{% endtab %}
{% endtabs %}
