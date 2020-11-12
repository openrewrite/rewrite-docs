---
description: Upgrade a parent version using advanced range selectors.
---

# UpgradeParentVersion

`UpgradeParentVersion` upgrades a matching parent version using an [advanced range selector](./#advanced-range-selectors).

* `groupId` - The Maven group ID to match.
* `artifactId` - The Maven artifact ID to match. This is optional. Omit if you want to upgrade all dependencies in a family at the same time, for example `com.fasterxml.jackson`.
* `toVersion` - An advanced range selector used to upgrade the dependency.
* `metadataPattern` - An optional regular expression patten to use to match "pre-release" or "metadata" suffixes. In some cases, like we see with Guava, the library author doesn't necessarily follow the intent of semver \(uses `-jre` and `-android` instead of `+jre` and `+android`\), and that's OK. This metadata pattern helps compensate for this. 

## Java Definition

```java
MavenParser parser = MavenParser.builder().build();
Iterable<Maven.Pom> poms = parser.parse(...);

UpgradeParentVersion udv = new UpgradeParentVersion();
upv.setGroupId("org.springframework.boot");
upv.setArtifactId("spring-boot-starter-parent");
upv.setToVersion("~1.5");
// upv.setToMetadataPattern("someSuffix")

Collection<Change> changes = new Refactor().visit(upv).fix(poms);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.UpgradeSpringBootRecipe` recipe as active in your build plugin will apply the visitor as shown in the example.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.UpgradeSpringBoot
visitors:
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      toVersion: ~1.5
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeSpringBootRecipe
include:
  - 'com.yourorg.UpgradeSpringBoot'
```

## Example

Before:

```xml
<project>
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
     <version>1.5.12.RELEASE</version>
     <relativePath/> <!-- lookup parent from repository -->
   </parent>
</project>
```

After:

```xml
<project>
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
     <version>1.5.22.RELEASE</version>
     <relativePath/> <!-- lookup parent from repository -->
   </parent>
</project>
```

