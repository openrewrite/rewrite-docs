# Transform classes that extend a given Class to implement the given Interface instead

**org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface**

_As of Spring-Batch 5.0 Listeners has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/batch/ReplaceSupportClassWithItsInterface.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.1.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.1.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | fullyQualifiedClassName | A fully-qualified class name to be replaced. |
| `String` | fullyQualifiedInterfaceName | A fully-qualified Interface name to replace by. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceSupportClassWithItsInterfaceExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceSupportClassWithItsInterfaceExample
displayName: Transform classes that extend a given Class to implement the given Interface instead example
recipeList:
  - org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface:
      fullyQualifiedClassName: org.springframework.batch.core.listener.JobExecutionListenerSupport
      fullyQualifiedInterfaceName: org.springframework.batch.core.JobExecutionListener
```
{% endcode %}

Now that `com.yourorg.ReplaceSupportClassWithItsInterfaceExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.1.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceSupportClassWithItsInterfaceExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.1.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ReplaceSupportClassWithItsInterfaceExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.1.1</version>
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
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ReplaceSupportClassWithItsInterface
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.ReplaceSupportClassWithItsInterface)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
pdesprez, [Sam Snyder](mailto:sam@moderne.io), Kun Li, [Knut Wannheden](mailto:knut@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
