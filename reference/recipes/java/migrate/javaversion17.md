# Change Maven Java version property values to 17

** org.openrewrite.java.migrate.JavaVersion17**
_Change maven.compiler.source and maven.compiler.target values to 17._

### Tags

* java17
* compiler

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.13.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.13.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.JavaVersion17")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.13.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.JavaVersion17</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.13.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.13.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.JavaVersion17
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.JavaVersion17`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Maven project property value](../../maven/changepropertyvalue.md)
  * key: `java.version`
  * newValue: `17`
  * addIfMissing: `false`
* [Change Maven project property value](../../maven/changepropertyvalue.md)
  * key: `maven.compiler.source`
  * newValue: `17`
  * addIfMissing: `false`
* [Change Maven project property value](../../maven/changepropertyvalue.md)
  * key: `maven.compiler.target`
  * newValue: `17`
  * addIfMissing: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaVersion17
displayName: Change Maven Java version property values to 17
description: Change maven.compiler.source and maven.compiler.target values to 17.
tags:
  - java17
  - compiler
recipeList:
  - org.openrewrite.maven.ChangePropertyValue:
      key: java.version
      newValue: 17
      addIfMissing: false
  - org.openrewrite.maven.ChangePropertyValue:
      key: maven.compiler.source
      newValue: 17
      addIfMissing: false
  - org.openrewrite.maven.ChangePropertyValue:
      key: maven.compiler.target
      newValue: 17
      addIfMissing: false

```
{% endtab %}
{% endtabs %}
