# Migrate additional Spring Boot properties to 2.0

** org.openrewrite.java.spring.boot2.SpringBootPropertiesManual\_2\_0**
_Migrate properties found in `application.properties` and `application.yml` which are not generated automatically from Spring Boot's `additional-spring-configuration-metadata.json` file._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.16.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.16.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_0")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.16.0")
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
        <version>4.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.16.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_0`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change properties file property value](../../../properties/changepropertyvalue.md)
  * propertyKey: `spring.main.banner-mode`
  * newValue: `console`
  * oldValue: `true`
* [Change properties file property value](../../../properties/changepropertyvalue.md)
  * propertyKey: `spring.main.banner-mode`
  * newValue: `off`
  * oldValue: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootPropertiesManual_2_0
displayName: Migrate additional Spring Boot properties to 2.0
description: Migrate properties found in `application.properties` and `application.yml` which are not generated automatically from Spring Boot's `additional-spring-configuration-metadata.json` file.
recipeList:
  - org.openrewrite.properties.ChangePropertyValue:
      propertyKey: spring.main.banner-mode
      newValue: console
      oldValue: true
  - org.openrewrite.properties.ChangePropertyValue:
      propertyKey: spring.main.banner-mode
      newValue: off
      oldValue: false

```
{% endtab %}
{% endtabs %}
