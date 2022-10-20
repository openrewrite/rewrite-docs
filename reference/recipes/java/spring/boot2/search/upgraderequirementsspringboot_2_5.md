# Spring Boot 2.5 upgrades plus any possible manual changes that need to be reviewed.

** org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot\_2\_5**
_Identify changes needed to upgrade to Spring Boot 2.5.
_

### Tags

* spring
* spring-boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.29.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.29.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.29.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot_2_5")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.29.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot_2_5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.29.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.29.0 \
  -DactiveRecipes=org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot_2_5
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot_2_5`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find projects affected by changes to the default error view message attribute](../../../../java/spring/boot2/search/messagesinthedefaulterrorview.md)
* [In Spring Boot 2.5 a `DefaultConfigurationCustomizer` can now be used in favour of defining one or more `*Provider` beans](../../../../java/spring/boot2/search/customizingjooqdefaultconfiguration.md)
* [Applications using logging shutdown hooks](../../../../java/spring/boot2/search/loggingshutdownhooks.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.search.UpgradeRequirementsSpringBoot_2_5
displayName: Spring Boot 2.5 upgrades plus any possible manual changes that need to be reviewed.
description: Identify changes needed to upgrade to Spring Boot 2.5.

tags:
  - spring
  - spring-boot
recipeList:
  - org.openrewrite.java.spring.boot2.search.MessagesInTheDefaultErrorView
  - org.openrewrite.java.spring.boot2.search.CustomizingJooqDefaultConfiguration
  - org.openrewrite.java.spring.boot2.search.LoggingShutdownHooks

```
{% endtab %}
{% endtabs %}
