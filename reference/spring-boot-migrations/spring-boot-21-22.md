# Spring Boot 2.1 to 2.2

The following reference is for automating the migration of an application from Spring Boot 2.1 to the latest Spring Boot 2.2.x release.  

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
      <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_2</recipe>
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

### Deprecations from Spring Boot 2.2

This recipe will automatically update the following deprecations, [ref](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.2-Release-Notes#deprecations-in-spring-boot-22):

* The `logging.file` property has been renamed to `logging.file.name`.
* The `logging.path` property has been renamed to `logging.file.path`.
* The `server.connection-timeout` property has been deprecated in favor of server-specific properties since their behaviors are not strictly the same.
* The `server.use-forward-headers` property has been deprecated in favor of `server.forward-headers-strategy`; previously `server.use-forward-headers=true` would use the web server native support. You can now achieve the same with `server.forward-headers-strategy=native`. Because each server has a specific behavior, we now offer an alternative which relies on Spring’s `ForwardedHeaderFilter`: `server.forward-headers-strategy=framework`. Developers should use the option that fits best their use case.
* The `agent` property of the Maven plugin has been renamed to `agents`.
* `ApplicationHealthIndicator` in favour of `PingHealthIndicator` that is always contributed.
* `WebTestClientBuilderCustomizer` has been relocated to `org.springframework.boot.test.web.reactive.server`.
* `ConfigurationBeanFactoryMetadata` in favour of `ConfigurationPropertiesBean`.
* `ConfigurationPropertiesBindingPostProcessor` constructors in favor of `@EnableConfigurationProperties` or the `register` method.
* `ConfigurationPropertiesBindingPostProcessor.VALIDATOR_BEAN_NAME` has moved to `EnableConfigurationProperties.VALIDATOR_BEAN_NAME`.
* `ConfigurationPropertiesBindingPostProcessorRegistrar` in favor of `@EnableConfigurationProperties`.

Remaining deprecations:

* `ReactiveWebServerApplicationContext#getWebServerFactory`.
* Joda time support is deprecated in favour of `java.time`.
* `ConfigurationBeanFactoryMetadata` in favour of `ConfigurationPropertiesBean`.
* `ConfigurationPropertiesBindingPostProcessor` constructors in favor of `@EnableConfigurationProperties` or the `register` method.
* `ConfigurationPropertiesBindingPostProcessor.VALIDATOR_BEAN_NAME` has moved to `EnableConfigurationProperties.VALIDATOR_BEAN_NAME`.
* `ConfigurationPropertiesBindingPostProcessorRegistrar` in favor of `@EnableConfigurationProperties`.

### Deprecations from Spring Boot 2.1

_"Classes, methods and properties that were deprecated in Spring Boot 2.1 have been removed in this release. Please ensure that you aren’t calling deprecated methods before upgrading."_ [_ref_](https://github.com/openrewrite/rewrite-spring/wiki/Spring-Boot-2.2-release-notes-and-OpenRerewrite-migrations#deprecations-from-spring-boot-21)_._

To see upgrades for deprecations in Spring Boot 2.1, refer to [Upgrade Spring Boot 2.1](https://docs.openrewrite.org/reference/spring-boot-migrations/spring-boot-20-21).

