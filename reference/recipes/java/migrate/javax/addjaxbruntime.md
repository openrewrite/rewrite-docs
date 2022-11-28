# Use latest JAXB API and runtime for Jakarta EE 8

**org.openrewrite.java.migrate.javax.AddJaxbRuntime**
_Update maven build files to use the latest JAXB runtime from Jakarta EE 8 to maintain compatibility with Java version 11 or greater.  The recipe will add a JAXB run-time, in `provided` scope, to any project that has a transitive dependency on the JAXB API. **The resulting dependencies still use the `javax` namespace, despite the move to the Jakarta artifact**._

### Tags

* jaxb
* glassfish
* javax
* javaee
* java11
* jakarta

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.14.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.14.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | runtime | Which implementation of the JAXB run-time that will be added to maven projects that have transitive dependencies on the JAXB API |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddJaxbRuntimeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddJaxbRuntimeExample
displayName: Use latest JAXB API and runtime for Jakarta EE 8 example
recipeList:
  - org.openrewrite.java.migrate.javax.AddJaxbRuntime:
      runtime: glassfish
```
{% endcode %}

Now that `com.yourorg.AddJaxbRuntimeExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-migrate-java:1.14.1 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("com.yourorg.AddJaxbRuntimeExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.14.1")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddJaxbRuntimeExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.14.1</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.AddJaxbRuntimeExample`
