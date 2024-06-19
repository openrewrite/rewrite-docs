# Update relocated Micronaut Security config properties

**org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded**

_This recipe will update relocated security config keys in Micronaut configuration property files._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/UpdateSecurityPropertiesIfNeeded.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.7.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.7.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.7.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.7.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.7.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpdateSecurityPropertiesIfNeeded
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `micronaut.security.token.jwt.generator.access-token.expiration`
  * newPropertyKey: `micronaut.security.token.generator.access-token.expiration`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.enabled`
  * newPropertyKey: `micronaut.security.token.cookie.enabled`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-max-age`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-max-age`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-path`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-path`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-domain`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-domain`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `micronaut.security.token.jwt.cookie.cookie-same-site`
  * newPropertyKey: `micronaut.security.token.cookie.cookie-same-site`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `micronaut.security.token.jwt.bearer.enabled`
  * newPropertyKey: `micronaut.security.token.bearer.enabled`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded
displayName: Update relocated Micronaut Security config properties
description: This recipe will update relocated security config keys in Micronaut configuration property files.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.generator.access-token.expiration
      newPropertyKey: micronaut.security.token.generator.access-token.expiration
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.enabled
      newPropertyKey: micronaut.security.token.cookie.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-max-age
      newPropertyKey: micronaut.security.token.cookie.cookie-max-age
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-path
      newPropertyKey: micronaut.security.token.cookie.cookie-path
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-domain
      newPropertyKey: micronaut.security.token.cookie.cookie-domain
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.cookie.cookie-same-site
      newPropertyKey: micronaut.security.token.cookie.cookie-same-site
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: micronaut.security.token.jwt.bearer.enabled
      newPropertyKey: micronaut.security.token.bearer.enabled

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateSecurityPropertiesIfNeeded)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jeremy Grelle](mailto:grellej@unityfoundation.io), [Tim te Beek](mailto:timtebeek@gmail.com)
