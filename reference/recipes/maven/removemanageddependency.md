# Remove Maven managed dependency

**org.openrewrite.maven.RemoveManagedDependency**

_Removes a single managed dependency from the <dependencyManagement><dependencies> section of the pom.xml._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveManagedDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a managed dependency coordinate `com.google.guava:guava:VERSION`. |
| `String` | artifactId | The second part of a managed dependency coordinate `com.google.guava:guava:VERSION`. |
| `String` | scope | *Optional*. Only remove managed dependencies if they are in this scope. If 'runtime', this willalso remove managed dependencies in the 'compile' scope because 'compile' dependencies are part of the runtime dependency set |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`javax.activation`|
|artifactId|`javax.activation-api`|
|scope|`null`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>javax.activation</groupId>
                <artifactId>javax.activation-api</artifactId>
                <version>1.2.0</version>
            </dependency>
            <dependency>
                <groupId>jakarta.activation</groupId>
                <artifactId>jakarta.activation-api</artifactId>
                <version>1.2.1</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>jakarta.activation</groupId>
                <artifactId>jakarta.activation-api</artifactId>
                <version>1.2.1</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -9,5 +9,0 @@
        <dependencies>
            <dependency>
-               <groupId>javax.activation</groupId>
-               <artifactId>javax.activation-api</artifactId>
-               <version>1.2.0</version>
-           </dependency>
-           <dependency>
                <groupId>jakarta.activation</groupId>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveManagedDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveManagedDependencyExample
displayName: Remove Maven managed dependency example
recipeList:
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: com.google.guava
      artifactId: guava
      scope: compile
```
{% endcode %}

Now that `com.yourorg.RemoveManagedDependencyExample` has been defined activate it in your build file:
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveManagedDependencyExample</recipe>
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

## Contributors
* [Guillaume Smet](guillaume.smet@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RemoveManagedDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
