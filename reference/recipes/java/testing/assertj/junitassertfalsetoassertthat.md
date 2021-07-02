# JUnit `assertFalse` to AssertJ

** org.openrewrite.java.testing.assertj.JUnitAssertFalseToAssertThat**
_Convert JUnit-style `assertFalse()` to AssertJ's `assertThat().isFalse()`._

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.7.1


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.7.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.JUnitAssertFalseToAssertThat")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.7.1")
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
        <version>4.6.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.JUnitAssertFalseToAssertThat</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.7.1</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.assertj.JUnitAssertFalseToAssertThat`
