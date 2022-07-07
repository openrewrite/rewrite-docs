# Add explicit JAXB dependencies

** org.openrewrite.java.migrate.javax.AddJaxbDependencies**
_This recipe will add the necessary JAXB dependencies for those projects migrating to Java 11._

### Tags

* jaxb
* glassfish
* javax
* java11
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.8.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.8.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.23.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.AddJaxbDependencies")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.8.0")
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
        <version>4.26.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.AddJaxbDependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.8.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.javax.AddJaxbDependencies`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `javax.xml.bind:jaxb-api with `jakarta.xml.bind:jakarta.xml.bind-api`](../../../java/migrate/javax/replacejavaxjaxbwithjakarta.md)
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `2.3.2`
  * onlyIfUsing: `javax.xml.bind.*`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.2`
* [Add JAXB run-time dependency to a Maven project](../../../java/migrate/javax/addjaxbruntime.md)
  * runtime: `sun`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddJaxbDependencies
displayName: Add explicit JAXB dependencies
description: This recipe will add the necessary JAXB dependencies for those projects migrating to Java 11.
tags:
  - jaxb
  - glassfish
  - javax
  - java11
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.javax.ReplaceJavaxJaxbWithJakarta
  - org.openrewrite.maven.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: 2.3.2
      onlyIfUsing: javax.xml.bind.*
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: 2.3.2
  - org.openrewrite.java.migrate.javax.AddJaxbRuntime:
      runtime: sun

```
{% endtab %}
{% endtabs %}
