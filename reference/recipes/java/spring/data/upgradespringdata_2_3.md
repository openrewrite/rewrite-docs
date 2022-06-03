# Upgrade to Spring Data 2.3

** org.openrewrite.java.spring.data.UpgradeSpringData\_2\_3**
_Upgrade to Spring Data to 2.3 from any prior version._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.22.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.22.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.22.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.22.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.data.UpgradeSpringData_2_3")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.22.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.data.UpgradeSpringData_2_3</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.22.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.spring.data.UpgradeSpringData_2_3`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `JpaSort.of(..)`](../../../java/spring/data/migratejpasort.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.data.UpgradeSpringData_2_3
displayName: Upgrade to Spring Data 2.3
description: Upgrade to Spring Data to 2.3 from any prior version.
recipeList:
  - org.openrewrite.java.spring.data.MigrateJpaSort

```
{% endtab %}
{% endtabs %}
