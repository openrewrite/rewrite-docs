# Upgrade to Spring Boot 2.1

** org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_1**
_Upgrade to Spring Boot 2.1 from any prior 2.x version._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.14.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.14.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.14.0")
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
        <version>4.15.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.14.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.1.x`
  * trustParent: `true`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.1.x`
* [Use `RestTemplateBuilder#basicAuthentication`](../../../java/spring/boot2/migrateresttemplatebuilderbasicauthorization.md)
* [Use `RestTemplateBuilder#setConnectTimeout(Duration)` and `RestTemplateBuilder#setReadTimeout(Duration)`](../../../java/spring/boot2/migrateresttemplatebuildertimeoutbyint.md)
* [Use `MultipartConfigFactory` with `DataSize` arguments](../../../java/spring/boot2/migratemultipartconfigfactory.md)
* [Migrate Spring Boot properties to 2.1](../../../java/spring/boot2/springbootproperties_2_1.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_1
displayName: Upgrade to Spring Boot 2.1
description: Upgrade to Spring Boot 2.1 from any prior 2.x version.
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.1.x
      trustParent: true
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.1.x
  - org.openrewrite.java.spring.boot2.MigrateRestTemplateBuilderBasicAuthorization
  - org.openrewrite.java.spring.boot2.MigrateRestTemplateBuilderTimeoutByInt
  - org.openrewrite.java.spring.boot2.MigrateMultipartConfigFactory
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_1

```
{% endtab %}
{% endtabs %}
