---
description: Updates a Maven property value.
---

# ChangePropertyValue
`ChangePropertyValue` replaces the value of the specified property.

* `key` - The property key to update.
* `toValue`- The desired value. 

## Java Definition

```java
MavenParser parser = MavenParser.builder().build();
Iterable<Maven.Pom> poms = parser.parse(...);

ChangePropertyValue cpv = new ChangePropertyValue();
cpv.setKey("java.version");
cpv.setToValue("11");

Collection<Change> changes = new Refactor().visit(cpv).fix(poms);
```

## YAML Definition
Adding the following to your rewrite.yml and setting the `com.yourorg.ChangePropertyVersionRecipe` recipe as active in your build plugin will apply the visitor as shown in the example.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.UpdateJavaVersion
visitors:
  - org.openrewrite.maven.ChangePropertyVersion:
      key: java.version
      toValue: 11
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePropertyVersionRecipe
include:
  - 'com.yourorg.ChangePropertyVersion'
```

## Example

Before:

```xml
<project>
   ...
   <properties>
     <java.version>1.8</java.version>
   </properties>
</project>
```

After:

```xml
<project>
   ...
   <properties>
      <java.version>11</java.version>
   </properties>
</project>
```
