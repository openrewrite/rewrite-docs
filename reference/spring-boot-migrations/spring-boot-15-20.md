# Spring Boot 1.5 to 2.0

The following reference is for automating the migration of an application from Spring Boot 1.5 to the latest Spring Boot 2.0.x release.  

## Activate Spring Boot Migration Recipe

Edit your `pom.xml` or `build.gradle`, to activate the Spring Boot migration recipe:

```text
org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
```

At this point, you're able to run any of the Maven goals or Gradle tasks provided by the plugins.

### Configuration Changes

This recipe will make modifications to your application's configuration files based on [the documented changes from the Spring Boot team](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Configuration-Changelog).



