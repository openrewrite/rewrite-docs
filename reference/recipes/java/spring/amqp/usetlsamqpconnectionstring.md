# Use TLS for AMQP connection strings

**org.openrewrite.java.spring.amqp.UseTlsAmqpConnectionString**

_Use TLS for AMQP connection strings._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/amqp/UseTlsAmqpConnectionString.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.1.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.1.5

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | propertyKey | *Optional*. The Spring property key to perform updates against. If this value is specified, the specified property will be used for searching, otherwise a default of `spring.rabbitmq.addresses` will be used instead. |
| `Integer` | oldPort | The non-TLS enabled port number to replace with the TLS-enabled port. If this value is specified, no changes will be made to amqp connection strings which do not contain this port number.  |
| `Integer` | port | The TLS-enabled port to use. |
| `String` | tlsPropertyKey | *Optional*. The Spring property key to enable default TLS mode against. If this value is specified, the specified property will be used when updating the default TLS mode, otherwise a default of `spring.rabbitmq.ssl.enabled` will be used instead. |
| `List` | pathExpressions | *Optional*. Each value in this list represents a glob expression that is used to match which files will be modified. If this value is not present, this recipe will query the execution context for reasonable defaults. ("**/application.yml", "**/application.yaml", and "**/application.properties". |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UseTlsAmqpConnectionStringExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseTlsAmqpConnectionStringExample
displayName: Use TLS for AMQP connection strings example
recipeList:
  - org.openrewrite.java.spring.amqp.UseTlsAmqpConnectionString:
      propertyKey: spring.rabbitmq.addresses
      oldPort: 1234
      port: 1234
      tlsPropertyKey: spring.rabbitmq.ssl.enabled
      pathExpressions: **/application.yml
```
{% endcode %}

Now that `com.yourorg.UseTlsAmqpConnectionStringExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-spring:5.1.5 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.10")
}

rewrite {
    activeRecipe("com.yourorg.UseTlsAmqpConnectionStringExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.1.5")
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
        <version>5.14.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UseTlsAmqpConnectionStringExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.1.5</version>
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
mod run . --recipe UseTlsAmqpConnectionString
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.amqp.UseTlsAmqpConnectionString)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Shannon Pamperl](mailto:shanman190@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Kun Li, [Nate Danner](mailto:nate@moderne.io)
