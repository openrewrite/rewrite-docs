# Use `WebServerFactoryCustomizer`

**org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer**

_Use `WebServerFactoryCustomizer` instead of the deprecated `EmbeddedServletContainerCustomizer` in Spring Boot 2.0 or higher. This recipe will replace look for any classes that implement `EmbeddedServletContainerCustomizer` and change the interface to `WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>`. This recipe also adjusts the the types used in the `customize()` method from `*EmbeddedServletContainerFactory` to their `*ServletWebServerFactory` counterparts._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.36.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.36.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.36.0")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.36.0</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Adjust configuration classes to use the `WebServerFactoryCustomizer` interface](../../../java/spring/boot2/changeembeddedservletcontainercustomizer.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.context.embedded.jetty.JettyEmbeddedServletContainerFactory`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.embedded.jetty.JettyServletWebServerFactory`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.context.embedded.undertow.UnderTowEmbeddedServletContainerFactory`
  * newFullyQualifiedTypeName: `org.springframework.boot.web.embedded.undertow.UnderTowServletWebServerFactory`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer
displayName: Use `WebServerFactoryCustomizer`
description: Use `WebServerFactoryCustomizer` instead of the deprecated `EmbeddedServletContainerCustomizer` in Spring Boot 2.0 or higher. This recipe will replace look for any classes that implement `EmbeddedServletContainerCustomizer` and change the interface to `WebServerFactoryCustomizer<ConfigurableServletWebServerFactory>`. This recipe also adjusts the the types used in the `customize()` method from `*EmbeddedServletContainerFactory` to their `*ServletWebServerFactory` counterparts.

recipeList:
  - org.openrewrite.java.spring.boot2.ChangeEmbeddedServletContainerCustomizer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer
      newFullyQualifiedTypeName: org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory
      newFullyQualifiedTypeName: org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.context.embedded.jetty.JettyEmbeddedServletContainerFactory
      newFullyQualifiedTypeName: org.springframework.boot.web.embedded.jetty.JettyServletWebServerFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.context.embedded.undertow.UnderTowEmbeddedServletContainerFactory
      newFullyQualifiedTypeName: org.springframework.boot.web.embedded.undertow.UnderTowServletWebServerFactory

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
