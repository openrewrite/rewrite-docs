# Introduction

This reference document is intended to help you as you migration your applications to newer versions of Spring Boot. 

## Common Recipe Setup

Regardless of which specific version of Spring Boot you are migrating to, the setup is similar for In the pom.xml or build.gradle, edit the configuration for your rewrite build plug-in to include the rewrite-spring dependencies, and activate a specific recipe. 

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



