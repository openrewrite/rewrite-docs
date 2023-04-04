# Demonstrate rendering of recipe exceptions

**org.openrewrite.java.RecipeExceptionDemonstration**

_Show how recipe exceptions are rendered in various forms of OpenRewrite tooling._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/RecipeExceptionDemonstration.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/7.39.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.39.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | throwOnMethodPattern | *Optional*. A [method pattern](/reference/method-patterns.md) that is used to find matching method declarations/invocations. |
| `Boolean` | throwOnVisitAll | *Optional*.  |
| `Boolean` | throwOnVisitAllVisitor | *Optional*.  |
| `Boolean` | throwOnApplicableTest | *Optional*.  |
| `Boolean` | throwOnApplicableTestVisitor | *Optional*.  |
| `Boolean` | throwOnSingleSourceApplicableTest | *Optional*.  |
| `Boolean` | throwOnSingleSourceApplicableTestVisitor | *Optional*.  |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.39.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.RecipeExceptionDemonstration")
}

repositories {
    mavenCentral()
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
            <recipe>org.openrewrite.java.RecipeExceptionDemonstration</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.activeRecipes=org.openrewrite.java.RecipeExceptionDemonstration
```
{% endcode %}
{% endtab %}
{% endtabs %}


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.RecipeExceptionDemonstration)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
