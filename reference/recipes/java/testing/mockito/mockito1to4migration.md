# Mockito 4.x upgrade

**org.openrewrite.java.testing.mockito.Mockito1to4Migration**

_Upgrade Mockito from 1.x to 4.x._

### Tags

* testing
* mockito

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.10/jar)

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
    activeRecipe("org.openrewrite.java.testing.mockito.Mockito1to4Migration")
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
            <recipe>org.openrewrite.java.testing.mockito.Mockito1to4Migration</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.mockito.Mockito1to4Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Mockito 3.x migration from 1.x](../../../java/testing/mockito/mockito1to3migration.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `4.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.Mockito1to4Migration
displayName: Mockito 4.x upgrade
description: Upgrade Mockito from 1.x to 4.x.
tags:
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.testing.mockito.Mockito1to3Migration
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: *
      newVersion: 4.x

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Greg Adams](mailto:gadams@gmail.com)
* [Tim te Beek](mailto:tim@moderne.io)
* Patrick Way
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Greg Adams](mailto:greg@moderne.io)
* John Burns
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.Mockito1to4Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
