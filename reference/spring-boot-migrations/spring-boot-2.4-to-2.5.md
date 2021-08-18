# Spring Boot 2.4 to 2.5

The following reference is for automating the migration of an application from Spring Boot 2.4 to the latest Spring Boot 2.5.x release.  

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
      <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5</recipe>
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

This recipe will modify your application's configuration files based on [the documented changes from the Spring Boot team](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Configuration-Changelog).

### Notable Deprecations from Spring Boot 2.5

This recipe will automatically update the following deprecations, [ref](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#notable-deprecations-in-spring-boot-25):

* `ActuatorMediaType` and `ApiVersion` in `org.springframework.boot.actuate.endpoint.http` in favor of equivalents in `org.springframework.boot.actuate.endpoint`. 
* `EntityManagerFactoryDependsOnPostProcessor` in `org.springframework.boot.autoconfigure.data.jpa` has been relocated to `org.springframework.boot.autoconfigure.orm.jpa`

Remaining deprecations:

* Support for beans that implement jOOQ’s `*Provider` callback interfaces or `Settings` has been deprecated. A `DefaultConfigurationCustomizer` should be used instead.

### Deprecations from Spring Boot 2.3 and 2.4

_Reflecting the Spring Boot_ [_release compatibility policy_](https://github.com/spring-projects/spring-boot/wiki/Supported-Versions#release-compatibility)_, code deprecated in Spring Boot 2.3 has been removed in Spring Boot 2.5. Code deprecated in Spring Boot 2.4 remains in place and is scheduled for removal in Spring Boot 2.6._ [_ref_](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#deprecations-from-spring-boot-23-and-24)_._

To see upgrades for deprecations in Spring Boot 2.3, refer to [Upgrade Spring Boot 2.3](https://docs.openrewrite.org/reference/spring-boot-migrations/spring-boot-23-24).







