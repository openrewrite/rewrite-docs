# Find exceeds resource limit

**org.openrewrite.kubernetes.resource.FindExceedsResourceValue**

_Find resource manifests that have limits set beyond a specific maximum._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/resource/FindExceedsResourceValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceValueType | The type of resource value to search for. |
| `String` | resourceType | The type of resource limit to search for. |
| `String` | resourceLimit | The resource limit maximum to search for to find resources that request more than the maximum. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|resourceValueType|`limits`|
|resourceType|`memory`|
|resourceLimit|`64m`|
|fileMatcher|`null`|


{% tabs %}
{% tab title="yaml" %}

###### Before
{% code %}
```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: application
spec:
  containers:
  - image: nginx:latest
    resources:
        limits:
            cpu: "500Mi"
            memory: "256m"
```
{% endcode %}

###### After
{% code %}
```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: application
spec:
  containers:
  - image: nginx:latest
    resources:
        limits:
            cpu: "500Mi"
            memory: ~~(exceeds maximum of 64M)~~>"256m"
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -12,1 +12,1 @@
        limits:
            cpu: "500Mi"
-           memory: "256m"
+           memory: ~~(exceeds maximum of 64M)~~>"256m"

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindExceedsResourceValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindExceedsResourceValueExample
displayName: Find exceeds resource limit example
recipeList:
  - org.openrewrite.kubernetes.resource.FindExceedsResourceValue:
      resourceValueType: limits
      resourceType: memory
      resourceLimit: 2Gi
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.FindExceedsResourceValueExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("com.yourorg.FindExceedsResourceValueExample")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindExceedsResourceValueExample</recipe>
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
* [Jon Brisbin](mailto:jon@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* Aaron Gershman


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.resource.FindExceedsResourceValue)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
