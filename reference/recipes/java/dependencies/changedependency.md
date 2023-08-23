# Change Gradle or Maven dependency

**org.openrewrite.java.dependencies.ChangeDependency**

_Change the groupId, artifactId and/or the version of a specified Gradle or Maven dependency._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/ChangeDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.0.7

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `Boolean` | overrideManagedVersion | *Optional*. If the new dependency has a managed version, this flag can be used to explicitly set the version on the dependency. The default for this flag is `false`. |

## Examples
##### Example 1
Change Gradle dependency

###### Parameters
| Parameter | Value |
| -- | -- |
|oldGroupId|`commons-lang`|
|oldArtifactId|`commons-lang`|
|newGroupId|`org.apache.commons`|
|newArtifactId|`commons-lang3`|
|newVersion|`3.11.x`|
|versionPattern|`null`|
|overrideManagedVersion|`null`|


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
    id "java-library"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "commons-lang:commons-lang:2.6"
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
    id "java-library"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "org.apache.commons:commons-lang3:3.11"
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,1 @@

dependencies {
-   implementation "commons-lang:commons-lang:2.6"
+   implementation "org.apache.commons:commons-lang3:3.11"
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2
Change Maven dependency

###### Parameters
| Parameter | Value |
| -- | -- |
|oldGroupId|`commons-lang`|
|oldArtifactId|`commons-lang`|
|newGroupId|`org.apache.commons`|
|newArtifactId|`commons-lang3`|
|newVersion|`3.11.x`|
|versionPattern|`null`|
|overrideManagedVersion|`null`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.example.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>commons-lang</groupId>
            <artifactId>commons-lang</artifactId>
            <version>2.6</version>
        </dependency>
    </dependencies>
</project>
```
{% endcode %}

###### After
{% code title="pom.xml" %}
```xml
<project>
    <groupId>com.example.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencies>
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.11</version>
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
@@ -7,3 +7,3 @@
    <dependencies>
        <dependency>
-           <groupId>commons-lang</groupId>
-           <artifactId>commons-lang</artifactId>
-           <version>2.6</version>
+           <groupId>org.apache.commons</groupId>
+           <artifactId>commons-lang3</artifactId>
+           <version>3.11</version>
        </dependency>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyExample
displayName: Change Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: rewrite-testing-frameworks
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: rewrite-testing-frameworks
      newVersion: 29.X
      versionPattern: '-jre'
      overrideManagedVersion: null
```
{% endcode %}

Now that `com.yourorg.ChangeDependencyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.0.7 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.0.7")
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
        <version>5.4.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.0.7</version>
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

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle dependency](../../gradle/changedependency.md)
* [Change Maven dependency groupId, artifactId and/or the version](../../maven/changedependencygroupidandartifactid.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.dependencies.ChangeDependency
displayName: Change Gradle or Maven dependency
description: Change the groupId, artifactId and/or the version of a specified Gradle or Maven dependency.







recipeList:
  - org.openrewrite.gradle.ChangeDependency:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:

```
{% endtab %}
{% endtabs %}

## Contributors
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Joan Viladrosa](mailto:joan@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.ChangeDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
