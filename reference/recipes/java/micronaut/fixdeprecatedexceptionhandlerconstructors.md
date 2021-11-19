# Fix deprecated no-arg `ExceptionHandler` constructors

** org.openrewrite.java.micronaut.FixDeprecatedExceptionHandlerConstructors**
_Adds `ErrorResponseProcessor` argument to deprecated no-arg `ExceptionHandler` constructors._

## Source

[Github](https://github.com/openrewrite/rewrite-micronaut), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-micronaut/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 1.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-micronaut:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.FixDeprecatedExceptionHandlerConstructors")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:1.4.0")
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
        <version>4.16.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.FixDeprecatedExceptionHandlerConstructors</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.micronaut.FixDeprecatedExceptionHandlerConstructors`