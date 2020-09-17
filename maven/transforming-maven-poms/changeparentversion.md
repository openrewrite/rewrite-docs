---
description: Sets the parent POM to a fixed version.
---

# ChangeParentVersion

### Java Definition

`ChangeParentVersion` changes the parent version to a fixed version that you specify.

```java
Iterable<Maven.Pom> poms;

ChangeParentVersion cpv = new ChangeParentVersion();
cpv.setGroupId("org.springframework.boot");
cpv.setArtifactId("spring-boot-starter-parent");
cpv.setToVersion("1.5.22.RELEASE");

Collection<Change> changes = new Refactor().visit(cpv).fix(poms);
```

* `groupId` - Update parent versions when they match this Maven group ID.
* `artifactId`- Update parent versions when they match this Maven artifact ID.
* `toVersion` - The version to set.

### YAML Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.ChangeSpringBootVersion
visitors:
  - org.openrewrite.maven.ChangeParentVersion:
    groupId: org.springframework.boot
    artifactId: spring-boot-starter-parent
    toVersion: 1.5.22.RELEASE
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

