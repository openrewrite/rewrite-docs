# Change Maven plugin configuration

**org.openrewrite.maven.ChangePluginConfiguration**

_Apply the specified configuration to a Maven plugin. Will not add the plugin if it does not already exist in the pom._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePluginConfiguration.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | configuration | *Optional*. Plugin configuration provided as raw XML. Supplying `null` will remove any existing configuration. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.openrewrite.maven`|
|artifactId|`rewrite-maven-plugin`|
|configuration|`null`|


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
                <configuration>
                    <activeRecipes>
                        <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>
                    </activeRecipes>
                </configuration>
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
@@ -12,5 +12,0 @@
                <artifactId>rewrite-maven-plugin</artifactId>
                <version>4.1.5</version>
-               <configuration>
-                   <activeRecipes>
-                       <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>
-                   </activeRecipes>
-               </configuration>
            </plugin>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePluginConfigurationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginConfigurationExample
displayName: Change Maven plugin configuration example
recipeList:
  - org.openrewrite.maven.ChangePluginConfiguration:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      configuration: <foo>bar</foo>
```
{% endcode %}

Now that `com.yourorg.ChangePluginConfigurationExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.ChangePluginConfigurationExample</recipe>
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.ChangePluginConfiguration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
