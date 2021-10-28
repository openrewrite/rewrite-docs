# Setup Java dependency caching

** org.openrewrite.github.SetupJavaCaching**
_Github actions supports dependency caching on Maven and Gradle projects. See the [blog post](https://github.blog/changelog/2021-08-30-github-actions-setup-java-now-supports-dependency-caching/)._

## Source

[Github](https://github.com/openrewrite/rewrite-github-actions), [Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-github-actions/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-github-actions
* version: 0.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-github-actions:0.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.github.SetupJavaCaching")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-github-actions:0.4.0")
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
            <recipe>org.openrewrite.github.SetupJavaCaching</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-github-actions</artifactId>
            <version>0.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.github.SetupJavaCaching`
