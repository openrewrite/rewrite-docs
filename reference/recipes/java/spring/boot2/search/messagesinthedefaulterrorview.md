# Find projects affected by changes to the default error view message attribute

** org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView**
_As of Spring Boot 2.5 the `message` attribute in the default error view was removed rather than blanked when it is not shown.
`spring-webmvc` or `spring-webflux` projects that parse the error response JSON may need to deal with the missing item
([release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#messages-in-the-default-error-view)).
You can still use the `server.error.include-message` property if you want messages to be included.
_

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
    activeRecipe("org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView")
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
            <recipe>org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find Maven dependency](../../../../maven/search/finddependency.md)
  * groupId: `org.springframework`
  * artifactId: `spring-webmvc`
* [Find Maven dependency](../../../../maven/search/finddependency.md)
  * groupId: `org.springframework`
  * artifactId: `spring-webflux`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
        ---
        type: specs.openrewrite.org/v1beta/recipe
        name: org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView
        displayName: Find projects affected by changes to the default error view message attribute
        description: As of Spring Boot 2.5 the `message` attribute in the default error view was removed rather than blanked when it is not shown.
`spring-webmvc` or `spring-webflux` projects that parse the error response JSON may need to deal with the missing item
([release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#messages-in-the-default-error-view)).
You can still use the `server.error.include-message` property if you want messages to be included.

tags:
  - spring
  - spring-boot
recipeList:
  - org.openrewrite.maven.search.FindDependency:
      groupId: org.springframework
      artifactId: spring-webmvc
  - org.openrewrite.maven.search.FindDependency:
      groupId: org.springframework
      artifactId: spring-webflux

```
{% endtab %}
{% endtabs %}
