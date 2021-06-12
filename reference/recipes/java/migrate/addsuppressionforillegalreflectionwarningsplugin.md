# Add Maven Jar Plugin to suppress Illegal Reflection Warnings

** org.openrewrite.java.migrate.AddSuppressionForIllegalReflectionWarningsPlugin**
_Adds a maven jar plugin that's configured to suppress Illegal Reflection Warnings._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.2.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.2.0

### Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | An exact version number, or node-style semver selector used to select the version number. |

## Usage
This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddSuppressionForIllegalReflectionWarningsPluginExample`. 
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddSuppressionForIllegalReflectionWarningsPluginExample
displayName: Add Maven Jar Plugin to suppress Illegal Reflection Warnings example
recipeList:
  - org.openrewrite.java.migrate.AddSuppressionForIllegalReflectionWarningsPlugin:
      version: 29.X
```
{% endcode %}

Now that `com.yourorg.AddSuppressionForIllegalReflectionWarningsPluginExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.2.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("com.yourorg.AddSuppressionForIllegalReflectionWarningsPluginExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe":"rewrite-migrate-java":"0.2.0")
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
            <recipe>com.yourorg.AddSuppressionForIllegalReflectionWarningsPluginExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.2.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.AddSuppressionForIllegalReflectionWarningsPluginExample`
