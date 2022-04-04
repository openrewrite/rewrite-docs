# Spring Boot 2.x best practices

** org.openrewrite.java.spring.boot2.SpringBoot2BestPractices**
_Applies best practices to Spring Boot 2 applications._

### Tags

* spring
* spring-boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.19.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.19.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.19.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.19.1")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot2BestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.19.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBoot2BestPractices`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove `@RequestMapping` annotations](../../../java/spring/norequestmappingannotation.md)
* [Remove implicit web annotation names](../../../java/spring/implicitwebannotationnames.md)
* [Remove `@SpringExtension`](../../../java/spring/boot2/unnecessaryspringextension.md)
* [Remove `public` from `@Bean` methods](../../../java/spring/beanmethodsnotpublic.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
displayName: Spring Boot 2.x best practices
description: Applies best practices to Spring Boot 2 applications.
tags:
  - spring
  - spring-boot
recipeList:
  - org.openrewrite.java.spring.NoRequestMappingAnnotation
  - org.openrewrite.java.spring.ImplicitWebAnnotationNames
  - org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
  - org.openrewrite.java.spring.BeanMethodsNotPublic

```
{% endtab %}
{% endtabs %}
