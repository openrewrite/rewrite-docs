# Upgrade Gradle or Maven dependency versions

**org.openrewrite.java.dependencies.UpgradeDependencyVersion**

_For Gradle projects, upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:
* `String` notation: `"group:artifact:version"` 
* `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
Can update version numbers which are defined earlier in the same file in variable declarations.

For Maven projects, upgrade the version of a dependency by specifying a group and (optionally) an artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/UpgradeDependencyVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `Boolean` | overrideManagedVersion | *Optional*. For Maven project only, This flag can be set to explicitly override a managed dependency's version. The default for this flag is `false`. |
| `List` | retainVersions | *Optional*. For Maven project only, Accepts a list of GAVs. For each GAV, if it is a project direct dependency, and it is removed from dependency management after the changes from this recipe, then it will be retained with an explicit version. The version can be omitted from the GAV to use the old value from dependency management |

## Examples
##### Example 1
Upgrade gradle dependency

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`com.google.guava`|
|artifactId|`guava`|
|newVersion|`30.x`|
|versionPattern|`-jre`|
|overrideManagedVersion|`null`|
|retainVersions|`null`|


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
  id 'java-library'
}

repositories {
  mavenCentral()
}

dependencies {
  compileOnly 'com.google.guava:guava:29.0-jre'
  runtimeOnly ('com.google.guava:guava:29.0-jre') {
      force = true
  }
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
  id 'java-library'
}

repositories {
  mavenCentral()
}

dependencies {
  compileOnly 'com.google.guava:guava:30.1.1-jre'
  runtimeOnly ('com.google.guava:guava:30.1.1-jre') {
      force = true
  }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,2 +10,2 @@

dependencies {
- compileOnly 'com.google.guava:guava:29.0-jre'
- runtimeOnly ('com.google.guava:guava:29.0-jre') {
+ compileOnly 'com.google.guava:guava:30.1.1-jre'
+ runtimeOnly ('com.google.guava:guava:30.1.1-jre') {
      force = true
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2
Upgrade maven dependency version

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.junit.jupiter`|
|artifactId|`junit-jupiter-api`|
|newVersion|`5.7.2`|
|versionPattern|`null`|
|overrideManagedVersion|`null`|
|retainVersions|`null`|


{% tabs %}
{% tab title="pom.xml" %}

###### Before
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
                <scope>test</scope>
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
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
                <version>5.7.2</version>
                <scope>test</scope>
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
@@ -10,1 +10,1 @@
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
-               <version>5.6.2</version>
+               <version>5.7.2</version>
                <scope>test</scope>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeDependencyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeDependencyVersionExample
displayName: Upgrade Gradle or Maven dependency versions example
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      newVersion: 29.X
      versionPattern: '-jre'
      overrideManagedVersion: null
      retainVersions: com.jcraft:jsch
```
{% endcode %}

Now that `com.yourorg.UpgradeDependencyVersionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeDependencyVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.0.1")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpgradeDependencyVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.0.1</version>
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
* [Upgrade Gradle dependency versions](../../gradle/upgradedependencyversion.md)
  * groupId: ``
  * artifactId: ``
  * newVersion: ``
  * versionPattern: ``
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: ``
  * artifactId: ``
  * newVersion: ``
  * versionPattern: ``
  * retainVersions: `[]`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
        ---
        type: specs.openrewrite.org/v1beta/recipe
        name: org.openrewrite.java.dependencies.UpgradeDependencyVersion
        displayName: Upgrade Gradle or Maven dependency versions
        description: For Gradle projects, upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:
* `String` notation: `"group:artifact:version"` 
* `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
Can update version numbers which are defined earlier in the same file in variable declarations.

For Maven projects, upgrade the version of a dependency by specifying a group and (optionally) an artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.
groupId: 

artifactId: 

newVersion: 

versionPattern: 


retainVersions: []

recipeList:
  - org.openrewrite.gradle.UpgradeDependencyVersion:
      groupId: 
      artifactId: 
      newVersion: 
      versionPattern: 
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: 
      artifactId: 
      newVersion: 
      versionPattern: 
      retainVersions: []

```
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](kun@moderne.io)
* [Mike Solomon](mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.UpgradeDependencyVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
