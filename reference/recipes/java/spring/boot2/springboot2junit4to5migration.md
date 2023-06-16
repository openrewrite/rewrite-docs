# Migrate Spring Boot 2.x projects to JUnit 5 from JUnit 4.

**org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration**

_This recipe will migrate a Spring Boot application's tests from JUnit 4 to JUnit 5. This spring-specific migration includes conversion of Spring Test runners to Spring Test extensions and awareness of the composable Spring Test annotations._

### Tags

* spring
* junit
* test
* jupiter
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

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
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")
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
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [JUnit Jupiter migration from JUnit 4.x](../../../java/testing/junit5/junit4to5migration.md)
* [Migrate `@OutputCaptureRule` to `@ExtendWith(OutputCaptureExtension.class)`](../../../java/spring/boot2/outputcaptureextension.md)
* [Remove unnecessary Spring `@RunWith`](../../../java/spring/boot2/unnecessaryspringrunwith.md)
* [Remove `@SpringExtension`](../../../java/spring/boot2/unnecessaryspringextension.md)
* [Replace `@ExtendWith` and `@ContextConfiguration` with `@SpringJunitConfig`](../../../java/spring/boot2/replaceextendwithandcontextconfiguration.md)
* [Remove obsolete Spring JUnit runners](../../../java/spring/boot2/removeobsoletespringrunners.md)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-tools`
  * version: `2.x`
  * onlyIfUsing: `org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathExtension`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
displayName: Migrate Spring Boot 2.x projects to JUnit 5 from JUnit 4.
description: This recipe will migrate a Spring Boot application's tests from JUnit 4 to JUnit 5. This spring-specific migration includes conversion of Spring Test runners to Spring Test extensions and awareness of the composable Spring Test annotations.

tags:
  - spring
  - junit
  - test
  - jupiter
  - boot
recipeList:
  - org.openrewrite.java.testing.junit5.JUnit4to5Migration
  - org.openrewrite.java.spring.boot2.OutputCaptureExtension
  - org.openrewrite.java.spring.boot2.UnnecessarySpringRunWith
  - org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
  - org.openrewrite.java.spring.boot2.ReplaceExtendWithAndContextConfiguration
  - org.openrewrite.java.spring.boot2.RemoveObsoleteSpringRunners
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-tools
      version: 2.x
      onlyIfUsing: org.springframework.boot.testsupport.runner.classpath.ModifiedClassPathExtension

```
{% endtab %}
{% endtabs %}
## Contributors
* [Patrick Way](pway99@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Greg Adams](gadams@gmail.com)
* [Tim te Beek](tim.te.beek@jdriven.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Yeikel](yeikel@users.noreply.github.com)
* [Greg Adams](greg@moderne.io)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Tim te Beek](tim@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Matthias Klauer](matthias.klauer@sap.com)
* [nbruno](nbruno@users.noreply.github.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Sofia Britto Schwartz](sofia.b.schwartz@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Michael Keppler](bananeweizen@gmx.de)
* [Scott Jungling](scott.jungling@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Ties van de Ven](1215166+vandeven@users.noreply.github.com)
* [Tim te Beek](timtebeek@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [Kun Li](kun@moderne.io)
* [Kyle Scully](scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
