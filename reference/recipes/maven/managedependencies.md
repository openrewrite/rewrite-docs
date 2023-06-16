# Manage dependencies

**org.openrewrite.maven.ManageDependencies**

_Make existing dependencies managed by moving their version to be specified in the dependencyManagement section of the POM._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ManageDependencies.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupPattern | Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| `String` | artifactPattern | *Optional*. Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| `Boolean` | addToRootPom | *Optional*. Add to the root pom where root is the eldest parent of the pom within the source set. |
| `Boolean` | skipModelUpdate | *Optional*. Optionally skip updating the dependency model after managing dependencies. Updating the model does not affect the source code of the POM,but will cause the resolved dependency model to reflect the changes made to the POM. If this recipe is ran standalone, it is not necessary to update the model. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupPattern|`org.junit.jupiter`|
|artifactPattern|`*`|
|addToRootPom|`false`|
|skipModelUpdate|`false`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.6.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
                <version>5.6.2</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -5,0 +5,9 @@
+    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
                <version>5.6.2</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
@@ -9,1 +18,0 @@
-            <version>5.6.2</version>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ManageDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ManageDependenciesExample
displayName: Manage dependencies example
recipeList:
  - org.openrewrite.maven.ManageDependencies:
      groupPattern: com.google.*
      artifactPattern: guava*
      addToRootPom: null
      skipModelUpdate: null
```
{% endcode %}

Now that `com.yourorg.ManageDependenciesExample` has been defined activate it in your build file:
{% tabs %}

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
            <recipe>com.yourorg.ManageDependenciesExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.ManageDependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
