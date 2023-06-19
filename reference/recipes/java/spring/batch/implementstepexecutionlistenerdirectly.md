# Transform classes that extend `StepExecutionListenerSupport` to implement the `StepExecutionListener` interface instead

**org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly**

_As of 5.0 `StepExecutionListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-batch-5.0.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Transform classes that extend a given Class to implement the given Interface instead](../../../java/spring/batch/replacesupportclasswithitsinterface.md)
  * fullyQualifiedClassName: `org.springframework.batch.core.listener.StepExecutionListenerSupport`
  * fullyQualifiedInterfaceName: `org.springframework.batch.core.StepExecutionListener`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly
displayName: Transform classes that extend `StepExecutionListenerSupport` to implement the `StepExecutionListener` interface instead
description: As of 5.0 `StepExecutionListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter.
recipeList:
  - org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface:
      fullyQualifiedClassName: org.springframework.batch.core.listener.StepExecutionListenerSupport
      fullyQualifiedInterfaceName: org.springframework.batch.core.StepExecutionListener

```
{% endtab %}
{% endtabs %}

## Contributors
* [pdesprez](35764353+desprez@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
