# Remove unused imports

** org.openrewrite.java.RemoveUnusedImports**
_Remove imports for types that are not referenced._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.7.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.7.0

## Usage
This recipe has no required configuration parameters and comes from a rewrite core library.  It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.RemoveUnusedImports")
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
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.RemoveUnusedImports</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.RemoveUnusedImports`
