# Unnecessary throws

 **org.openrewrite.java.cleanup.UnnecessaryThrows** _Remove unnecessary `throws` declarations._

## Source

[Github](https://github.com/openrewrite/rewrite-java), [Issue Tracker](https://github.com/openrewrite/rewrite-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.8.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.8.0

## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.UnnecessaryThrows")
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
        <version>4.6.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.UnnecessaryThrows`

