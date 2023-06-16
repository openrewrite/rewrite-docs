# Add Gradle or Maven dependency

**org.openrewrite.java.dependencies.AddDependency**

_For a Gradle project, add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used. Or For a maven project, Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/AddDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION` |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example, Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `String` | onlyIfUsing | Used to determine if the dependency will be added and in which scope it should be placed. |
| `String` | classifier | *Optional*. A classifier to add. Commonly used to select variants of a library. |
| `String` | familyPattern | *Optional*. A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character. |
| `String` | extension | *Optional*. For Gradle only, The extension of the dependency to add. If omitted Gradle defaults to assuming the type is "jar". |
| `String` | configuration | *Optional*. For Gradle only, A configuration to use when it is not what can be inferred from usage. Most of the time this will be left empty, but is used when adding a new as of yet unused dependency. |
| `String` | scope | *Optional*. For Maven only, A scope to use when it is not what can be inferred from usage. Most of the time this will be left empty, but is used when adding a runtime, provided, or import dependency. |
| `Boolean` | releasesOnly | *Optional*. For Maven only, Whether to exclude snapshots from consideration when using a semver selector |
| `String` | type | *Optional*. For Maven only, The type of dependency to add. If omitted Maven defaults to assuming the type is "jar". |
| `Boolean` | optional | *Optional*. Set the value of the `<optional>` tag. No `<optional>` tag will be added when this is `null`. |
| `Boolean` | acceptTransitive | *Optional*. Default false. If enabled, the dependency will not be added if it is already on the classpath as a transitive dependency. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDependencyExample
displayName: Add Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.google.guava
      artifactId: guava
      version: 29.X
      versionPattern: '-jre'
      onlyIfUsing: org.junit.jupiter.api.*
      classifier: test
      familyPattern: com.fasterxml.jackson*
      extension: jar
      configuration: implementation
      scope: runtime
      releasesOnly: null
      type: jar
      optional: null
      acceptTransitive: true
```
{% endcode %}

Now that `com.yourorg.AddDependencyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.0.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.AddDependencyExample")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddDependencyExample</recipe>
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
* [Add Gradle dependency](../../gradle/adddependency.md)
  * groupId: ``
  * artifactId: ``
  * version: ``
  * versionPattern: ``
  * configuration: ``
  * onlyIfUsing: ``
  * classifier: ``
  * extension: ``
  * familyPattern: ``
* [Add Maven dependency](../../maven/adddependency.md)
  * groupId: ``
  * artifactId: ``
  * version: ``
  * versionPattern: ``
  * scope: ``
  * onlyIfUsing: ``
  * type: ``
  * classifier: ``
  * familyPattern: ``

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.dependencies.AddDependency
displayName: Add Gradle or Maven dependency
description: For a Gradle project, add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used. Or For a maven project, Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used.
groupId: 

artifactId: 

version: 

versionPattern: 

onlyIfUsing: 

classifier: 

familyPattern: 

extension: 

configuration: 

scope: 


type: 



recipeList:
  - org.openrewrite.gradle.AddDependency:
      groupId: 
      artifactId: 
      version: 
      versionPattern: 
      configuration: 
      onlyIfUsing: 
      classifier: 
      extension: 
      familyPattern: 
  - org.openrewrite.maven.AddDependency:
      groupId: 
      artifactId: 
      version: 
      versionPattern: 
      scope: 
      onlyIfUsing: 
      type: 
      classifier: 
      familyPattern: 

```
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](kun@moderne.io)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.dependencies.AddDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
