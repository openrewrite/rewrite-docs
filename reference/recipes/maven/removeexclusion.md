# Remove exclusion

**org.openrewrite.maven.RemoveExclusion**

_Remove any matching exclusion from any matching dependency._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveExclusion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. |
| `String` | exclusionGroupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. |
| `String` | exclusionArtifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. |
| `Boolean` | onlyIneffective | *Optional*. Default false. If enabled, matching exclusions will only be removed if they are ineffective (if the excluded dependency was not actually a transitive dependency of the target dependency). |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`com.google.guava`|
|artifactId|`guava`|
|exclusionGroupId|`commons-lang`|
|exclusionArtifactId|`commons-lang`|
|onlyIneffective|`null`|


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
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>29.0-jre</version>
      <exclusions>
        <exclusion>
          <groupId>commons-lang</groupId>
          <artifactId>commons-lang</artifactId>
        </exclusion>
      </exclusions>
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
  <dependencies>
    <dependency>
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>29.0-jre</version>
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
@@ -10,6 +10,0 @@
      <artifactId>guava</artifactId>
      <version>29.0-jre</version>
-     <exclusions>
-       <exclusion>
-         <groupId>commons-lang</groupId>
-         <artifactId>commons-lang</artifactId>
-       </exclusion>
-     </exclusions>
    </dependency>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveExclusionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveExclusionExample
displayName: Remove exclusion example
recipeList:
  - org.openrewrite.maven.RemoveExclusion:
      groupId: com.google.guava
      artifactId: guava
      exclusionGroupId: com.google.guava
      exclusionArtifactId: guava
      onlyIneffective: null
```
{% endcode %}

Now that `com.yourorg.RemoveExclusionExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.RemoveExclusionExample</recipe>
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
* [Jonathan Schneider](jkschneider@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Knut Wannheden](knut.wannheden@mobi.ch)
* [Patrick](patway99@gmail.com)
* [Guillaume Smet](guillaume.smet@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.RemoveExclusion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
