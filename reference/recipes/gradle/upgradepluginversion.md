# Update a Gradle plugin by id

** org.openrewrite.gradle.UpgradePluginVersion**
_Update a Gradle plugin by id to a later version._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.17.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.17.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginIdPattern | The `ID` part of `plugin { ID }`, as a glob expression. |
| `String` | newVersion | An exact version number, or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UpgradePluginVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradePluginVersionExample
displayName: Update a Gradle plugin by id example
recipeList:
  - org.openrewrite.gradle.UpgradePluginVersion:
      pluginIdPattern: com.jfrog.bintray
      newVersion: 29.X
      versionPattern: -jre
```
{% endcode %}

Now that `com.yourorg.UpgradePluginVersionExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.17.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.5")
}

rewrite {
    activeRecipe("com.yourorg.UpgradePluginVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.17.0")
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
        <version>4.17.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpgradePluginVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.17.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipes=com.yourorg.UpgradePluginVersionExample`
