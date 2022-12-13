# Use `javax.lang.model.util.ElementKindVisitor9`

**org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9**
_Use `javax.lang.model.util.ElementKindVisitor9` instead of the deprecated `javax.lang.model.util.ElementKindVisitor6` in Java 9 or higher._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.15.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.15.0")
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
            <recipe>org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.15.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.15.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `javax.lang.model.util.ElementKindVisitor6`
  * newFullyQualifiedTypeName: `javax.lang.model.util.ElementKindVisitor9`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9
displayName: Use `javax.lang.model.util.ElementKindVisitor9`
description: Use `javax.lang.model.util.ElementKindVisitor9` instead of the deprecated `javax.lang.model.util.ElementKindVisitor6` in Java 9 or higher.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.lang.model.util.ElementKindVisitor6
      newFullyQualifiedTypeName: javax.lang.model.util.ElementKindVisitor9

```
{% endtab %}
{% endtabs %}
