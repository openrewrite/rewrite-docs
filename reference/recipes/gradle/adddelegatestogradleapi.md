# Add `@DelegatesTo` to the Gradle API

** org.openrewrite.gradle.AddDelegatesToGradleApi**
_The Gradle API has methods which accept `groovy.lang.Closure`. Typically, there is an overload which accepts an `org.gradle.api.Action`.This recipe takes the type declared as the receiver of the `Action` overload and adds an appropriate `@groovy.lang.DelegatesTo` annotation to the `Closure` overload._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.31.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.31.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite:rewrite-gradle:7.31.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.AddDelegatesToGradleApi")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.31.0")
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
        <version>4.35.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.gradle.AddDelegatesToGradleApi</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.31.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.35.1:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite:rewrite-gradle:7.31.0 \
  -DactiveRecipes=org.openrewrite.gradle.AddDelegatesToGradleApi
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.gradle.AddDelegatesToGradleApi`
