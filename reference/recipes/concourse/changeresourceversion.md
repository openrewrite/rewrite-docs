# Change resource version

**org.openrewrite.concourse.ChangeResourceVersion**
_Pin or unpin a resource to a particular version._

## Source

[Github](https://github.com/openrewrite/rewrite-concourse), [Issue Tracker](https://github.com/openrewrite/rewrite-concourse/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-concourse/1.15.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-concourse
* version: 1.15.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceType | Update any resources of this type |
| `String` | version | *Optional*. If less than this version, update. If not provided, clears pins. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeResourceVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeResourceVersionExample
displayName: Change resource version example
recipeList:
  - org.openrewrite.concourse.ChangeResourceVersion:
      resourceType: git
      version: 2.0
```
{% endcode %}

Now that `com.yourorg.ChangeResourceVersionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-concourse:1.15.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("com.yourorg.ChangeResourceVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-concourse:1.15.0")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeResourceVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-concourse</artifactId>
            <version>1.15.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.ChangeResourceVersionExample`
