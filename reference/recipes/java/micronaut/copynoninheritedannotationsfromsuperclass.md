# Copy non-inherited annotations from super class

 **org.openrewrite.java.micronaut.CopyNonInheritedAnnotationsFromSuperClass** _As of Micronaut 3.x only_ [_annotations_](https://github.com/micronaut-projects/micronaut-core/blob/3.0.x/src/main/docs/guide/appendix/breaks.adoc#annotation-inheritance) _that are explicitly meta-annotated with `@Inherited` are inherited from parent classes and interfaces._

## Source

[Github](https://github.com/openrewrite/rewrite-micronaut), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-micronaut/0.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 0.3.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-micronaut:0.3.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.7.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.CopyNonInheritedAnnotationsFromSuperClass")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:0.3.0")
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
        <version>4.9.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.CopyNonInheritedAnnotationsFromSuperClass</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.micronaut.CopyNonInheritedAnnotationsFromSuperClass`

