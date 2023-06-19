# Find annotation

**org.openrewrite.kubernetes.search.FindAnnotation**

_Find annotations that optionally match a given regex._

## Source

[GitHub](https://github.com/openrewrite/rewrite-kubernetes/blob/main/src/main/java/org/openrewrite/kubernetes/search/FindAnnotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-kubernetes/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | annotationName | The name of the annotation to search for the existence of. |
| `String` | value | *Optional*. An optional regex expression that will find values that match. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|annotationName|`mycompany.io/annotation`|
|value|`null`|
|fileMatcher|`null`|


{% tabs %}
{% tab title="null" %}

###### Before
{% code title="null" %}
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod1
  annotations:
    mycompany.io/annotation: "hasvalue"
---
apiVersion: v1
kind: Pod
metadata:
  name: mypod2
  annotations:
    mycompany.io/annotation: "novalue"
```
{% endcode %}

###### After
{% code title="null" %}
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mypod1
  annotations:
    ~~(found:mycompany.io/annotation)~~>mycompany.io/annotation: "hasvalue"
---
apiVersion: v1
kind: Pod
metadata:
  name: mypod2
  annotations:
    ~~(found:mycompany.io/annotation)~~>mycompany.io/annotation: "novalue"
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -6,1 +6,1 @@
  name: mypod1
  annotations:
-   mycompany.io/annotation: "hasvalue"
+   ~~(found:mycompany.io/annotation)~~>mycompany.io/annotation: "hasvalue"
---
@@ -13,1 +13,1 @@
  name: mypod2
  annotations:
-   mycompany.io/annotation: "novalue"
+   ~~(found:mycompany.io/annotation)~~>mycompany.io/annotation: "novalue"

```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindAnnotationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindAnnotationExample
displayName: Find annotation example
recipeList:
  - org.openrewrite.kubernetes.search.FindAnnotation:
      annotationName: mycompany.io/annotation
      value: value.*
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.FindAnnotationExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:2.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.FindAnnotationExample")
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
            <recipe>com.yourorg.FindAnnotationExample</recipe>
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
* [Jon Brisbin](jon@jbrisbin.com)
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Knut Wannheden](knut.wannheden@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindAnnotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
