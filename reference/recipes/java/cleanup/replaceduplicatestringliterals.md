# Replace duplicate `String` literals

** org.openrewrite.java.cleanup.ReplaceDuplicateStringLiterals**
_Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Qualified `String` literals include final Strings, method invocations, and new class invocations. Adds a new `private static final String` or uses an existing equivalent class field. A new variable name will be generated based on the literal value if an existing field does not exist. The generated name will append a numeric value to the variable name if a name already exists in the compilation unit._

### Tags

* RSPEC-1192

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.21.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.ReplaceDuplicateStringLiterals")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.ReplaceDuplicateStringLiterals</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.ReplaceDuplicateStringLiterals`
