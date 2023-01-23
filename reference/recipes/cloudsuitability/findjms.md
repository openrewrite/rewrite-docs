# Find JMS files

**org.openrewrite.cloudsuitability.FindJms**
_Run embedded service broker as a JMS Provider._

### Tags

* java-jms

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
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.cloudsuitability.FindJms")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.cloudsuitability.FindJms</recipe>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-cloud-suitability-analyzer:1.1.0 \
  -DactiveRecipes=org.openrewrite.cloudsuitability.FindJms
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.cloudsuitability.FindJms`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find types](../java/search/findtypes.md)
  * fullyQualifiedTypeName: `javax.jms..*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cloudsuitability.FindJms
displayName: Find JMS files
description: Run embedded service broker as a JMS Provider.
tags:
  - java-jms
recipeList:
  - org.openrewrite.java.search.FindTypes:
      fullyQualifiedTypeName: javax.jms..*

```
{% endtab %}
{% endtabs %}
