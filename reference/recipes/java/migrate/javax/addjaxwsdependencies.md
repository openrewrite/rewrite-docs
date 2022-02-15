# Add explicit JAX-WS dependencies

** org.openrewrite.java.migrate.javax.AddJaxwsDependencies**
_This recipe will add the necessary JAX-WS dependencies for those projects migrating to Java 11._

### Tags

* glassfish
* javax
* java11
* jaxws
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
    activeRecipe("org.openrewrite.java.migrate.javax.AddJaxwsDependencies")
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
        <version>4.19.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.AddJaxwsDependencies</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.javax.AddJaxwsDependencies`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * version: `2.3.2`
  * onlyIfUsing: `javax.jws.*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.ws`
  * artifactId: `jakarta.xml.ws-api`
  * newVersion: `2.3.2`
* [Add JAX-WS run-time dependency to a Maven project](../../../java/migrate/javax/addjaxwsruntime.md)
* [Replace `javax.xml.ws:jaxws-api` with `jakarta.xml.ws:jakarta.xml.ws-api`](../../../java/migrate/javax/replacejavaxjaxwswithjakarta.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddJaxwsDependencies
displayName: Add explicit JAX-WS dependencies
description: This recipe will add the necessary JAX-WS dependencies for those projects migrating to Java 11.
tags:
  - glassfish
  - javax
  - java11
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      version: 2.3.2
      onlyIfUsing: javax.jws.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.ws
      artifactId: jakarta.xml.ws-api
      newVersion: 2.3.2
  - org.openrewrite.java.migrate.javax.AddJaxwsRuntime
  - org.openrewrite.java.migrate.javax.ReplaceJavaxJaxwsWithJakarta

```
{% endtab %}
{% endtabs %}
