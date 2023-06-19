# Use `AtomicInteger#weakCompareAndSetPlain(int, int)`

**org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain**

_Use `AtomicInteger#weakCompareAndSetPlain(int, int)` instead of the deprecated `AtomicInteger#weakCompareAndSet(int, int)` in Java 9 or higher._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-concurrent-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.concurrent.atomic.AtomicInteger weakCompareAndSet(int, int)`
  * newMethodName: `weakCompareAndSetPlain`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain
displayName: Use `AtomicInteger#weakCompareAndSetPlain(int, int)`
description: Use `AtomicInteger#weakCompareAndSetPlain(int, int)` instead of the deprecated `AtomicInteger#weakCompareAndSet(int, int)` in Java 9 or higher.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.concurrent.atomic.AtomicInteger weakCompareAndSet(int, int)
      newMethodName: weakCompareAndSetPlain

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
