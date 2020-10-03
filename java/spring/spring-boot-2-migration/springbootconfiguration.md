---
description: Migrating configuration properties.
---

# SpringBootConfiguration\*

Migrates Spring Boot properties defined in either `.properties` files or `.yml` files. Spring Boot offers a [migration utility](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Migration-Guide#configuration-properties-migration) that maps old properties onto new at _runtime_. This visitor migrates the properties in source code so that the runtime migrator is no longer necessary.

There are several visitors, migrating properties from one version to another incrementally as shown in the table below. Apply all of them if you want to migrate completely from Spring Boot 1.5.x to the latest Spring Boot version.

The visitor names should all take the form`org.openrewrite.java.spring.boot.config.SpringBootConfiguration<NAME>`.

| Properties Visitor | YAML Visitor | Migrate From | Migrate To |
| :--- | :--- | :--- | :--- |
| Properties.2\_0 | Yaml.2\_0 | 1.5.x | 2.0.x |
| Properties.2\_1 | Yaml.2\_1 | 2.0.x | 2.1.x |
| Properties.2\_2 | Yaml.2\_2 | 2.1.x | 2.2.x |
| Properties.2\_3 | Yaml.2\_3 | 2.2.x | 2.3.x |

There is no required or optional configuration for these visitors.

## YAML Definition

The `org.openrewrite.java.SpringBoot2Migration` recipe includes this visitor. Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.java.spring.boot.config.SpringBootConfigurationProperties.2_0
  - org.openrewrite.java.spring.boot.config.SpringBootConfigurationYaml.2_0
```

