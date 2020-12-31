---
description: >-
  Never have checkstyle fail your build again with rewrite-checkstyle
  automatically fixing any violations
---

# Checkstyle

## Configuration Options

Every Checkstyle visitor has the same set of configuration options. Either `config` or `configFile` must be provided.

* `config` - A string representation of checkstyle XML configuration \(the full document, including the check's configuration\).
* `configFile` - A checkstyle XML configuration file on disk.
* `properties` - A map of string keys and object values that can be evaluated in the Checkstyle configuration file with syntax like `${my.prop}`.
* `suppressions` - A `com.puppycrawl.tools.checkstyle.api.FilterSet` instance that can be used to suppress one or more checks \(including this one\).

## Using with in the [Rewrite Maven Plugin](../../configuring/rewrite-maven-plugin/)

To apply these recipes and visitors in the Maven plugin, add a `provided` scope dependency on `rewrite-checkstyle`, define a recipe pointing at your `checkstyle.xml`, and activate it.

### Adding a dependency and activating a custom recipe

```xml
<project xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://maven.apache.org/POM/4.0.0"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <dependencies>
    <dependency>
      <groupId>org.openrewrite.recipe</groupId>
      <artifactId>rewrite-checkstyle</artifactId>
      <version>2.0.2</version>
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
            <recipe>java.Checkstyle</recipe>
          </activeRecipes>
          <configLocation>${maven.multiModuleProjectDirectory}/rewrite.yml</configLocation>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

### Creating a Checkstyle recipe pointing at your checkstyle.xml

The above configuration assumes you create a recipe at the project root directory in `rewrite.yml` and that your `checkstyle.xml` is defined in the project root directory.

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: java.Checkstyle 
visitors:
  - 'org.openrewrite.checkstyle.*'
configure:
  org.openrewrite.checkstyle.*:
    configFile: ${maven.multiModuleProjectDirectory}/checkstyle.xml
```

## Example Checkstyle Configuration File

Below is a complete example of a [Checkstyle configuration file](https://checkstyle.sourceforge.io/config.html) that configures only this recipe.

```xml
<?xml version="1.0"?>
<!DOCTYPE module PUBLIC
  "-//Checkstyle//DTD Checkstyle Configuration 1.3//EN"
  "https://checkstyle.org/dtds/configuration_1_3.dtd">
<module name="Checker">
  <module name="TreeWalker">
    <module name="EmptyBlock">
      <property name="option" value="text"/>
      <property name="tokens" value="LITERAL_TRY"/>
    </module>
  </module>
</module>
```

