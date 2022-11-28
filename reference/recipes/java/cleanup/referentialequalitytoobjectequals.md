# Replace referential equality operators with Object equals method invocations when the operands both override `Object.equals(Object obj)`

**org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals**
_Using `==` or `!=` compares object references, not the equality of two objects. This modifies code where both sides of a binary operation (`==` or `!=`) override `Object.equals(Object obj)` except when the comparison is within an overridden `Object.equals(Object obj)` method declaration itself.WARNING, The resulting transformation must be carefully reviewed since any modifications change the programs semantics._

### Tags

* RSPEC-1698

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.33.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.33.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals")
}

repositories {
    mavenCentral()
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals</recipe>
          </activeRecipes>
        </configuration>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -DactiveRecipes=org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.cleanup.ReferentialEqualityToObjectEquals`
