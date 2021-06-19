# JUnit Jupiter for Spring Boot 2.x projects

 **org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration** _Migrates Spring Boot 2.x projects having JUnit 4.x tests to JUnit Jupiter._

### Tags

* spring
* junit
* testing
* spring-boot

## Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.5.0

## Recipe list

* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../testing/junit5/runnertoextension.md)
  * runners: `[org.springframework.test.context.junit4.SpringRunner, org.springframework.test.context.junit4.SpringJUnit4ClassRunner]`
  * extension: `org.springframework.test.context.junit.jupiter.SpringExtension`
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](../../testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: `[org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner]`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-tools`
  * version: `2.x`
  * releasesOnly: `false`
  * scope: `test`
  * onlyIfUsing: `[org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathExtension]`
* [JUnit Jupiter migration from JUnit 4.x](../../testing/junit5/junit4to5migration.md)

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.5.0")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.5.0</version>
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

