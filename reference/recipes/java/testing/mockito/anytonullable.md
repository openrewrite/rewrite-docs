# Replace Mockito 1.x `any(Class)` and `anyString()` with `nullable(Class)`

**org.openrewrite.java.testing.mockito.AnyToNullable**

_Since Mockito 2.10 `any(Class)` and `anyString()` no longer match null values. Use `nullable(Class)` instead._

### Tags

* testing
* mockito

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.6


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.mockito.AnyToNullable")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.6")
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
            <recipe>org.openrewrite.java.testing.mockito.AnyToNullable</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.6</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.mockito.AnyToNullable
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.mockito.Mockito any(java.lang.Class)`
  * newMethodName: `nullable`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.mockito.Mockito nullable(java.lang.Class)`
  * fullyQualifiedTargetTypeName: `org.mockito.ArgumentMatchers`
* [Replace Mockito 1.x `anyString()` with `nullable(String.class)`](../../../java/testing/mockito/anystringtonullable.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.AnyToNullable
displayName: Replace Mockito 1.x `any(Class)` and `anyString()` with `nullable(Class)`
description: Since Mockito 2.10 `any(Class)` and `anyString()` no longer match null values. Use `nullable(Class)` instead.
tags:
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.mockito.Mockito any(java.lang.Class)
      newMethodName: nullable
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.mockito.Mockito nullable(java.lang.Class)
      fullyQualifiedTargetTypeName: org.mockito.ArgumentMatchers
  - org.openrewrite.java.testing.mockito.AnyStringToNullable

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](mailto:tim@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.AnyToNullable)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
