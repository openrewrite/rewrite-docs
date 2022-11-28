# Update Lombok dependency to a Java 17 compatible version

**org.openrewrite.java.migrate.lombok.UpdateLombokToJava17**
_Update Lombok dependency to a version that is compatible with Java 17._

### Tags

* java17
* lombok

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.14.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.14.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.lombok.UpdateLombokToJava17")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.14.1")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.lombok.UpdateLombokToJava17</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.14.1</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.14.1 \
  -DactiveRecipes=org.openrewrite.java.migrate.lombok.UpdateLombokToJava17
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.lombok.UpdateLombokToJava17`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.projectlombok`
  * artifactId: `lombok`
  * newVersion: `1.18.*`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.experimental.Builder`
  * newFullyQualifiedTypeName: `lombok.Builder`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.experimental.Value`
  * newFullyQualifiedTypeName: `lombok.Value`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.experimental.Wither`
  * newFullyQualifiedTypeName: `lombok.With`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.experimental.var`
  * newFullyQualifiedTypeName: `lombok.var`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.experimental.val`
  * newFullyQualifiedTypeName: `lombok.val`
* [Replace `lombok.val` with `final var`](../../../java/migrate/lombok/lombokvaltofinalvar.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.lombok.UpdateLombokToJava17
displayName: Update Lombok dependency to a Java 17 compatible version
description: Update Lombok dependency to a version that is compatible with Java 17.
tags:
  - java17
  - lombok
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.projectlombok
      artifactId: lombok
      newVersion: 1.18.*
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.experimental.Builder
      newFullyQualifiedTypeName: lombok.Builder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.experimental.Value
      newFullyQualifiedTypeName: lombok.Value
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.experimental.Wither
      newFullyQualifiedTypeName: lombok.With
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.experimental.var
      newFullyQualifiedTypeName: lombok.var
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.experimental.val
      newFullyQualifiedTypeName: lombok.val
  - org.openrewrite.java.migrate.lombok.LombokValToFinalVar

```
{% endtab %}
{% endtabs %}
