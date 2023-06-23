# Upgrade Maven plugin version

**org.openrewrite.maven.UpgradePluginVersion**

_Upgrade the version of a plugin using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/UpgradePluginVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `Boolean` | trustParent | *Optional*. Even if the parent suggests a version that is older than what we are trying to upgrade to, trust it anyway. Useful when you want to wait for the parent to catch up before upgrading. The parent is not trusted by default. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`io.quarkus`|
|artifactId|`quarkus-maven-plugin`|
|newVersion|`1.13.5.Final`|
|versionPattern|`null`|
|trustParent|`null`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.openrewrite.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <build>
    <plugins>
      <plugin>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-maven-plugin</artifactId>
        <version>1.13.3.Final</version>
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
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.openrewrite.example</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>

  <build>
    <plugins>
      <plugin>
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-maven-plugin</artifactId>
        <version>1.13.5.Final</version>
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
@@ -13,1 +13,1 @@
        <groupId>io.quarkus</groupId>
        <artifactId>quarkus-maven-plugin</artifactId>
-       <version>1.13.3.Final</version>
+       <version>1.13.5.Final</version>
      </plugin>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradePluginVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradePluginVersionExample
displayName: Upgrade Maven plugin version example
recipeList:
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      newVersion: 29.X
      versionPattern: '-jre'
      trustParent: null
```
{% endcode %}

Now that `com.yourorg.UpgradePluginVersionExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.UpgradePluginVersionExample</recipe>
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
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.UpgradePluginVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
