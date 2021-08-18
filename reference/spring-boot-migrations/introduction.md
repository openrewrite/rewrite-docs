# Introduction

This reference document is intended to help you as you migration your applications to newer versions of Spring Boot. 

## Common Recipe Setup

Regardless of which specific version of Spring Boot you are migrating to, the setup for the rewrite build plug-in is similar.  In your build file, edit the configuration to add the rewrite build plug-in, include the `rewrite-spring` dependency, and activate a spring migration recipe.

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.9.0</version>
  <configuration>
    <activeRecipes>
      <recipe>## REPLACE WITH SPRING BOOT MIGRATION RECIPE ##</recipe>
    </activeRecipes>
  </configuration>
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-spring</artifactId>
      <version>4.9.0</version>
    </dependency>
  </dependencies>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("java")
    id("org.openrewrite.rewrite") version("5.7.0")
}

rewrite {
    activeRecipe("## REPLACE WITH SPRING BOOT MIGRATION RECIPE ##")
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.9.0")

    // Other project dependencies
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% hint style="info" %}
The specific migration recipe to activate is specified in the sections below.
{% endhint %}

## Automated Dependency Updates

Open Rewrite will automatically update Maven-based projects to the correct version of Spring Boot when applying any of the migration recipes.

{% hint style="danger" %}
If you are using Gradle, you will need to manually update the Spring Boot dependencies to match the version you are migrating to.
{% endhint %}

## Configuration Property Migration

Open Rewrite will automatically rename the configuration properties that have changed when upgrading to a specific version of Spring Boot. The recipe will make changes to both `.properties` and `.yml` files.  


