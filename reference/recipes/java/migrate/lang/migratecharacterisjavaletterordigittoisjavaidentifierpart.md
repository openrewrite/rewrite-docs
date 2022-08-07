# Use `Character#isJavaIdentifierPart(char)`

** org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart**
_`Character#isJavaLetterOrDigit(char)` was deprecated in Java 1.1._

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.9.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.9.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.9.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.9.1")
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
        <version>4.31.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.9.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.lang.Character isJavaLetterOrDigit(char)`
  * newMethodName: `isJavaIdentifierPart`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.lang.MigrateCharacterIsJavaLetterOrDigitToIsJavaIdentifierPart
displayName: Use `Character#isJavaIdentifierPart(char)`
description: `Character#isJavaLetterOrDigit(char)` was deprecated in Java 1.1.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.lang.Character isJavaLetterOrDigit(char)
      newMethodName: isJavaIdentifierPart

```
{% endtab %}
{% endtabs %}
