# Find projects affected by changes to the default error view message attribute

**org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView**

_As of Spring Boot 2.5 the `message` attribute in the default error view was removed rather than blanked when it is not shown.
`spring-webmvc` or `spring-webflux` projects that parse the error response JSON may need to deal with the missing item
([release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#messages-in-the-default-error-view)).
You can still use the `server.error.include-message` property if you want messages to be included._

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

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
    activeRecipe("org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView")
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
            <recipe>org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView
```
{% endcode %}
{% endtab %}
{% endtabs %}

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
  - boot
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
