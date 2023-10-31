# Spring Boot 2.x best practices

**org.openrewrite.java.spring.boot2.SpringBoot2BestPractices**

_Applies best practices to Spring Boot 2 applications._

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.12/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.12


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.12` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.12")
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
    dependencies { classpath("org.openrewrite:plugin:6.4.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.0.12")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBoot2BestPractices")
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
        <version>5.10.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBoot2BestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.12</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe SpringBoot2BestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove `@RequestMapping` annotations](../../../java/spring/norequestmappingannotation.md)
* [Remove implicit web annotation names](../../../java/spring/implicitwebannotationnames.md)
* [Remove `@SpringExtension`](../../../java/spring/boot2/unnecessaryspringextension.md)
* [Remove the `@Autowired` annotation on inferred constructor](../../../java/spring/noautowiredonconstructor.md)
* [Migrate `RestTemplateBuilder`](../../../java/spring/boot2/resttemplatebuilderrequestfactory.md)
* [Replace `EnvironmentTestUtils` with `TestPropertyValues`](../../../java/spring/boot2/replacedeprecatedenvironmenttestutils.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBoot2BestPractices
displayName: Spring Boot 2.x best practices
description: Applies best practices to Spring Boot 2 applications.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.NoRequestMappingAnnotation
  - org.openrewrite.java.spring.ImplicitWebAnnotationNames
  - org.openrewrite.java.spring.boot2.UnnecessarySpringExtension
  - org.openrewrite.java.spring.NoAutowiredOnConstructor
  - org.openrewrite.java.spring.boot2.RestTemplateBuilderRequestFactory
  - org.openrewrite.java.spring.boot2.ReplaceDeprecatedEnvironmentTestUtils

```
{% endtab %}
{% endtabs %}

## Contributors
* [Kevin McCarpenter](mailto:kevin@moderne.io)
* Patrick Way
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Joan Viladrosa](mailto:joan@moderne.io)
* [Tim te Beek](mailto:tim@moderne.io)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* Kun Li
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* nbruno


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBoot2BestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
