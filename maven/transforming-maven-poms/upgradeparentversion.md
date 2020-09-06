---
description: Upgrade a parent version using advanced range selectors.
---

# UpgradeParentVersion

### Definition

`UpgradeParentVersion` upgrades a matching parent version using an [advanced range selector](./#advanced-range-selectors).

```java
Iterable<Maven.Pom> poms;

UpgradeParentVersion udv = new UpgradeParentVersion();
upv.setGroupId("org.springframework.boot");
upv.setArtifactId("spring-boot-starter-parent");
upv.setToVersion("~1.5");
// upv.setToMetadataPattern("someSuffix")

Collection<Change> changes = new Refactor().visit(upv).fix(poms);
```

* `groupId` - The Maven group ID to match.
* `artifactId` - The Maven artifact ID to match. This is optional. Omit if you want to upgrade all dependencies in a family at the same time, for example `com.fasterxml.jackson`.
* `toVersion` - An advanced range selector used to upgrade the dependency.
* `metadataPattern` - An optional regular expression patten to use to match "pre-release" or "metadata" suffixes. In some cases, like we see with Guava, the library author doesn't necessarily follow the intent of semver \(uses `-jre` and `-android` instead of `+jre` and `+android`\), and that's OK. This metadata pattern helps compensate for this. 

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.UpgradeSpringBoot
visitors:
  - org.openrewrite.maven.UpgradeParentVersion:
    groupId: org.springframework.boot
    artifactId: spring-boot-starter-parent
    toVersion: 25-29
    metadataPattern: '-jre'
```

### Example

Before:

```markup
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

```markup
<project>
   <parent>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-parent</artifactId>
     <version>1.5.22.RELEASE</version>
     <relativePath/> <!-- lookup parent from repository -->
   </parent>
</project>
```

