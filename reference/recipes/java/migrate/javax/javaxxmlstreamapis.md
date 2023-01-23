# Use modernized `javax.xml.stream` APIs

**org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs**
_Certain `javax.xml.stream` APIs have become deprecated and their usages changed, necessitating usage changes._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.15.0")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.15.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.15.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `javax.xml.stream.XMLEventFactory#newFactory(String, ClassLoader)`](../../../java/migrate/javax/migratexmleventfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLInputFactory#newFactory(String, ClassLoader)`](../../../java/migrate/javax/migratexmlinputfactorynewinstancetonewfactory.md)
* [Use `javax.xml.stream.XMLOutputFactory#newFactory(String, ClassLoader)`](../../../java/migrate/javax/migratexmloutputfactorynewinstancetonewfactory.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxXmlStreamAPIs
displayName: Use modernized `javax.xml.stream` APIs
description: Certain `javax.xml.stream` APIs have become deprecated and their usages changed, necessitating usage changes.
recipeList:
  - org.openrewrite.java.migrate.javax.MigrateXMLEventFactoryNewInstanceToNewFactory
  - org.openrewrite.java.migrate.javax.MigrateXMLInputFactoryNewInstanceToNewFactory
  - org.openrewrite.java.migrate.javax.MigrateXMLOutputFactoryNewInstanceToNewFactory

```
{% endtab %}
{% endtabs %}
