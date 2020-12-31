---
description: Reference for the rewrite-spring module
---

# Spring

The [rewrite-spring](https://github.com/openrewrite/rewrite-spring/) module provides recipes and visitors which automates:

* [Spring](https://spring.io/) hygiene and best practices
* Migration from [Spring Boot](https://spring.io/projects/spring-boot) 1.x to 2.x

This functionality is being actively developed. If you are aware of something we've missed or find a bug, [file an issue](https://github.com/openrewrite/rewrite-spring/issues) and let us know.

## Using in the [Rewrite Maven Plugin](../../configuring/rewrite-maven-plugin/)

To apply these recipes and visitors in the Maven plugin, add a `provided` scope dependency on `rewrite-spring` and activate pre-packaged recipes or define your own.

```xml
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://maven.apache.org/POM/4.0.0"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-spring</artifactId>
      <version>3.0.1</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>2.4.3</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.SpringBoot2Migration</recipe>
            <recipe>org.openrewrite.java.Spring</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

