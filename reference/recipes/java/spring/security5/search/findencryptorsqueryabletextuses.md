# Finds uses of `Encryptors.queryableText()`

**org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses**

_`Encryptors.queryableText()` is insecure and is removed in Spring Security 6._

### Tags

* spring
* security
* search

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-security-58.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.35.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.35.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.35.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.39.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.35.0")
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
            <recipe>org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.35.0</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find method usages](../../../../java/search/findmethods.md)
  * methodPattern: `org.springframework.security.crypto.encrypt.Encryptors queryableText(..)`
  * matchOverrides: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses
displayName: Finds uses of `Encryptors.queryableText()`
description: `Encryptors.queryableText()` is insecure and is removed in Spring Security 6.
tags:
  - spring
  - security
  - search
recipeList:
  - org.openrewrite.java.search.FindMethods:
      methodPattern: org.springframework.security.crypto.encrypt.Encryptors queryableText(..)
      matchOverrides: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
