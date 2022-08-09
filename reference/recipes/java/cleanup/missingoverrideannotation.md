# Add missing `@Override` to overriding and implementing methods

** org.openrewrite.java.cleanup.MissingOverrideAnnotation**
_Adds `@Override` to methods overriding superclass methods or implementing interface methods. Annotating methods improves readability by showing the author's intent to override. Additionally, when annotated, the compiler will emit an error when a signature of the overridden method does not match the superclass method._

### Tags

* RSPEC-1161

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.27.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.27.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | ignoreAnonymousClassMethods | *Optional*. When enabled, ignore missing annotations on methods which override methods when the class definition is within an anonymous class. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.cleanup.MissingOverrideAnnotation")
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
        <version>4.31.3</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.cleanup.MissingOverrideAnnotation</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipesorg.openrewrite.java.cleanup.MissingOverrideAnnotation`
