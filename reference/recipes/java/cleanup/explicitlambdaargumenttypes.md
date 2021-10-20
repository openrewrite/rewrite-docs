# Use explicit types on lambda arguments

** org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes**
_Adds explicit types on lambda arguments, which are otherwise optional. This can make the code clearer and easier to read. This does not add explicit types on arguments when the lambda has one or two parameters and does not have a block body, as things are considered more readable in those cases. For example, `stream.map((a, b) -> a.length);` will not have explicit types added._

### Tags

* RSPEC-2211

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.15.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.15.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes")
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
        <version>4.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.ExplicitLambdaArgumentTypes`
