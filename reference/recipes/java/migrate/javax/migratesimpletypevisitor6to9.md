# Use SimpleTypeVisitor9

 **org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9** _`SimpleTypeVisitor6` was deprecated in Java 9._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.3.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.3.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.3.0")
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
        <version>4.6.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.3.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../changetype.md)
  * oldFullyQualifiedTypeName: `javax.lang.model.util.SimpleTypeVisitor6`
  * newFullyQualifiedTypeName: `javax.lang.model.util.SimpleTypeVisitor9`
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9
displayName: Use `SimpleTypeVisitor9`
description: `SimpleTypeVisitor6` was deprecated in Java 9.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.lang.model.util.SimpleTypeVisitor6
      newFullyQualifiedTypeName: javax.lang.model.util.SimpleTypeVisitor9
```
{% endtab %}
{% endtabs %}

