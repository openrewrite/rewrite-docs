# Update image name

** org.openrewrite.kubernetes.UpdateContainerImageName**
_Search for image names that match patterns and replace the components of the name with new values._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.4.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | repoToFind | *Optional*. The repository part of the image name to search for in containers and initContainers. |
| `String` | imageToFind | The image name to search for in containers and initContainers. |
| `String` | tagToFind | *Optional*. The tag part of the image name to search for in containers and initContainers. |
| `String` | repoToUpdate | *Optional*. The repository part of the image name to update to in containers and initContainers. |
| `String` | imageToUpdate | *Optional*. The image name to update to in containers and initContainers. |
| `String` | tagToUpdate | *Optional*. The tag part of the image name to update to in containers and initContainers. |
| `boolean` | includeInitContainers | *Optional*. Boolean to indicate whether or not to treat initContainers/image identically to containers/image. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UpdateContainerImageNameExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateContainerImageNameExample
displayName: Update image name example
recipeList:
  - org.openrewrite.kubernetes.UpdateContainerImageName:
      repoToFind: gcr.io
      imageToFind: nginx
      tagToFind: v1.2.3
      repoToUpdate: gcr.io/account/bucket
      imageToUpdate: nginx
      tagToUpdate: v1.2.3
      includeInitContainers: false
```
{% endcode %}

Now that `com.yourorg.UpdateContainerImageNameExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.4.0")
}

rewrite {
    activeRecipe("com.yourorg.UpdateContainerImageNameExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.4.0")
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateContainerImageNameExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.UpdateContainerImageNameExample`
