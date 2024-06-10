# Migrate from Jackson Codehaus (legacy) to Jackson FasterXML

**org.openrewrite.java.jackson.CodehausToFasterXML**

_In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/codehaus-to-fasterxml.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jackson/0.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-jackson
* version: 0.3.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-jackson:0.3.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.jackson.CodehausToFasterXML")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-jackson:0.3.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.16.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-jackson:0.3.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.jackson.CodehausToFasterXML")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.33.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.jackson.CodehausToFasterXML</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-jackson</artifactId>
            <version>0.3.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-jackson:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.jackson.CodehausToFasterXML 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe CodehausToFasterXML
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Jackson `@JsonInclude`](../../java/jackson/codehaus/jsonincludeannotation.md)
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.codehaus.jackson.map.JsonSerializer`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.databind.JsonSerializer`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.codehaus.jackson.map.annotate.JsonSerialize$Inclusion`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.annotation.JsonInclude$Include`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.codehaus.jackson.map.annotate.JsonSerialize`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.databind.annotation.JsonSerialize`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.codehaus.jackson.map.ObjectMapper`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.databind.ObjectMapper`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.codehaus.jackson.map.SerializationConfig$Feature`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.databind.SerializationFeature`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.codehaus.jackson.map.DeserializationConfig$Feature`
  * newFullyQualifiedTypeName: `com.fasterxml.jackson.databind.DeserializationFeature`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.codehaus.jackson`
  * oldArtifactId: `jackson-mapper-asl`
  * newGroupId: `com.fasterxml.jackson.core`
  * newArtifactId: `jackson-databind`
  * newVersion: `2.x`
  * overrideManagedVersion: `false`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.codehaus.jackson`
  * oldArtifactId: `jackson-core-asl`
  * newGroupId: `com.fasterxml.jackson.core`
  * newArtifactId: `jackson-core`
  * newVersion: `2.x`
  * overrideManagedVersion: `false`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency.md)
  * groupId: `com.fasterxml.jackson.core`
  * artifactId: `jackson-databind`
  * version: `2.x`
  * onlyIfUsing: `com.fasterxml.jackson.databind.*`
  * acceptTransitive: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.CodehausToFasterXML
displayName: Migrate from Jackson Codehaus (legacy) to Jackson FasterXML
description: In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML.

recipeList:
  - org.openrewrite.java.jackson.codehaus.JsonIncludeAnnotation
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.codehaus.jackson.map.JsonSerializer
      newFullyQualifiedTypeName: com.fasterxml.jackson.databind.JsonSerializer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.codehaus.jackson.map.annotate.JsonSerialize$Inclusion
      newFullyQualifiedTypeName: com.fasterxml.jackson.annotation.JsonInclude$Include
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.codehaus.jackson.map.annotate.JsonSerialize
      newFullyQualifiedTypeName: com.fasterxml.jackson.databind.annotation.JsonSerialize
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.codehaus.jackson.map.ObjectMapper
      newFullyQualifiedTypeName: com.fasterxml.jackson.databind.ObjectMapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.codehaus.jackson.map.SerializationConfig$Feature
      newFullyQualifiedTypeName: com.fasterxml.jackson.databind.SerializationFeature
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.codehaus.jackson.map.DeserializationConfig$Feature
      newFullyQualifiedTypeName: com.fasterxml.jackson.databind.DeserializationFeature
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.codehaus.jackson
      oldArtifactId: jackson-mapper-asl
      newGroupId: com.fasterxml.jackson.core
      newArtifactId: jackson-databind
      newVersion: 2.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.codehaus.jackson
      oldArtifactId: jackson-core-asl
      newGroupId: com.fasterxml.jackson.core
      newArtifactId: jackson-core
      newVersion: 2.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.fasterxml.jackson.core
      artifactId: jackson-databind
      version: 2.x
      onlyIfUsing: com.fasterxml.jackson.databind.*
      acceptTransitive: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.jackson.CodehausToFasterXML)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
