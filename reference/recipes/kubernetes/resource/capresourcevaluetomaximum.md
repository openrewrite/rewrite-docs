# Cap exceeds resource value

**org.openrewrite.kubernetes.resource.CapResourceValueToMaximum**

_Cap resource values that exceed a specific maximum._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/resource/CapResourceValueToMaximum.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceValueType | The type of resource to search for. |
| `String` | resourceType | The type of resource value to search for. |
| `String` | resourceLimit | The resource maximum to search for to find resources that request more than the maximum. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|resourceValueType|`limits`|
|resourceType|`memory`|
|resourceLimit|`64Mi`|
|fileMatcher|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
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
            memory: "256M"
```
{% endcode %}

###### After
{% code title="null" %}
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
            memory: "67M"
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -12,1 +12,1 @@
        limits:
            cpu: "500Mi"
-           memory: "256M"
+           memory: "67M"

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CapResourceValueToMaximumExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CapResourceValueToMaximumExample
displayName: Cap exceeds resource value example
recipeList:
  - org.openrewrite.kubernetes.resource.CapResourceValueToMaximum:
      resourceValueType: limits
      resourceType: memory
      resourceLimit: 2Gi
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.CapResourceValueToMaximumExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.CapResourceValueToMaximumExample")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.CapResourceValueToMaximumExample</recipe>
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
* [Jon Brisbin](jon@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut.wannheden@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.resource.CapResourceValueToMaximum)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
