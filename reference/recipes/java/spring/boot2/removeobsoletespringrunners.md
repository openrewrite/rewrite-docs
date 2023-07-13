# Remove obsolete Spring JUnit runners

**org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners**

_Remove obsolete classpath runners._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.15")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove JUnit 4 `@RunWith` annotations that do not require an `@ExtendsWith` replacement](../../../java/testing/junit5/removeobsoleterunners.md)
  * obsoleteRunners: `[org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner]`
* [JUnit Jupiter best practices](../../../java/testing/junit5/junit5bestpractices.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
displayName: Remove obsolete Spring JUnit runners
description: Remove obsolete classpath runners.
recipeList:
  - org.openrewrite.java.testing.junit5.RemoveObsoleteRunners:
      obsoleteRunners: [org.springframework.boot.junit.runner.classpath.ModifiedClassPathRunner, org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathRunner]
  - org.openrewrite.java.testing.junit5.JUnit5BestPractices

```
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Patrick](mailto:patway99@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)
* Yeikel
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Greg Adams](mailto:gadams@gmail.com)
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Greg Adams](mailto:greg@moderne.io)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* Tyler Van Gorder
* [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* Ties van de Ven
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)
* [Kun Li](mailto:kun@moderne.io)
* [joanvr](mailto:joan@moderne.io)
* [Kyle Scully](mailto:scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
