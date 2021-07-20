# Use Mutiny multi.toHotStream\(\)

 **org.openrewrite.java.quarkus.MultiTransformHotStreamToMultiHotStream** _Replace Mutiny API usages of `multi.transform().toHotStream()` with `multi.toHotStream()`._

## Source

[Github](https://github.com/openrewrite/rewrite-quarkus), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-quarkus/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 0.4.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-quarkus:0.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.3.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.quarkus.MultiTransformHotStreamToMultiHotStream")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:0.4.0")
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
        <version>4.7.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.quarkus.MultiTransformHotStreamToMultiHotStream</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.quarkus.MultiTransformHotStreamToMultiHotStream`

