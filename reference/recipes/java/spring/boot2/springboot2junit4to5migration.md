# JUnit Jupiter for Spring Boot 2.x projects

** org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration**
_Migrates Spring Boot 2.x projects having JUnit 4.x tests to JUnit Jupiter._

### Tags

* spring
* junit
* testing
* spring-boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.6.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.6.0")
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
        <version>4.6.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.6.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../../java/testing/junit5/runnertoextension.md)
  * runners: `[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner]`
  * extension: `org.springframework.test.context.junit.jupiter.SpringExtension`
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](../../../java/testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: `[org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner]`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-tools`
  * version: `2.x`
  * releasesOnly: `false`
  * scope: `test`
  * onlyIfUsing: `[org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathExtension]`
* [Migrate `@OutputCaptureRule` to `@ExtendWith(OutputCaptureExtension.class)`](../../../java/spring/boot2/outputcaptureextension.md)
* [Remove `@SpringExtension`](../../../java/spring/boot2/unnecessaryspringextension.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
displayName: JUnit Jupiter for Spring Boot 2.x projects
description: Migrates Spring Boot 2.x projects having JUnit 4.x tests to JUnit Jupiter.
tags:
  - spring
  - junit
  - testing
  - spring-boot
recipeList:
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: [org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner]
      extension: org.springframework.test.context.junit.jupiter.SpringExtension
  - org.openrewrite.java.testing.junit5.RemoveObsoleteRunners:
      obsoleteRunners: [org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner]
  - org.openrewrite.maven.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-tools
      version: 2.x
      releasesOnly: false
      scope: test
      onlyIfUsing: [org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathExtension]
  - org.openrewrite.java.spring.boot2.OutputCaptureExtension
  - org.openrewrite.java.spring.boot2.UnnecessarySpringExtension

```
{% endtab %}
{% endtabs %}
