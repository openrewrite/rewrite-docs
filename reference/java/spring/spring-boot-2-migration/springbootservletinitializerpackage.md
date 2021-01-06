# SpringBootServletInitializerPackage

`SpringBootServletInitializer` changed packages between Spring Boot 1.5.x and Spring Boot 2.0.x. This visitor changes type references to the new package.

## YAML Definition

The `org.openrewrite.java.SpringBoot2Migration` recipe includes this visitor. Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.java.spring.boot.SpringBootServletInitializerPackage
```

