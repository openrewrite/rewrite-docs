# Spring Boot 1.5 to 2.0

## Recipe Setup

In the pom.xml or build.gradle, edit the configuration for your rewrite build plug-in to activate the Spring Boot 1.5 to  Spring Boot 2.0 migration.

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
      <recipe></recipe>
    </activeRecipes>
  </configuration>
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
    activeRecipe("")
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're able to run any of the Maven goals or Gradle tasks provided by the plugins.

