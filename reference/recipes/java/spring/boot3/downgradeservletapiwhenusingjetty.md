# Downgrade Jakarta Servlet API to 5.0 when using Jetty

**org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty**
_Jetty does not yet support Servlet 6.0. This recipe will detect the presence of the `spring-boot-starter-jetty` as a first-order dependency and will add the maven property `jakarta-servlet.version` setting it's value to `5.0.0`. This will downgrade the `jakarta-servlet` artifact if the pom's parent extends from the spring-boot-parent._

### Tags

* spring
* jetty
* boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.33.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.33.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.33.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.33.0")
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
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.33.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -DactiveRecipes=org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Maven project property](../../../maven/addproperty.md)
  * key: `jakarta-servlet.version`
  * value: `5.0.0`
  * preserveExistingValue: `false`
  * trustParent: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty
displayName: Downgrade Jakarta Servlet API to 5.0 when using Jetty
description: Jetty does not yet support Servlet 6.0. This recipe will detect the presence of the `spring-boot-starter-jetty` as a first-order dependency and will add the maven property `jakarta-servlet.version` setting it's value to `5.0.0`. This will downgrade the `jakarta-servlet` artifact if the pom's parent extends from the spring-boot-parent.

tags:
  - spring
  - jetty
  - boot
recipeList:
  - org.openrewrite.maven.AddProperty:
      key: jakarta-servlet.version
      value: 5.0.0
      preserveExistingValue: false
      trustParent: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
