# Upgrade to Spring Framework 5.2

** org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_2**
_Upgrade to Spring Framework to 5.2 from any prior version._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.12.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.12.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.12.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.12.0")
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
        <version>4.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.12.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate deprecated Spring-Web UTF8 MediaTypes](../../../java/spring/framework/migrateutf8mediatypes.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_2
displayName: Upgrade to Spring Framework 5.2
description: Upgrade to Spring Framework to 5.2 from any prior version.
recipeList:
  - org.openrewrite.java.spring.framework.MigrateUtf8MediaTypes

```
{% endtab %}
{% endtabs %}
