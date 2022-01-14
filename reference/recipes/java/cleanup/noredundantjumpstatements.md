# Jump statements should not be redundant

** org.openrewrite.java.cleanup.NoRedundantJumpStatements**
_Jump statements such as return and continue let you change the default flow of program execution, but jump statements that direct the control flow to the original direction are just a waste of keystrokes._

### Tags

* RSPEC-3626

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.17.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.17.0


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.NoRedundantJumpStatements")
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
        <version>4.17.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.NoRedundantJumpStatements</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.cleanup.NoRedundantJumpStatements`
