# Use local variable type inference

**org.openrewrite.java.migrate.lang.UseVar**

_Apply local variable type inference (`var`) for primitives and objects. These recipes can cause unused imports, be advised to run `org.openrewrite.java.RemoveUnusedImports afterwards._

### Tags

* refactoring
* var
* java10

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-lang-var.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.7


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.lang.UseVar")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.7")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.lang.UseVar</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.7</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.lang.UseVar
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `var` for reference-typed variables](../../../java/migrate/lang/var/usevarforobject.md)
* [Use `var` for primitive-typed variables](../../../java/migrate/lang/var/usevarforprimitive.md)
* [Apply `var` to Generic Constructors](../../../java/migrate/lang/var/usevarforgenericsconstructors.md)
* [Apply `var` to Generic Method Invocations](../../../java/migrate/lang/var/usevarforgenericmethodinvocations.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.lang.UseVar
displayName: Use local variable type inference
description: Apply local variable type inference (`var`) for primitives and objects. These recipes can cause unused imports, be advised to run `org.openrewrite.java.RemoveUnusedImports afterwards.
tags:
  - refactoring
  - var
  - java10
recipeList:
  - org.openrewrite.java.migrate.lang.var.UseVarForObject
  - org.openrewrite.java.migrate.lang.var.UseVarForPrimitive
  - org.openrewrite.java.migrate.lang.var.UseVarForGenericsConstructors
  - org.openrewrite.java.migrate.lang.var.UseVarForGenericMethodInvocations

```
{% endtab %}
{% endtabs %}

## Contributors
* [Merlin Bögershausen](mailto:merlin.boegershausen@rwth-aachen.de)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Mike Solomon](mailto:mike@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.lang.UseVar)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
