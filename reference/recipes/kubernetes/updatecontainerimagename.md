# Update image name

**org.openrewrite.kubernetes.UpdateContainerImageName**

_Search for image names that match patterns and replace the components of the name with new values._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/UpdateContainerImageName.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.1

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
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|repoToFind|`null`|
|imageToFind|`nginx`|
|tagToFind|`null`|
|repoToUpdate|`gcr.io/myaccount/myrepo`|
|imageToUpdate|`nginx-custom`|
|tagToUpdate|`latest`|
|includeInitContainers|`false`|
|fileMatcher|`null`|


{% tabs %}
{% tab title="yaml" %}

###### Before
{% code %}
```yaml
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: nginx
---
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: gcr.io/myaccount/myrepo/nginx
    initContainers:
    - image: gcr.io/myaccount/myrepo/myinit:latest
```
{% endcode %}

###### After
{% code %}
```yaml
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: gcr.io/myaccount/myrepo/nginx-custom:latest
---
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: gcr.io/myaccount/myrepo/nginx
    initContainers:
    - image: gcr.io/myaccount/myrepo/myinit:latest
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -5,1 +5,1 @@
spec:
    containers:
-   - image: nginx
+   - image: gcr.io/myaccount/myrepo/nginx-custom:latest
---
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateContainerImageNameExample`.
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
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.UpdateContainerImageNameExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("com.yourorg.UpdateContainerImageNameExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:2.0.1")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateContainerImageNameExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>2.0.1</version>
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
* [Jon Brisbin](mailto:jon@jbrisbin.com)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.UpdateContainerImageName)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
