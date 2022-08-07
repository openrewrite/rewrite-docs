# Migrate additional Spring Boot properties to 2.6

** org.openrewrite.java.spring.boot2.SpringBootPropertiesManual\_2\_6**
_Migrate properties found in `application.properties` and `application.yml` which are not generated automatically from Spring Boot's `additional-spring-configuration-metadata.json` file._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.25.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.25.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.25.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_6")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.25.1")
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
        <version>4.31.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_6</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.25.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_6`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `prometheus-pushgateway.version`
  * newPropertyKey: `prometheus-client.version`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `prometheus-pushgateway.version`
  * newPropertyKey: `prometheus-client.version`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_6
displayName: Migrate additional Spring Boot properties to 2.6
description: Migrate properties found in `application.properties` and `application.yml` which are not generated automatically from Spring Boot's `additional-spring-configuration-metadata.json` file.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: prometheus-pushgateway.version
      newPropertyKey: prometheus-client.version
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: prometheus-pushgateway.version
      newPropertyKey: prometheus-client.version

```
{% endtab %}
{% endtabs %}
