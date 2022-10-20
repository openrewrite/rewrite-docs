# Upgrade to Java 17

** org.openrewrite.java.migrate.UpgradeJava17**
_This recipe will apply changes commonly needed when migrating to Java 17, including intermediate versions._

### Tags

* java17
* lombok

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.13.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.13.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.UpgradeJava17")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.13.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.UpgradeJava17</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.13.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:1.13.0 \
  -DactiveRecipes=org.openrewrite.java.migrate.UpgradeJava17
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.migrate.UpgradeJava17`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate Java 8 to Java 11](../../java/migrate/java8tojava11.md)
* [Change Maven Java version property values to 17](../../java/migrate/javaversion17.md)
* [Replace `String#format(String, Object...)` with `String#formatted(Object...)`](../../java/migrate/lang/stringformatted.md)
* [Replace `lombok.val` with `final var`](../../java/migrate/lombok/lombokvaltofinalvar.md)
* [Add JDeprScan Maven Plug-in](../../java/migrate/addjdeprscanplugin.md)
  * release: `17`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.UpgradeJava17
displayName: Upgrade to Java 17
description: This recipe will apply changes commonly needed when migrating to Java 17, including intermediate versions.
tags:
  - java17
  - lombok
recipeList:
  - org.openrewrite.java.migrate.Java8toJava11
  - org.openrewrite.java.migrate.JavaVersion17
  - org.openrewrite.java.migrate.lang.StringFormatted
  - org.openrewrite.java.migrate.lombok.LombokValToFinalVar
  - org.openrewrite.java.migrate.AddJDeprScanPlugin:
      release: 17

```
{% endtab %}
{% endtabs %}
