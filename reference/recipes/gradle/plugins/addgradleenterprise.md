# Add the Gradle Enterprise plugin

**org.openrewrite.gradle.plugins.AddGradleEnterprise**
_Add the Gradle Enterprise plugin to `settings.gradle(.kts)`._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.34.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.34.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | An exact version number or node-style semver selector used to select the version number. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddGradleEnterpriseExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddGradleEnterpriseExample
displayName: Add the Gradle Enterprise plugin example
recipeList:
  - org.openrewrite.gradle.plugins.AddGradleEnterprise:
      version: 3.x
```
{% endcode %}

Now that `com.yourorg.AddGradleEnterpriseExample` has been defined activate it and take a dependency on org.openrewrite:rewrite-gradle:7.34.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("com.yourorg.AddGradleEnterpriseExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.34.0")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddGradleEnterpriseExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.34.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.AddGradleEnterpriseExample`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `com.gradle.enterprise`
  * newVersion: ``

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gradle.plugins.AddGradleEnterprise
displayName: Add the Gradle Enterprise plugin
description: Add the Gradle Enterprise plugin to `settings.gradle(.kts)`.
version: 

recipeList:
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: com.gradle.enterprise
      newVersion: 

```
{% endtab %}
{% endtabs %}
