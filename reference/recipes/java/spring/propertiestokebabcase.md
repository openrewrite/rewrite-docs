# Normalize Spring properties to kebab-case

**org.openrewrite.java.spring.PropertiesToKebabCase**
_Normalize Spring properties to use lowercase and hyphen-separated syntax. For example, changing `spring.main.showBanner` to `spring.main.show-banner`. With [Spring's relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding), `kebab-case` may be used in properties files and still be converted to configuration beans. Note, an exception to this is the case of `@Value`, which is match-sensitive. For example, `@Value("${anExampleValue}")` will not match `an-example-value`. [The Spring reference documentation recommends using `kebab-case` for properties where possible.](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding)._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/PropertiesToKebabCase.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.34.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.34.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.34.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.38.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.PropertiesToKebabCase")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.34.0")
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
        <version>4.42.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.PropertiesToKebabCase</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.34.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.PropertiesToKebabCase
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Normalize Spring `application*.{yml,yaml}` properties to kebab-case](../../java/spring/propertiestokebabcase$propertiestokebabcaseyaml.md)
* [Normalize Spring `application*.properties` properties to kebab-case](../../java/spring/propertiestokebabcase$propertiestokebabcaseproperties.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.PropertiesToKebabCase
displayName: Normalize Spring properties to kebab-case
description: Normalize Spring properties to use lowercase and hyphen-separated syntax. For example, changing `spring.main.showBanner` to `spring.main.show-banner`. With [Spring's relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding), `kebab-case` may be used in properties files and still be converted to configuration beans. Note, an exception to this is the case of `@Value`, which is match-sensitive. For example, `@Value("${anExampleValue}")` will not match `an-example-value`. [The Spring reference documentation recommends using `kebab-case` for properties where possible.](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding).
recipeList:
  - org.openrewrite.java.spring.PropertiesToKebabCase$PropertiesToKebabCaseYaml
  - org.openrewrite.java.spring.PropertiesToKebabCase$PropertiesToKebabCaseProperties

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.PropertiesToKebabCase)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
