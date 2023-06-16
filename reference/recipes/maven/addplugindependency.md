# Add Maven plugin dependencies

**org.openrewrite.maven.AddPluginDependency**

_Adds the specified dependencies to a Maven plugin. Will not add the plugin if it does not already exist in the pom._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddPluginDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginGroupId | GroupId of the plugin to which the dependency will be added. A GroupId is the first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | pluginArtifactId | ArtifactId of the plugin to which the dependency will be added.The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | groupId | The GroupId of the dependency to add. |
| `String` | artifactId | The ArtifactId of the dependency to add. |
| `String` | version | The Version of the dependency to add. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|pluginGroupId|`org.openrewrite.maven`|
|pluginArtifactId|`rewrite-maven-plugin`|
|groupId|`org.openrewrite.recipe`|
|artifactId|`rewrite-spring`|
|version|`1.0.0`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
    <groupId>org.example</groupId>
    <artifactId>foo</artifactId>
    <version>1.0</version>

    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.1.5</version>
            </plugin>
        </plugins>
    </build>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <groupId>org.example</groupId>
    <artifactId>foo</artifactId>
    <version>1.0</version>

    <build>
        <plugins>
            <plugin>
                <groupId>org.openrewrite.maven</groupId>
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.1.5</version>
                <dependencies>
                    <dependency>
                        <groupId>org.openrewrite.recipe</groupId>
                        <artifactId>rewrite-spring</artifactId>
                        <version>1.0.0</version>
                    </dependency>
                </dependencies>
            </plugin>
        </plugins>
    </build>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -12,0 +12,7 @@
+                <dependencies>
                    <dependency>
                        <groupId>org.openrewrite.recipe</groupId>
                        <artifactId>rewrite-spring</artifactId>
                        <version>1.0.0</version>
                    </dependency>
                </dependencies>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPluginDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPluginDependencyExample
displayName: Add Maven plugin dependencies example
recipeList:
  - org.openrewrite.maven.AddPluginDependency:
      pluginGroupId: org.openrewrite.maven
      pluginArtifactId: rewrite-maven-plugin
      groupId: org.openrewrite.recipe
      artifactId: org.openrewrite.recipe
      version: org.openrewrite.recipe
```
{% endcode %}

Now that `com.yourorg.AddPluginDependencyExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.AddPluginDependencyExample</recipe>
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
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.AddPluginDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
