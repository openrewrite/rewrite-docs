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

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.11/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.11


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.11` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.18")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.11")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.3.18") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.0.11")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.11</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
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
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe SpringBoot2JUnit4to5Migration
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
* Patrick Way
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Greg Adams](mailto:gadams@gmail.com)
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* Yeikel
* [Greg Adams](mailto:greg@moderne.io)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* Tyler Van Gorder
* [Matthias Klauer](mailto:matthias.klauer@sap.com)
* [Tim te Beek](mailto:tim@moderne.io)
* nbruno
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com)
* John Burns
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Scott Jungling](mailto:scott.jungling@gmail.com)
* Kun Li
* Ties van de Ven
* Peter Puškár
* [Tim te Beek](mailto:timtebeek@gmail.com)
* Josh Soref
* [Joan Viladrosa](mailto:joan@moderne.io)
* [Kun Li](mailto:kun@moderne.io)
* [Simon Verhoeven](mailto:verhoeven.simon@gmail.com)
* [Kyle Scully](mailto:scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
