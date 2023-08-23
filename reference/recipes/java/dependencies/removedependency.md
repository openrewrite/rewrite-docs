# Remove a Gradle or Maven dependency

**org.openrewrite.java.dependencies.RemoveDependency**

_For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`.
For Maven project, removes a single dependency from the <dependencies> section of the pom.xml._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/RemoveDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.0.7

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | configuration | *Optional*. The dependency configuration to remove from. |
| `String` | scope | *Optional*. Only remove dependencies if they are in this scope. If 'runtime', this willalso remove dependencies in the 'compile' scope because 'compile' dependencies are part of the runtime dependency set |

## Examples
##### Example 1
Remove a Gradle dependency

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.springframework.boot`|
|artifactId|`spring-boot*`|
|configuration|`null`|
|scope|`null`|


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
    implementation("org.springframework.boot:spring-boot-starter-web:2.7.0") {
        exclude group: "junit"
    }
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
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
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,3 +10,0 @@

dependencies {
-   implementation("org.springframework.boot:spring-boot-starter-web:2.7.0") {
-       exclude group: "junit"
-   }
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2
Remove a Maven dependency

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`junit`|
|artifactId|`junit`|
|configuration|`null`|
|scope|`null`|


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
      <groupId>com.google.guava</groupId>
      <artifactId>guava</artifactId>
      <version>29.0-jre</version>
    </dependency>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.13.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
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
@@ -14,6 +14,0 @@
      <version>29.0-jre</version>
    </dependency>
-   <dependency>
-     <groupId>junit</groupId>
-     <artifactId>junit</artifactId>
-     <version>4.13.1</version>
-     <scope>test</scope>
-   </dependency>
  </dependencies>
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveDependencyExample
displayName: Remove a Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      configuration: api
      scope: compile
```
{% endcode %}

Now that `com.yourorg.RemoveDependencyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.0.7 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.26")
}

rewrite {
    activeRecipe("com.yourorg.RemoveDependencyExample")
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
            <recipe>com.yourorg.RemoveDependencyExample</recipe>
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
* [Remove a Gradle dependency](../../gradle/removedependency.md)
* [Remove Maven dependency](../../maven/removedependency.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
        ---
        type: specs.openrewrite.org/v1beta/recipe
        name: org.openrewrite.java.dependencies.RemoveDependency
        displayName: Remove a Gradle or Maven dependency
        description: For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`.
For Maven project, removes a single dependency from the <dependencies> section of the pom.xml.




recipeList:
  - org.openrewrite.gradle.RemoveDependency:
  - org.openrewrite.maven.RemoveDependency:

```
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RemoveDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
