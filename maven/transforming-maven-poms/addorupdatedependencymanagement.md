# AddOrUpdateDependencyManagement

`AddOrUpdateDependencyManagement` Adds a dependency to the dependencyManagement section of the pom. If the pom does not already have a dependencyManagement section, this visitor will create it. Similar to [AddDependency](adddependency.md), if there is not already a dependency with matching `groupId` and `artifactId`. A matching dependency with a different version or scope does NOT have its version or scope updated. For that functionality, see [ChangeDependencyVersion](changedependencyversion.md) or [UpgradeDependencyVersion](upgradedependencyversion.md).

`AddDependency` is configured with these parameters:

* `groupId` - The groupId of the dependency to add
* `artifactId`- The artifactId of the dependency to add
* `version` - The version of the dependency to add
* `scope` - The scope in which to place the dependency. Optional.
* `type` - The type of the dependency. e.g.: "pom", "war". Optional.

## Java Definition

```java
MavenParser parser = MavenParser.builder().build();
Iterable<Maven.Pom> poms = parser.parse(...);

AddOrUpdateDependencyManagement audm = new AddOrUpdateDependencyManagement();
audm.setGroupId("org.junit.jupiter")
audm.setArtifactId("junit-jupiter-api")
audm.setVersion("5.6.2")
audm.setScope("test")

Collection<Change> changes = new Refactor().visit(audm).fix(poms);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.AddJacksonDatabindRecipe` recipe as active in your build plugin will apply the visitor as shown in the example.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.AddJacksonDatabind
visitors:
  - org.openrewrite.maven.AddOrUpdateDependencyManagement:
      groupId: com.fasterxml.jackson.core
      artifactId: jackson-databind
      toVersion: 2.11.2
      scope: test
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddJacksonDatabindRecipe
include:
  - 'com.yourorg.AddJacksonDatabind'
```

## Example

Before:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>dependency-management-example</artifactId>
    <version>0.1-SNAPSHOT</version>
    <name>dependency-management-example</name>
</project>
```

After:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.openrewrite.maven</groupId>
    <artifactId>dependency-management-example</artifactId>
    <version>0.1-SNAPSHOT</version>
    <name>dependency-management-example</name>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
                <version>5.6.2</version>
                <scope>test</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```

