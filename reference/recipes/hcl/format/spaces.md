# Spaces

** org.openrewrite.hcl.format.Spaces**
_Format whitespace in HCL code._

## Source

[Github](https://github.com/openrewrite/rewrite-hcl), [Issue Tracker](https://github.com/openrewrite/rewrite-hcl/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-hcl/7.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-hcl
* version: 7.21.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite:rewrite-hcl:7.21.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("org.openrewrite.hcl.format.Spaces")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-hcl:7.21.0")
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
            <recipe>org.openrewrite.hcl.format.Spaces</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-hcl</artifactId>
            <version>7.21.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.hcl.format.Spaces`
