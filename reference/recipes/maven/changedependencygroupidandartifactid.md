# Change Maven dependency groupId, artifactId and/or the version

**org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId**

_Change the groupId, artifactId and/or the version of a specified Maven dependency._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangeDependencyGroupIdAndArtifactId.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob expressions. |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob expressions. |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `Boolean` | overrideManagedVersion | *Optional*. If the new dependency has a managed version, this flag can be used to explicitly set the version on the dependency. The default for this flag is `false`. |

## Data Tables (Only available on the [Moderne platform](https://public.moderne.io/))

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|oldGroupId|`javax.activation`|
|oldArtifactId|`javax.activation-api`|
|newGroupId|`jakarta.activation`|
|newArtifactId|`jakarta.activation-api`|
|newVersion|`null`|
|versionPattern|`null`|
|overrideManagedVersion||


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
    <dependencies>
        <dependency>
            <groupId>javax.activation</groupId>
            <artifactId>javax.activation-api</artifactId>
        </dependency>
    </dependencies>
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
    <dependencies>
        <dependency>
            <groupId>jakarta.activation</groupId>
            <artifactId>jakarta.activation-api</artifactId>
        </dependency>
    </dependencies>
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

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -8,2 +8,2 @@
-            <groupId>javax.activation</groupId>
            <artifactId>javax.activation-api</artifactId>
+            <groupId>jakarta.activation</groupId>
            <artifactId>jakarta.activation-api</artifactId>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample
displayName: Change Maven dependency groupId, artifactId and/or the version example
recipeList:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: rewrite-testing-frameworks
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: rewrite-testing-frameworks
      newVersion: 29.X
      versionPattern: '-jre'
      overrideManagedVersion: null
```
{% endcode %}

Now that `com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.ChangeDependencyGroupIdAndArtifactIdExample</recipe>
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
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
