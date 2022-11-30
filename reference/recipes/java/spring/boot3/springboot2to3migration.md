# Spring Boot 3.x migration from Spring Boot 2.x

**org.openrewrite.java.spring.boot3.SpringBoot2To3Migration** _Migrates Spring Boot 2.x to latest version of 3.x_

### Tags

* spring
* java17
* j2ee
* spring-boot
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.30.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.30.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.30.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.SpringBoot2To3Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.30.0")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.SpringBoot2To3Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.30.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.30.0 \
  -DactiveRecipes=org.openrewrite.java.spring.boot3.SpringBoot2To3Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBoot2To3Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade to Spring Boot 2.7](../boot2/upgradespringboot\_2\_7.md)
* [Migrate to Java 11 from Java 8 through 16](../../migrate/upgradetojava17.md)
* [Upgrade to Spring Boot 3.0 from 2.7](upgradespringboot\_3\_0.md)
* [Remove the `@Autowired` annotation on inferred constructor](../noautowiredonconstructor.md)
* [Migrate multi-condition `@ConditionalOnBean` annotations](../boot2/conditionalonbeananynestedcondition.md)
* [Migrate `RestTemplateBuilder`](../boot2/resttemplatebuilderrequestfactory.md)
* [Replace `EnvironmentTestUtils` with `TestPropertyValues`](../boot2/replacedeprecatedenvironmenttestutils.md)
* [Spring Boot 2.x best practices](../boot2/springboot2bestpractices.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBoot2To3Migration
displayName: Spring Boot 3.x migration from Spring Boot 2.x
description: Migrates Spring Boot 2.x to latest version of 3.x
tags:
  - spring
  - java17
  - j2ee
  - spring-boot
  - jakarta
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
  - org.openrewrite.java.migrate.UpgradeToJava17
  - org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
  - org.openrewrite.java.spring.NoAutowiredOnConstructor
  - org.openrewrite.java.spring.boot2.ConditionalOnBeanAnyNestedCondition
  - org.openrewrite.java.spring.boot2.RestTemplateBuilderRequestFactory
  - org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils
  - org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
```
{% endtab %}
{% endtabs %}
