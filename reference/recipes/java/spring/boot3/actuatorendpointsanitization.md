# Remove the deprecated properties `additional-keys-to-sanitize` from the `configprops` and `env` end points

**org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization**

_Spring Boot 3.0 removed the key-based sanitization mechanism used in Spring Boot 2.x in favor of a unified approach. See https://github.com/openrewrite/rewrite-spring/issues/228_

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Delete a spring configuration property](../../../java/spring/deletespringproperty.md)
  * propertyKey: `management.endpoint.configprops.additional-keys-to-sanitize`
* [Delete a spring configuration property](../../../java/spring/deletespringproperty.md)
  * propertyKey: `management.endpoint.env.additional-keys-to-sanitize`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization
displayName: Remove the deprecated properties `additional-keys-to-sanitize` from the `configprops` and `env` end points
description: Spring Boot 3.0 removed the key-based sanitization mechanism used in Spring Boot 2.x in favor of a unified approach. See https://github.com/openrewrite/rewrite-spring/issues/228
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: management.endpoint.configprops.additional-keys-to-sanitize
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: management.endpoint.env.additional-keys-to-sanitize

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
