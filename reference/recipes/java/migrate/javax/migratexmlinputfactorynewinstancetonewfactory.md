# Use `javax.xml.stream.XMLInputFactory#newFactory(String, ClassLoader)`

** org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory**
_`javax.xml.stream.XMLInputFactory#newInstance` has been deprecated Java 7._

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
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory")
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
            <recipe>org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory</recipe>
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
  -DactiveRecipes=org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `javax.xml.stream.XMLInputFactory newInstance(String, ClassLoader)`
  * newMethodName: `newFactory`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory
displayName: Use `javax.xml.stream.XMLInputFactory#newFactory(String, ClassLoader)`
description: `javax.xml.stream.XMLInputFactory#newInstance` has been deprecated Java 7.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: javax.xml.stream.XMLInputFactory newInstance(String, ClassLoader)
      newMethodName: newFactory

```
{% endtab %}
{% endtabs %}
