
# AddDependency
`AddDependency` Adds a dependency if there is not already a dependency with matching `groupId` and `artifactId`.
A matching dependency with a different version or scope does NOT have its version or scope updated.
For that functionality, see [ChangeDependencyVersion](changedependencyversion.md) or [UpgradeDependencyVersion](upgradedependencyversion.md).

`AddDependency` is configured with these parameters:
* `groupId` - The groupId of the dependency to add
* `artifactId`- The artifactId of the dependency to add
* `version` - The version of the dependency to add
* `scope` - The scope in which to place the dependency. This parameter is optional.

## Java Definition
```java
MavenParser parser = MavenParser.builder().build();
Iterable<Maven.Pom> poms = parser.parse(...);

AddDependency ad = new AddDependency();
ad.setGroupId("com.fasterxml.jackson.core");
ad.setArtifactId("jackson-databind");
ad.setVersion("1.5.22.RELEASE");

Collection<Change> changes = new Refactor().visit(ad).fix(poms);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.AddJacksonDatabindRecipe` recipe as active in your build plugin will apply the visitor as shown in the example.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.AddJacksonDatabind
visitors:
  - org.openrewrite.maven.AddDependency:
      groupId: com.fasterxml.jackson.core
      artifactId: jackson-databind
      toVersion: 2.11.2
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddJacksonDatabindRecipe
include:
  - 'com.yourorg.AddJacksonDatabind'
```

## Example

Before:

```xml
<project>
   <dependencies>
     <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-annotations</artifactId>
       <version>2.11.2</version>
     </depenency>
   </dependencies>
</project>
```

After:

```xml
<project>
   <dependencies>
     <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-databind</artifactId>
       <version>2.11.2</version>
     </dependency>
     <dependency>
       <groupId>com.fasterxml.jackson.core</groupId>
       <artifactId>jackson-annotations</artifactId>
       <version>2.11.2</version>
     </depenency>
   </dependencies>
</project>
```

