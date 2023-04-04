# Replace Powermock with raw Mockito

**org.openrewrite.java.testing.mockito.ReplacePowerMockito**

_Replace Powermock with raw Mockito._

### Tags

* testing
* mockito

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.36.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.36.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:1.36.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.39.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.mockito.ReplacePowerMockito")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.36.0")
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
        <version>4.43.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.mockito.ReplacePowerMockito</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.36.0</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.mockito.ReplacePowerMockito
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove annotation](../../../java/removeannotation.md)
  * annotationPattern: `@org.powermock.core.classloader.annotations.PowerMockIgnore`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.powermock.api.mockito.PowerMockito mockStatic(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
  * returnType: `org.mockito.MockedStatic`
* [Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`](../../../java/testing/mockito/powermockitomockstatictomockito.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.ReplacePowerMockito
displayName: Replace Powermock with raw Mockito
description: Replace Powermock with raw Mockito.
tags:
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: @org.powermock.core.classloader.annotations.PowerMockIgnore
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.powermock.api.mockito.PowerMockito mockStatic(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
      returnType: org.mockito.MockedStatic
  - org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.mockito.ReplacePowerMockito)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
