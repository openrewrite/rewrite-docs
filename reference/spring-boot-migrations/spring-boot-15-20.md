# Spring Boot 1.5 to 2.0

The following reference is for automating the migration of an application from Spring Boot 1.5 to the latest Spring Boot 2.0.x release.  

## Activate Spring Boot Migration Recipe

In the pom.xml or build.gradle, edit the configuration for your rewrite plug-in to activate the recipe that will be used for the migration:

{% tabs %}
{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<plugin>
  <groupId>org.openrewrite.maven</groupId>
  <artifactId>rewrite-maven-plugin</artifactId>
  <version>4.9.0</version>
  ...
  <configuration>
    <activeRecipes>
      <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0</recipe>
    </activeRecipes>
  </configuration>
</plugin>
```
{% endcode %}
{% endtab %}

{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
...

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot15to20")
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're able to run any of the Maven goals or Gradle tasks provided by the plugins.

### Configuration Changes

This recipe will make modifications to your application's configuration files based on [the documented changes from the Spring Boot team](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Configuration-Changelog).



