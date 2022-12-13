# Change factory method return types to reflect their resolved return type

**org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable**
_As of Micronaut 3.x It is no longer possible to inject the internal implementation type from beans produced via factories. Factory method return types are changed to reflect the resolved return type if the method returns a single non-null type that does not match the method declaration return type._

## Source

[Github](https://github.com/openrewrite/rewrite-micronaut), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-micronaut/1.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 1.20.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-micronaut:1.20.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:1.20.0")
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
            <recipe>org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>1.20.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:1.20.0 \
  -DactiveRecipes=org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.micronaut.SubclassesReturnedFromFactoriesNotInjectable`
