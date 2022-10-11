# Use `ObjectUtils#isEmpty(Object)`

** org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty**
_`StringUtils#isEmpty(Object)` was deprecated in 5.3._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.28.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.28.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.28.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.28.0")
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
        <version>4.35.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.28.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.35.1:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.28.0 \
  -DactiveRecipes=org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.springframework.util.StringUtils isEmpty(Object)`
  * fullyQualifiedTargetTypeName: `org.springframework.util.ObjectUtils`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UseObjectUtilsIsEmpty
displayName: Use `ObjectUtils#isEmpty(Object)`
description: `StringUtils#isEmpty(Object)` was deprecated in 5.3.
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.springframework.util.StringUtils isEmpty(Object)
      fullyQualifiedTargetTypeName: org.springframework.util.ObjectUtils

```
{% endtab %}
{% endtabs %}
