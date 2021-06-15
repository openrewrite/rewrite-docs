# Statically import AssertJ's assertThat

 **org.openrewrite.java.testing.assertj.StaticImports** _Consistently use a static import rather than inlining the `Assertions` class name in tests._

### Tags

* testing
* assertj

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.6.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.6.0

## Recipe list

* [Change method target to static](../../changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForClassTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Change method target to static](../../changemethodtargettostatic.md)
  * methodPattern: `org.assertj.core.api.AssertionsForInterfaceTypes assertThat(..)`
  * fullyQualifiedTargetTypeName: `org.assertj.core.api.Assertions`
* [Use static import](../../usestaticimport.md)
  * methodPattern: `org.assertj.core.api.Assertions *(..)`

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
    activeRecipe("org.openrewrite.java.testing.assertj.StaticImports")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.6.0")
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
            <recipe>org.openrewrite.java.testing.assertj.StaticImports</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.assertj.StaticImports` ts\`

