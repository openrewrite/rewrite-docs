# Add `@DelegatesTo` to the Gradle API

** org.openrewrite.gradle.AddDelegatesToGradleApi**
_The Gradle API has methods which accept `groovy.lang.Closure`. Typically, there is an overload which accepts an `org.gradle.api.Action`.This recipe takes the type declared as the receiver of the `Action` overload and adds an appropriate `@groovy.lang.DelegatesTo` annotation to the `Closure` overload._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.26.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.26.3


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite:rewrite-gradle:7.26.3 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.AddDelegatesToGradleApi")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.26.3")
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
        <version>4.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.gradle.AddDelegatesToGradleApi</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.26.3</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.gradle.AddDelegatesToGradleApi`
