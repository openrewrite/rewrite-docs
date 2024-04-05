# Use `javax.validation.constraints`

**org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax**

_Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.7.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.7.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.7.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.11.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.7.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.11.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.7.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax")
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
        <version>5.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.7.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateHibernateConstraintsToJavax
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.validator.constraints.NotBlank`
  * newFullyQualifiedTypeName: `javax.validation.constraints.NotBlank`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.hibernate.validator.constraints.NotEmpty`
  * newFullyQualifiedTypeName: `javax.validation.constraints.NotEmpty`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `javax.validation`
  * artifactId: `validation-api`
  * version: `2.x`
  * onlyIfUsing: `javax.validation.constraints.*`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue.md)
  * propertyKey: `spring.main.banner-mode`
  * newValue: `console`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue.md)
  * propertyKey: `spring.main.banner-mode`
  * newValue: `off`
  * oldValue: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax
displayName: Use `javax.validation.constraints`
description: Use `javax.validation.constraints` instead of the deprecated `org.hibernate.validator.constraints` in Spring Boot 2.0 or higher.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.validator.constraints.NotBlank
      newFullyQualifiedTypeName: javax.validation.constraints.NotBlank
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.hibernate.validator.constraints.NotEmpty
      newFullyQualifiedTypeName: javax.validation.constraints.NotEmpty
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: javax.validation
      artifactId: validation-api
      version: 2.x
      onlyIfUsing: javax.validation.constraints.*
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: spring.main.banner-mode
      newValue: console
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: spring.main.banner-mode
      newValue: off
      oldValue: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Nick McKinney](mailto:mckinneynicholas@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Josh Soref
