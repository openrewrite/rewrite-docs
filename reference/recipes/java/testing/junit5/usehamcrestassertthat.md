# Use `MatcherAssert#assertThat(..)`

** org.openrewrite.java.testing.junit5.UseHamcrestAssertThat**
_JUnit 4's `Assert#assertThat(..)` This method was deprecated in JUnit 4 and removed in JUnit Jupiter._

### Tags

* junit
* testing
* hamcrest

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.6.0

## Recipe list

* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.junit.Assert assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.hamcrest.MatcherAssert`
* [Use static import](../../../java/usestaticimport.md)
  * methodPattern: `org.hamcrest.MatcherAssert assertThat(..)`

## Usage
This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.6.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UseHamcrestAssertThat")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe":"rewrite-testing-frameworks":"1.6.0")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.UseHamcrestAssertThat</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.6.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.junit5.UseHamcrestAssertThat`
