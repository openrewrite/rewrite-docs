# `indexOf` should not compare greater than zero

** org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero**
_Replaces `String#indexOf(String) > 0` and `List#indexOf(Object) > 0` with `>=1`. Checking `indexOf` against `>0` ignores the first element, whereas `>-1` is inclusive of the first element. For clarity, `>=1` is used, because `>0` and `>=1` are semantically equal. Using `>0` may appear to be a mistake with the intent of including all elements. If the intent is to check whether a value in included in a `String` or `List`, the `String#contains(String)` or `List#contains(Object)` methods may be better options altogether._

### Tags

* RSPEC-2692

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.18.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.18.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero")
}

repositories {
    mavenCentral()
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
        <version>4.19.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.IndexOfShouldNotCompareGreaterThanZero`
