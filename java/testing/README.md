---
description: >-
  rewrite-testing-frameworks automates test framework migrations and best
  practices
---

# Testing

The [rewrite-testing-frameworks](https://github.com/openrewrite/rewrite-testing-frameworks) module provides recipes and visitors which automates:

* Migration from [Junit](https://junit.org/junit5/) 4.x to 5.x 
* Migration from [Mockito](https://site.mockito.org/) 1.x to 3.x

This functionality is being actively developed. If you are aware of something we've missed or find a bug, [file an issue](https://github.com/openrewrite/rewrite-testing-frameworks/issues) and let us know.

## Using with the [Rewrite Maven Plugin](https://docs.openrewrite.org/configuring/rewrite-maven-plugin)​ <a id="use-in-the-rewrite-maven-plugin"></a>

To apply these recipes and visitors in the Maven plugin, add a `provided` scope dependency on `rewrite-testing-frameworks` and activate pre-packaged recipes or define your own.

```xml
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://maven.apache.org/POM/4.0.0"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-testing-frameworks</artifactId>
      <version>0.7.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>2.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.JUnit5Migration</recipe>
            <recipe>org.openrewrite.java.testing.Mockito1to3Migration</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

