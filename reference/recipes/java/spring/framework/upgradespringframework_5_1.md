# Upgrade to Spring Framework 5.1

** org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_1**
_Upgrade to Spring Framework to 5.1 from any prior version._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.27.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.27.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.27.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.27.0")
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
        <version>4.34.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.27.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.27.0 \
  -DactiveRecipes=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_1
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_1`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade spring-framework Maven dependencies](../../../java/spring/framework/upgradespringframeworkdependencies.md)
  * newVersion: `5.1.x`
* [Use `Environment#acceptsProfiles(Profiles)`](../../../java/spring/framework/environmentacceptsprofiles.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_1
displayName: Upgrade to Spring Framework 5.1
description: Upgrade to Spring Framework to 5.1 from any prior version.
recipeList:
  - org.openrewrite.java.spring.framework.UpgradeSpringFrameworkDependencies:
      newVersion: 5.1.x
  - org.openrewrite.java.spring.framework.EnvironmentAcceptsProfiles

```
{% endtab %}
{% endtabs %}
