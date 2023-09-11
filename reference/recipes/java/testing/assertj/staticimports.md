# Statically import AssertJ's `assertThat`

**org.openrewrite.java.testing.assertj.StaticImports**

_Consistently use a static import rather than inlining the `Assertions` class name in tests._

### Tags

* testing
* assertj

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.10/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.10


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.10` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.StaticImports")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.10")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.StaticImports</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.10</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.StaticImports
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForClassTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Use static import](../../../java/usestaticimport.md)
  * methodPattern: `org.assertj.core.api.Assertions *(..)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.StaticImports
displayName: Statically import AssertJ's `assertThat`
description: Consistently use a static import rather than inlining the `Assertions` class name in tests.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.assertj.core.api.AssertionsForClassTypes assertThat(..)
      fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)
      fullyQualifiedTargetTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.UseStaticImport:
      methodPattern: org.assertj.core.api.Assertions *(..)

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.StaticImports)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
