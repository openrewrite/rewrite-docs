---
description: Migrating from Mockito 1.x to Mockito 2.x.
---

# Mockito

## Use in the [Rewrite Maven Plugin](../../configuring/rewrite-maven-plugin/)

To apply these recipes and visitors in the Maven plugin, add a `provided` scope dependency on `rewrite-spring` \(included with the spring package because this migration often occurs as part of the upgrade from Spring Boot 1.x to 2.x\) and activate pre-packaged recipes or define your own.

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

    <build>
      <plugins>
        <plugin>
          <groupId>org.openrewrite.maven</groupId>
          <artifactId>rewrite-maven-plugin</artifactId>
          <version>2.4.13</version>
          <configuration>
            <activeRecipes>
              <recipe>org.openrewrite.java.Mockito</recipe>
            </activeRecipes>
          </configuration>
        </plugin>
      </plugins>
    </build>
  </dependencies>
```

