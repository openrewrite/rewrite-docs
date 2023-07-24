# Find exceeds resource ratio

**org.openrewrite.kubernetes.resource.FindExceedsResourceRatio**

_Find resource manifests that have requests to limits ratios beyond a specific maximum._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/resource/FindExceedsResourceRatio.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceType | The type of resource limit to search for. |
| `String` | ratioLimit | The maximum ratio allowed between requests and limits. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|resourceType|`memory`|
|ratioLimit|`2`|
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
            cpu: "2Gi"
            memory: "1Gi"
        requests:
            cpu: "100Mi"
            memory: "64m"
  - image: k8s.gcr.io/test-webserver
    resources:
        limits:
            cpu: "2Gi"
            memory: "1Gi"
        requests:
            cpu: "100Mi"
            memory: "64m"
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
    ~~(exceeds max memory limits/requests ratio of 2)~~>resources:
        limits:
            cpu: "2Gi"
            memory: "1Gi"
        requests:
            cpu: "100Mi"
            memory: "64m"
  - image: k8s.gcr.io/test-webserver
    ~~(exceeds max memory limits/requests ratio of 2)~~>resources:
        limits:
            cpu: "2Gi"
            memory: "1Gi"
        requests:
            cpu: "100Mi"
            memory: "64m"
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -9,1 +9,1 @@
  containers:
  - image: nginx:latest
-   resources:
+   ~~(exceeds max memory limits/requests ratio of 2)~~>resources:
        limits:
@@ -17,1 +17,1 @@
            memory: "64m"
  - image: k8s.gcr.io/test-webserver
-   resources:
+   ~~(exceeds max memory limits/requests ratio of 2)~~>resources:
        limits:
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindExceedsResourceRatioExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindExceedsResourceRatioExample
displayName: Find exceeds resource ratio example
recipeList:
  - org.openrewrite.kubernetes.resource.FindExceedsResourceRatio:
      resourceType: memory
      ratioLimit: 2
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.FindExceedsResourceRatioExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("com.yourorg.FindExceedsResourceRatioExample")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindExceedsResourceRatioExample</recipe>
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
* [Knut Wannheden](mailto:knut.wannheden@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* Aaron Gershman


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.resource.FindExceedsResourceRatio)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
