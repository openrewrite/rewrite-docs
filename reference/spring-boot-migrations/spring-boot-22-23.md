# Spring Boot 2.2 to 2.3

The following reference is for automating the migration of an application from Spring Boot 2.2 to the latest Spring Boot 2.3.x release.  

## Activate Spring Boot Migration Recipe

In the pom.xml or build.gradle, edit the configuration for your rewrite plug-in to activate the recipe used for the migration:

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
      <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3</recipe>
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

This recipe will modify your application's configuration files based on [the documented changes from the Spring Boot team](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.3.0-Configuration-Changelog).

### Deprecations from Spring Boot 2.3

This recipe will automatically update the following deprecations, [ref](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.3-Release-Notes#deprecations-in-spring-boot-23):

* The `spring.http.` properties have been moved to `server.servlet.encoding.`, `spring.mvc.` and `spring.codec.`, see [\#18827](https://github.com/spring-projects/spring-boot/issues/18827).
* The `ON_TRACE_PARAM` used with the `server.error.include-stacktrace` property has been renamed to `ON_PARAM`.
* `org.springframework.boot.autoconfigure.elasticsearch.rest.RestClientBuilderCustomizer` has been deprecated in favor of `org.springframework.boot.autoconfigure.elasticsearch.RestClientBuilderCustomizer`

Remaining deprecations:

* `SpringApplication#refresh(ApplicationContext)` has been deprecated in favour of `SpringApplication#refresh(ConfigurableApplicationContext)`.

### Deprecations from Spring Boot 2.2

_"Most classes, methods, and properties that were deprecated in Spring Boot 2.2 have been removed in this release. Please ensure that you aren’t calling deprecated methods before upgrading."_ [_ref_](https://github.com/openrewrite/rewrite-spring/wiki/Spring-Boot-2.2-release-notes-and-OpenRerewrite-migrations#deprecations-from-spring-boot-21)_._

To see upgrades for deprecations in Spring Boot 2.2, refer to [Upgrade Spring Boot 2.2](https://docs.openrewrite.org/reference/spring-boot-migrations/spring-boot-21-22).

