# Migrate Spring Boot properties to 2.4

** org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_4**
_Migrate properties found in `application.properties` and `application.yml`._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.18.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.18.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.18.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.18.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_4")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.18.0")
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
        <version>4.21.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_4</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.18.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBootProperties_2_4`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `logging.pattern.rolling-file-name`
  * newPropertyKey: `logging.logback.rollingpolicy.file-name-pattern`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `logging.pattern.rolling-file-name`
  * newPropertyKey: `logging.logback.rollingpolicy.file-name-pattern`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `logging.file.clean-history-on-start`
  * newPropertyKey: `logging.logback.rollingpolicy.clean-history-on-start`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `logging.file.clean-history-on-start`
  * newPropertyKey: `logging.logback.rollingpolicy.clean-history-on-start`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `logging.file.max-size`
  * newPropertyKey: `logging.logback.rollingpolicy.max-file-size`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `logging.file.max-size`
  * newPropertyKey: `logging.logback.rollingpolicy.max-file-size`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `logging.file.total-size-cap`
  * newPropertyKey: `logging.logback.rollingpolicy.total-size-cap`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `logging.file.total-size-cap`
  * newPropertyKey: `logging.logback.rollingpolicy.total-size-cap`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `logging.file.max-history`
  * newPropertyKey: `logging.logback.rollingpolicy.max-history`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `logging.file.max-history`
  * newPropertyKey: `logging.logback.rollingpolicy.max-history`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.profiles`
  * newPropertyKey: `spring.config.activate.on-profile`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.profiles`
  * newPropertyKey: `spring.config.activate.on-profile`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.password`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.password`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.repositories.enabled`
  * newPropertyKey: `spring.data.neo4j.repositories.type`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.repositories.enabled`
  * newPropertyKey: `spring.data.neo4j.repositories.type`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.uri`
  * newPropertyKey: `spring.neo4j.uri`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.uri`
  * newPropertyKey: `spring.neo4j.uri`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.username`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.neo4j.username`
  * newPropertyKey: `spring.neo4j.authentication.password`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_4
displayName: Migrate Spring Boot properties to 2.4
description: Migrate properties found in `application.properties` and `application.yml`.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: logging.pattern.rolling-file-name
      newPropertyKey: logging.logback.rollingpolicy.file-name-pattern
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: logging.pattern.rolling-file-name
      newPropertyKey: logging.logback.rollingpolicy.file-name-pattern
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: logging.file.clean-history-on-start
      newPropertyKey: logging.logback.rollingpolicy.clean-history-on-start
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: logging.file.clean-history-on-start
      newPropertyKey: logging.logback.rollingpolicy.clean-history-on-start
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: logging.file.max-size
      newPropertyKey: logging.logback.rollingpolicy.max-file-size
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: logging.file.max-size
      newPropertyKey: logging.logback.rollingpolicy.max-file-size
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: logging.file.total-size-cap
      newPropertyKey: logging.logback.rollingpolicy.total-size-cap
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: logging.file.total-size-cap
      newPropertyKey: logging.logback.rollingpolicy.total-size-cap
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: logging.file.max-history
      newPropertyKey: logging.logback.rollingpolicy.max-history
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: logging.file.max-history
      newPropertyKey: logging.logback.rollingpolicy.max-history
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.profiles
      newPropertyKey: spring.config.activate.on-profile
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.profiles
      newPropertyKey: spring.config.activate.on-profile
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.password
      newPropertyKey: spring.neo4j.authentication.password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.password
      newPropertyKey: spring.neo4j.authentication.password
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.repositories.enabled
      newPropertyKey: spring.data.neo4j.repositories.type
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.repositories.enabled
      newPropertyKey: spring.data.neo4j.repositories.type
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.uri
      newPropertyKey: spring.neo4j.uri
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.uri
      newPropertyKey: spring.neo4j.uri
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.username
      newPropertyKey: spring.neo4j.authentication.password
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.neo4j.username
      newPropertyKey: spring.neo4j.authentication.password

```
{% endtab %}
{% endtabs %}
