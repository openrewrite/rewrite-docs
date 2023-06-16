# Delete a spring configuration property

**org.openrewrite.java.spring.DeleteSpringProperty**

_Delete a spring configuration property from any configuration file that contains a matching key._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/DeleteSpringProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyKey | The property key to delete. Supports glob expressions |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|propertyKey|`server.servlet-path`|


###### Unchanged
{% code title="null" %}
```properties
server.servlet-path=/tmp/my-server-path
```
{% endcode %}

###### Unchanged
{% code title="null" %}
```yaml
    server:
      servlet-path: /tmp/my-server-path
```
{% endcode %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DeleteSpringPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DeleteSpringPropertyExample
displayName: Delete a spring configuration property example
recipeList:
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: management.endpoint.configprops.*
```
{% endcode %}

Now that `com.yourorg.DeleteSpringPropertyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("com.yourorg.DeleteSpringPropertyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DeleteSpringPropertyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.DeleteSpringProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
