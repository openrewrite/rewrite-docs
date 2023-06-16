# Upgrade Maven parent project version

**org.openrewrite.maven.UpgradeParentVersion**

_Set the parent pom version number according to a node-style semver selector or to a specific version number._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/UpgradeParentVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.springframework.boot:spring-boot-parent:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'org.springframework.boot:spring-boot-parent:VERSION'. |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `List` | retainVersions | *Optional*. Accepts a list of GAVs. For each GAV, if it is a project direct dependency, and it is removed from dependency management in the new parent pom, then it will be retained with an explicit version. The version can be omitted from the GAV to use the old value from dependency management |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`*`|
|artifactId|`*`|
|newVersion|`latest.patch`|
|versionPattern|`null`|
|retainVersions|`null`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
  <parent>
      <groupId>org.jenkins-ci.plugins</groupId>
      <artifactId>credentials</artifactId>
      <version>2.3.0</version>
  </parent>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
  <!--~~(org.jenkins-ci.plugins:credentials failed. Unable to download metadata. Tried repositories:
https://repo.maven.apache.org/maven2: HTTP 404)~~>--><parent>
      <groupId>org.jenkins-ci.plugins</groupId>
      <artifactId>credentials</artifactId>
      <version>2.3.0</version>
  </parent>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- pom.xml
+++ pom.xml
@@ -2,1 +2,2 @@
<project>
- <parent>
+ <!--~~(org.jenkins-ci.plugins:credentials failed. Unable to download metadata. Tried repositories:
+https://repo.maven.apache.org/maven2: HTTP 404)~~>--><parent>
      <groupId>org.jenkins-ci.plugins</groupId>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeParentVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeParentVersionExample
displayName: Upgrade Maven parent project version example
recipeList:
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-parent
      newVersion: 29.X
      versionPattern: '-jre'
      retainVersions: com.jcraft:jsch
```
{% endcode %}

Now that `com.yourorg.UpgradeParentVersionExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.UpgradeParentVersionExample</recipe>
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
* [Jonathan Schneider](jkschneider@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.maven.UpgradeParentVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
