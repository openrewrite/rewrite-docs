# Find java key store files

**org.openrewrite.cloudsuitability.FindJks**
_In a cloud environment, use a centralized keystore, such as Azure Key Vault or AWS Secrets Manager, to better secure sensitive information._

### Tags

* java
* jks
* keystore

## Source

[Github](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer), [Issue Tracker](https://github.com/openrewrite/rewrite-cloud-suitability-analyzer/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-cloud-suitability-analyzer/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-cloud-suitability-analyzer
* version: 1.1.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.1.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindJks")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.1.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
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
            <recipe>org.openrewrite.cloudsuitability.FindJks</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-cloud-suitability-analyzer</artifactId>
            <version>1.1.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.1.0 \
  -DactiveRecipes=org.openrewrite.cloudsuitability.FindJks
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindJks`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find files](../findsourcefiles.md)
  * filePattern: `**/*.jks`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cloudsuitability.FindJks
displayName: Find java key store files
description: In a cloud environment, use a centralized keystore, such as Azure Key Vault or AWS Secrets Manager, to better secure sensitive information.
tags:
  - java
  - jks
  - keystore
recipeList:
  - org.openrewrite.FindSourceFiles:
      filePattern: **/*.jks

```
{% endtab %}
{% endtabs %}
