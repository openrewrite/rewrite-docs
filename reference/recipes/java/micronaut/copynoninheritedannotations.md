# Copy non-inherited annotations from super class

** org.openrewrite.java.micronaut.CopyNonInheritedAnnotations**
_As of Micronaut 3.x only [annotations](https://github.com/micronaut-projects/micronaut-core/blob/3.0.x/src/main/docs/guide/appendix/breaks.adoc#annotation-inheritance) that are explicitly meta-annotated with `@Inherited` are inherited from parent classes and interfaces._

## Source

[Github](https://github.com/openrewrite/rewrite-micronaut), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-micronaut/1.18.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 1.18.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-micronaut:1.18.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.CopyNonInheritedAnnotations")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:1.18.0")
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
            <recipe>org.openrewrite.java.micronaut.CopyNonInheritedAnnotations</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>1.18.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:1.18.0 \
  -DactiveRecipes=org.openrewrite.java.micronaut.CopyNonInheritedAnnotations
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.micronaut.CopyNonInheritedAnnotations`
