# Update CircleCI image

** org.openrewrite.circleci.UpdateImage**
_See the list of [pre-built CircleCI images](https://circleci.com/docs/2.0/circleci-images/)._

## Source

[Github](https://github.com/openrewrite/rewrite-circleci), [Issue Tracker](https://github.com/openrewrite/rewrite-circleci/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-circleci/1.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-circleci
* version: 1.14.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | image | Image to use. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UpdateImageExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateImageExample
displayName: Update CircleCI image example
recipeList:
  - org.openrewrite.circleci.UpdateImage:
      image: circleci/openjdk:jdk
```
{% endcode %}

Now that `com.yourorg.UpdateImageExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-circleci:1.14.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("com.yourorg.UpdateImageExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-circleci:1.14.0")
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UpdateImageExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-circleci</artifactId>
            <version>1.14.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.UpdateImageExample`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change value](../yaml/changevalue.md)
  * oldKeyPath: `$.jobs.build.machine.image`
  * value: ``
  * fileMatcher: `.circleci/config.yml`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.circleci.UpdateImage
displayName: Update CircleCI image
description: See the list of [pre-built CircleCI images](https://circleci.com/docs/2.0/circleci-images/).
image: 

recipeList:
  - org.openrewrite.yaml.ChangeValue:
      oldKeyPath: $.jobs.build.machine.image
      value: 
      fileMatcher: .circleci/config.yml

```
{% endtab %}
{% endtabs %}
