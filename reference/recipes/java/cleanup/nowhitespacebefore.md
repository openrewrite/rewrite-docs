# No whitespace before

** org.openrewrite.java.cleanup.NoWhitespaceBefore**
_Removes unnecessary whitespace preceding a token. A linebreak before a token will be removed unless `allowLineBreaks` is set to `true`._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.26.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.26.3


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.25.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.NoWhitespaceBefore")
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
        <version>4.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.NoWhitespaceBefore</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.cleanup.NoWhitespaceBefore`
