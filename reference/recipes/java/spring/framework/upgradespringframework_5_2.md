# Migrate to Spring Framework 5.2 from Spring Framework 5.0 through 5.1

**org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_2**
_Migrate applications built on Spring Framework (5.0 through 5.1) to the latest Spring Framework 5.2 release._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.31.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.31.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.31.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.31.0")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.31.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.31.0 \
  -DactiveRecipes=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Framework 5.1 from Spring Framework 5.0](../../../java/spring/framework/upgradespringframework_5_1.md)
* [Upgrade spring-framework Maven dependencies](../../../java/spring/framework/upgradespringframeworkdependencies.md)
  * newVersion: `5.2.x`
* [Migrate deprecated Spring-Web UTF8 MediaTypes](../../../java/spring/framework/migrateutf8mediatypes.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
displayName: Migrate to Spring Framework 5.2 from Spring Framework 5.0 through 5.1
description: Migrate applications built on Spring Framework (5.0 through 5.1) to the latest Spring Framework 5.2 release.
recipeList:
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_1
  - org.openrewrite.java.spring.framework.UpgradeSpringFrameworkDependencies:
      newVersion: 5.2.x
  - org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes

```
{% endtab %}
{% endtabs %}
